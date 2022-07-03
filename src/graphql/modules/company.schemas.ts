import { gql } from "apollo-server";
import { 
    DeleteOneInputCompany,
    getCompanyInput,
    getCompanyInputFilter
} from './helpers/company.input';
import {
    DeleteOneCompanyReturn,
    UpdateOneCompanyReturn,
    getCompanyType
} from './helpers/company.types';

export const typeDefs = gql`
    # Querys
    type getCompanyType ${getCompanyType}
    type UpdateOneCompanyReturn ${UpdateOneCompanyReturn}
    type DeleteOneCompanyReturn ${DeleteOneCompanyReturn}

    # Mutations
    input getCompanyInput ${getCompanyInput}
    input getCompanyInputFilter ${getCompanyInputFilter}
    input DeleteOneInputCompany ${DeleteOneInputCompany}
    

    type Query {
        CompanyGetAll: [getCompanyType],
        CompanyGetAllFilter(data:getCompanyInputFilter): [getCompanyType],
    }

    type Mutation {
        CompanyCreateOne(
            data: getCompanyInput
        ): getCompanyType
        CompanyUpdateOne(
            data: getCompanyInput,
            id: String
        ): UpdateOneCompanyReturn
        CompanyDeleteOne(
            data: DeleteOneInputCompany
        ): DeleteOneCompanyReturn
    }
`
