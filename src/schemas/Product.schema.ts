import { Schema, model } from "mongoose";
import { ProductType } from './types/Product.model'

const ProductSchema = new Schema({
    code_product: {
        type: String,
        required: true
    },
    informations: [{
        lang: String,
        name: {
            type: String,
            required: true,
            min: 2,
            max: 255,
        },
        slug: {
            type: String,
            required: true,
            min: 2,
            max: 255,
        },
        description: {
            type: String,
            required: true,
            min: 50
        },
        value: {
            type: String,
            required: true
        },
        comments: [
            {
                id: {
                    type: String,
                    required: true
                },
                name: {
                    type: String,
                    required: true,
                    min: 2,
                    max: 35,
                },
                body: {
                    type: String,
                    required: true,
                    min: 10
                },
                avaliation: {
                    type: Number,
                    required: true
                },
                code_user: {
                    type: String,
                    required: true
                },
                id_user: {
                    type: String,
                    required: true
                },
                createDate: String,
                updateDate: String,
                responses: [
                    {
                        id: {
                            type: String,
                            required: true
                        },
                        name: {
                            type: String,
                            required: true,
                            min: 2,
                            max: 35,
                        },
                        body: {
                            type: String,
                            required: true,
                            min: 10
                        },
                        code_user: {
                            type: String,
                            required: true
                        },
                        id_user: {
                            type: String,
                            required: true
                        },
                        createDate: String,
                        updateDate: String,
                    }
                ]
            }
        ],
        video: {
            type: String
        },
    }],
    avaliation: {
        type: Number,
        required: true
    },
    image_primary: {
        type: String,
        required: true
    },
    images: [
        {
            url: String,
        }
    ],
    varProducts: [String],
    subCategoryId: {
        type: String,
        required: true
    }
},{
    timestamps:  true
})

export default model<ProductType>('Product', ProductSchema)