import { model, Schema } from 'mongoose';
import { ShopTypes } from './types/Shop.types';

const ShopSchema = new Schema({
    name: { // max: 40 car; min: 2 car
        type: String,
        required: true
    },
    email: { // Deve ser email
        type: String,
    },
    slug: {
        type: String,
    },
    description: { // max: 255 car; min: 20 car
        type: String,
        required: true
    },
    lang: [{
        type: String,
        required: true
    }],
    about: { // min: 100 car
        type: String,
    },
    logo: { // deve ser url
        type: String,
        required: true
    },
    favicon: { // deve ser url
        type: String,
        required: true
    },
    sociais: {
        type: {
            facebook: String, // deve ser url
            instagram: String, // deve ser url
            youtube: String // deve ser url
        }
    },
    politic: { // deve ser url
        type: String,
    },
    tema: {
        type: {
            template: String,
            color: String
        },
        required: true
    },
    address: {
        type: {
            cep: String, // Deve ser um cep
            greografic: String,
            link: String // Deve ser uma url
        }
    },
    adminId: {
        type: String,
        required: true
    },
},{
    timestamps: true,
})


export default model<ShopTypes>('Shop', ShopSchema)