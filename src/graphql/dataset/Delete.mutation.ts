import { Model } from "mongoose";

export async function DeleteOneMutation<T>(schema: Model<T> | any, id: string){
    return await schema.deleteOne({id})
}