import { gql } from "apollo-server";

export const typeDefs = gql`
    # Querys
    type getCompanyType {

    }
    type UpdateOneCompanyReturn {

    }
    type DeleteOneCompanyReturn {

    }

    # Mutations
    input getCompanyInput {

    }
    input getCompanyInputFilter {

    }
    input DeleteOneInputCompany {

    }
    

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
