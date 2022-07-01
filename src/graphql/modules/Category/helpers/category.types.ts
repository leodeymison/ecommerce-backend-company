export const getCategoryType = `{
    id: String,
    name: String,
    slug: String,
    shopId: String,
    createdAt: String
    updatedAt: String
}`;

export const UpdateCategoryOneReturn = `{
    acknowledged: Boolean,
    matchedCount: Int,
    modifiedCount: Int,
    upsertedCount: Int
}`;

export const DeleteCategoryOneReturn = `{
    acknowledged: Boolean,
    deletedCount: Int,
}`;