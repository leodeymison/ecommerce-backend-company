import ShopSchema from '../../../schemas/Shop.schema';

// Types
import { ShopTypes } from '../../../schemas/types/Shop.types';

// Datasets
import { createMutation } from '../../dataset/Create.mutation';
import { getAllMutation, getAllFilterMutation } from '../../dataset/Get.mutation';
import { updateOneMutation } from '../../dataset/Update.mutation';
import { DeleteOneMutation } from '../../dataset/Delete.mutation';

export const resolvers = {
    Query: {
        ShopGetAll: async () => {
            return await getAllMutation(ShopSchema)
        },
        ShopGetAllFilter: async (obj:any, args: {data: Object}) => {
            return await getAllFilterMutation(ShopSchema, args.data)
        }
    },
    Mutation: {
        ShopCreateOne: async (obj:any, args: {data:ShopTypes}) => {
            return await createMutation<ShopTypes>(ShopSchema, args.data, 'Shop')
        },
        ShopUpdateOne: async (obj:any, args: {data:ShopTypes, id: string}) => {
            return await updateOneMutation<ShopTypes>(ShopSchema, args.data, args.id, 'Shop')
        },
        ShopDeleteOne: async (obj:any, args: {id: string}) => {
            return await DeleteOneMutation(ShopSchema, args.id)
        }
    }
}