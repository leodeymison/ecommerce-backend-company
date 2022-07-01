import { gql } from "apollo-server";
import { 
    DeleteSubCategoryOneReturn,
    UpdateSubCategoryOneReturn,
    getSubCategoryType
} from './helpers/subCategory.types'
import {
    DeleteSubCategoryOneInput,
    getSubCategoryInput,
    getSubCategoryInputFilter
} from './helpers/subCategory.inputs'

export default gql`
    # Querys
    type getSubCategoryType ${getSubCategoryType},
    type UpdateSubCategoryOneReturn ${UpdateSubCategoryOneReturn},
    type DeleteSubCategoryOneReturn ${DeleteSubCategoryOneReturn},

    # Mutations
    input getSubCategoryInputFilter ${getSubCategoryInputFilter},
    input getSubCategoryInput ${getSubCategoryInput},
    input DeleteSubCategoryOneInput ${DeleteSubCategoryOneInput},


    type Query {
        SubCategoryGetAll: [getSubCategoryType],
        SubCategoryGetAllFilter(data:getSubCategoryInputFilter): [getSubCategoryType],
    }
    
    type Mutation {
        SubCategoryCreateOne(
            data: getSubCategoryInput
        ): getSubCategoryType
        SubCategoryUpdateOne(
            data: getSubCategoryInput,
            id: String
        ): UpdateSubCategoryOneReturn
        SubCategoryDeleteOne(
            data: DeleteSubCategoryOneInput
        ): DeleteSubCategoryOneReturn
    }

`