export const getCompanyInputFilter = `{
    name: String,
    slug: String,
    email: String,
    code: String,
    status: String,
    login: String,
    password: String
}`;
export const getCompanyInput = `{
    name: String!,
    email: String!,
    status: String!,
    login: String!,
    password: String!
}`;
export const DeleteOneInputCompany = `{
    id: String
}`;