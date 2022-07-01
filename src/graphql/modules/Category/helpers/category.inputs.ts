export const getCategoryInputFilter = `{
    id: String,
    name: String,
    slug: String,
    shopId: String
    createdAt: String
    updatedAt: String
}`;

export const getCategoryInput = `{
    id: String,
    name: String!,
    slug: String!,
    shopId: String!
    createdAt: String
    updatedAt: String
}`;

export const DeleteCategoryOneInput = `{
    id: String
}`;