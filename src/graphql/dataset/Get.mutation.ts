import { Model } from "mongoose";

export async function getAllMutation<T>(schema:Model<T>){
    return await schema.find()
}

export async function getAllFilterMutation<T>(schema:Model<T>, filter:Object){
    return await schema.find(filter)
}