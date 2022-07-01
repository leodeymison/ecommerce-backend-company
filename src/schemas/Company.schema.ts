import { Schema, model } from "mongoose";
import { CompanyType } from './Company.types'

const CompanySchema = new Schema({
   
}, {
   timestamps:  true
})

export default model<CompanyType>('Company', CompanySchema)