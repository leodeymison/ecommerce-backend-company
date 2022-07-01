import ProductSchema from "../../../schemas/Product.schema"
import { ProductType } from "../../../schemas/types/Product.model"
import { createMutation } from "../../dataset/Create.mutation"
import { DeleteOneMutation } from "../../dataset/Delete.mutation"
import { getAllFilterMutation, getAllMutation } from "../../dataset/Get.mutation"
import { updateOneMutation } from "../../dataset/Update.mutation"

export const resolvers = {
    Query: {
        ProductGetAll: async () => {
            return await getAllMutation(ProductSchema)
        },
        ProductGetAllFilter: async (obj:any, args: {data: Object}) => {
            return await getAllFilterMutation(ProductSchema, args.data)
        }
    },
    Mutation: {
        ProductCreateOne: async (obj:any, args: {data:ProductType}) => {
            return await createMutation<ProductType>(ProductSchema, args.data, 'Product')
        },
        ProductUpdateOne: async (obj:any, args: {data:ProductType, id: string}) => {
            return await updateOneMutation<ProductType>(ProductSchema, args.data, args.id, 'Product')
        },
        ProductDeleteOne: async (obj:any, args: {id: string}) => {
            return await DeleteOneMutation(ProductSchema, args.id)
        }
    }
}
