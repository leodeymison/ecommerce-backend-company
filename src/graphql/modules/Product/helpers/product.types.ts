export const ResponseType = `{
    id: String,
    name: String,
    body: String,
    code_user: String,
    id_user: String,
    createDate: String,
    updateDate: String,
}`;
export const CommentType = `{
    id: String,
    name: String,
    body: String,
    avaliation: Int,
    code_user: String,
    id_user: String,
    createDate: String,
    updateDate: String,
    responses: [ResponseType]
}`;
export const InformationType = `{
    lang: String,
    name: String,
    slug: String,
    value: String,
    comments: CommentType,
    video: String,
    description: String
}`;
export const ImageType = `{
    url: String
}`;
export const getProductType = `{
    id: String,
    code_product: String,
    informations: [InformationType],
    avaliation: Int,
    image_primary: String,
    images: [ImageType],
    varProducts: [String],
    subCategoryId: String
}`;

export const UpdateOneProductReturn = `{
    acknowledged: Boolean,
    matchedCount: Int,
    modifiedCount: Int,
    upsertedCount: Int
}`;

export const DeleteOneProductReturn = `{
    acknowledged: Boolean,
    deletedCount: Int,
}`;