export const getSubCategoryType = `{
    id: String,
    name: String,
    slug: String,
    categoryId: String,
    createdAt: String
    updatedAt: String
}`;

export const UpdateSubCategoryOneReturn = `{
    acknowledged: Boolean,
    matchedCount: Int,
    modifiedCount: Int,
    upsertedCount: Int
}`;

export const DeleteSubCategoryOneReturn = `{
    acknowledged: Boolean,
    deletedCount: Int,
}`;