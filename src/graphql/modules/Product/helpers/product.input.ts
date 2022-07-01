export const getProductInputFilter = `{
    code_product: String,
    informations: [InformationInput],
    avaliation: Int,
    image_primary: String,
    images: [ImageInput],
    varProducts: [String],
    subCategoryId: String
}`;
export const ResponseInput = `{
    id: String!,
    name: String!,
    body: String!,
    code_user: String!,
    id_user: String!,
    createDate: String,
    updateDate: String,
}`;
export const CommentInput = `{
    id: String!,
    name: String!,
    body: String!,
    avaliation: Int!,
    code_user: String!,
    id_user: String!,
    createDate: String,
    updateDate: String,
    responses: [ResponseInput]
}`;
export const InformationInput = `{
    lang: String!,
    name: String!,
    slug: String!,
    value: String!,
    comments: CommentInput,
    video: String,
    description: String!
}`;
export const ImageInput = `{
    url: String!
}`;
export const getProductInput = `{
    code_product: String!,
    informations: [InformationInput],
    avaliation: Int!,
    image_primary: String!,
    images: [ImageInput],
    varProducts: [String],
    subCategoryId: String!,
}`;


export const DeleteOneInputProduct = `{
    id: String
}`;