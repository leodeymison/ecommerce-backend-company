import { Model } from "mongoose";
import validation, { list } from '../config/validation';

export function updateOneMutation<T>(schemas:Model<T> | any, args:T | any, id:string, val: list){
    
    validation[val](args)
    
    return schemas.updateOne({
        id: id
    }, args)
}