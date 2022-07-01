import SubCategorySchema from '../../../schemas/SubCategory.schema';

// Types
import { SubCategoryTypes } from '../../../schemas/types/SubCategory.types';

// Datasets globals
import { createMutation } from '../../dataset/Create.mutation';
import { getAllMutation, getAllFilterMutation } from '../../dataset/Get.mutation';
import { updateOneMutation } from '../../dataset/Update.mutation';
import { DeleteOneMutation } from '../../dataset/Delete.mutation';

export const resolvers = {
    Query: {
        SubCategoryGetAll: async () => {
            return await getAllMutation(SubCategorySchema)
        },
        SubCategoryGetAllFilter: async (obj:any, args: {data: Object}) => {
            return await getAllFilterMutation(SubCategorySchema, args.data)
        }
    },
    Mutation: {
        SubCategoryCreateOne: async (obj:any, args: {data:SubCategoryTypes}) => {
            return await createMutation<SubCategoryTypes>(SubCategorySchema, args.data, 'SubCategory')
        },
        SubCategoryUpdateOne: async (obj:any, args: {data:SubCategoryTypes, id: string}) => {
            return await updateOneMutation<SubCategoryTypes>(SubCategorySchema, args.data, args.id, 'SubCategory')
        },
        SubCategoryDeleteOne: async (obj:any, args: {id: string}) => {
            return await DeleteOneMutation(SubCategorySchema, args.id)
        }
    }
}