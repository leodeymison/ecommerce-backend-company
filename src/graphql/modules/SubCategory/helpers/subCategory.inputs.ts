export const getSubCategoryInputFilter = `{
    id: String,
    name: String,
    slug: String,
    categoryId: String
    createdAt: String
    updatedAt: String
}`;

export const getSubCategoryInput = `{
    id: String,
    name: String!,
    slug: String!,
    categoryId: String!
    createdAt: String
    updatedAt: String
}`;

export const DeleteSubCategoryOneInput = `{
    id: String
}`;