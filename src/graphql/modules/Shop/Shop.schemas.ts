import { gql } from "apollo-server";
import { AddressType, DeleteShopOneReturn, getShopType, SocialType, TemaType, UpdateShopOneReturn } from './helpers/shop.types'
import { AddressInput, DeleteShopOneInput, getShopInput, getShopInputFilter, SocialInput, TemaInput } from './helpers/shop.inputs'
export default gql`
    # Querys
    type SocialType ${SocialType},
    type TemaType ${TemaType},
    type AddressType ${AddressType},
    type getShopType ${getShopType},
    type UpdateShopOneReturn ${DeleteShopOneInput},
    type DeleteShopOneReturn ${DeleteShopOneReturn},

    # Mutations
    input getShopInputFilter ${getShopInput},
    input SocialInput ${SocialInput},
    input TemaInput ${TemaInput},
    input AddressInput ${AddressInput},
    input getShopInput ${getShopInputFilter},
    input DeleteShopOneInput ${DeleteShopOneInput},


    type Query {
        ShopGetAll: [getShopType],
        ShopGetAllFilter(data:getShopInputFilter): [getShopType],
    }
    
    type Mutation {
        ShopCreateOne(
            data: getShopInput
        ): getShopType
        ShopUpdateOne(
            data: getShopInput,
            id: String
        ): UpdateShopOneReturn
        ShopDeleteOne(
            data: DeleteShopOneInput
        ): DeleteShopOneReturn
    }

`