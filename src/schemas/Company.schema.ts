import { Schema, model } from "mongoose";
import { CompanyType } from './Company.types'

const CompanySchema = new Schema({
   name: {
      type: String,
      required: true,
      max: 100,
      min: 2
   },
   slug: {
      type: String,
      required: true,
      max: 100,
      min: 2
   },
   email: {
      type: String,
      required: true,
   },
   code: {
      type: String,
      required: true
   },
   status: {
      type: String,
      required: true
   },
   login: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
}, {
   timestamps:  true
})

export default model<CompanyType>('Company', CompanySchema)