import { gql } from "apollo-server";
import { 
    CommentType, 
    ImageType, 
    InformationType, 
    ResponseType, 
    getProductType, 
    UpdateOneProductReturn,
    DeleteOneProductReturn
} from './helpers/product.types'
import { 
    CommentInput, 
    ImageInput, 
    InformationInput, 
    ResponseInput, 
    getProductInput, 
    getProductInputFilter, 
    DeleteOneInputProduct,
} from './helpers/product.input'

export default gql`
    # Querys
    type ResponseType ${ResponseType}
    type CommentType ${CommentType}
    type InformationType ${InformationType}
    type ImageType ${ImageType}
    type getProductType ${getProductType}
    type UpdateOneProductReturn ${UpdateOneProductReturn}
    type DeleteOneProductReturn ${DeleteOneProductReturn}

    # Mutations
    input ResponseInput ${ResponseInput}
    input CommentInput ${CommentInput}
    input InformationInput ${InformationInput}
    input ImageInput ${ImageInput}
    input getProductInput ${getProductInput}
    input getProductInputFilter ${getProductInputFilter}
    input DeleteOneInputProduct ${DeleteOneInputProduct}
    

    type Query {
        ProductGetAll: [getProductType],
        ProductGetAllFilter(data:getProductInputFilter): [getProductType],
    }

    type Mutation {
        ProductCreateOne(
            data: getProductInput
        ): getProductType
        ProductUpdateOne(
            data: getProductInput,
            id: String
        ): UpdateOneProductReturn
        ProductDeleteOne(
            data: DeleteOneInputProduct
        ): DeleteOneProductReturn
    }
`
