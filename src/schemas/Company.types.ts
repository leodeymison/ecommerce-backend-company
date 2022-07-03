import { all } from "./index.typs";

enum Status { 'criado' , 'ativo' , 'desativo' , 'pendencia' }

export interface CompanyType extends all {
    name: string,
    slug: string,
    email: string,
    code: string,
    status: Status, // criado | ativo | desativo | pendencia financeira
    login: string,
    password: string
}