import CategorySchema from '../../../schemas/Category.schema';

// Types
import { CategoryType } from '../../../schemas/types/Category.types';

// Datasets globals
import { createMutation } from '../../dataset/Create.mutation';
import { getAllMutation, getAllFilterMutation } from '../../dataset/Get.mutation';
import { updateOneMutation } from '../../dataset/Update.mutation';
import { DeleteOneMutation } from '../../dataset/Delete.mutation';

export const resolvers = {
    Query: {
        CategoryGetAll: async () => {
            return await getAllMutation(CategorySchema)
        },
        CategoryGetAllFilter: async (obj:any, args: {data: Object}) => {
            return await getAllFilterMutation(CategorySchema, args.data)
        }
    },
    Mutation: {
        CategoryCreateOne: async (obj:any, args: {data:CategoryType}) => {
            return await createMutation<CategoryType>(CategorySchema, args.data, 'Category')
        },
        CategoryUpdateOne: async (obj:any, args: {data:CategoryType, id: string}) => {
            return await updateOneMutation<CategoryType>(CategorySchema, args.data, args.id, 'Category')
        },
        CategoryDeleteOne: async (obj:any, args: {id: string}) => {
            return await DeleteOneMutation(CategorySchema, args.id)
        }
    }
}