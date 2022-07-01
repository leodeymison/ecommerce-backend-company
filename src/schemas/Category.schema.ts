import { Schema, model } from "mongoose";
import { CategoryType } from './types/Category.types'

const CategorySchema = new Schema({
   name:{
      type:String,
      required:true,
      min: 2,
      max: 255
   },
   slug:{
      type:String,
      required:true,
      min: 2,
      max: 255
   },
   shopId: {
      type: String,
      required: true
   }
}, {
   timestamps:  true
})

export default model<CategoryType>('Category', CategorySchema)