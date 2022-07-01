import { gql } from "apollo-server";
import { 
    DeleteCategoryOneReturn,
    UpdateCategoryOneReturn,
    getCategoryType
} from './helpers/category.types'
import {
    DeleteCategoryOneInput,
    getCategoryInput,
    getCategoryInputFilter
} from './helpers/category.inputs'

export default gql`
    # Querys
    type getCategoryType ${getCategoryType},
    type UpdateCategoryOneReturn ${UpdateCategoryOneReturn},
    type DeleteCategoryOneReturn ${DeleteCategoryOneReturn},

    # Mutations
    input getCategoryInputFilter ${getCategoryInputFilter},
    input getCategoryInput ${getCategoryInput},
    input DeleteCategoryOneInput ${DeleteCategoryOneInput},


    type Query {
        CategoryGetAll: [getCategoryType],
        CategoryGetAllFilter(data:getCategoryInputFilter): [getCategoryType],
    }
    
    type Mutation {
        CategoryCreateOne(
            data: getCategoryInput
        ): getCategoryType
        CategoryUpdateOne(
            data: getCategoryInput,
            id: String
        ): UpdateCategoryOneReturn
        CategoryDeleteOne(
            data: DeleteCategoryOneInput
        ): DeleteCategoryOneReturn
    }

`