export const getCompanyType = `{
    name: String,
    slug: String,
    email: String,
    code: String,
    status: String,
    login: String,
    password: String
}`;

export const UpdateOneCompanyReturn = `{
    acknowledged: Boolean,
    matchedCount: Int,
    modifiedCount: Int,
    upsertedCount: Int
}`;

export const DeleteOneCompanyReturn = `{
    acknowledged: Boolean,
    deletedCount: Int,
}`;