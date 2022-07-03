import slugify from "slugify"
import CompanySchema from "../../schemas/Company.schema";
import { CompanyType } from "../../schemas/Company.types";
import { createMutation } from "../dataset/Create.mutation";
import { DeleteOneMutation } from "../dataset/Delete.mutation";
import { getAllFilterMutation, getAllMutation } from "../dataset/Get.mutation";
import { updateOneMutation } from "../dataset/Update.mutation";
import { codeGenerator } from "../../modules/CodeGenerator.module";

export const resolvers = {
    Query: {
        CompanyGetAll: async () => {
            return await getAllMutation(CompanySchema)
        },
        CompanyGetAllFilter: async (obj:any, args: {data: Object}) => {
            return await getAllFilterMutation(CompanySchema, args.data)
        }
    },
    Mutation: {
        CompanyCreateOne: async (obj:any, args: {data:CompanyType}) => {
            args.data.code = codeGenerator()
            args.data.slug = slugify(args.data.name)

            return await createMutation<CompanyType>(CompanySchema, args.data, 'Company')
        },
        CompanyUpdateOne: async (obj:any, args: {data:CompanyType, id: string}) => {
            args.data.slug = slugify(args.data.name)

            return await updateOneMutation<CompanyType>(CompanySchema, args.data, args.id, 'Company')
        },
        CompanyDeleteOne: async (obj:any, args: {id: string}) => {
            return await DeleteOneMutation(CompanySchema, args.id)
        }
    }
}
