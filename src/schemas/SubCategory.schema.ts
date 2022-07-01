import { model, Schema } from 'mongoose'
import { SubCategoryTypes } from './types/SubCategory.types'

const SubCategorySchema = new Schema({
    name:{
        type: String,
        required:true,
        min: 2,
        max: 255
    },
    slug:{
        type: String,
        required:true,
        min: 2,
        max: 255
    },
    categoryId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default model<SubCategoryTypes>('SubCategory', SubCategorySchema)