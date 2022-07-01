import { Model } from 'mongoose';
import validation, { list } from '../config/validation';

export async function createMutation<T>(schemas:Model<T> | any, args:T | any, val: list){

    validation[val](args)

    return await schemas.create(args)
}