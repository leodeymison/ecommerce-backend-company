export const SocialType = `{
    facebook: String,
    instagram: String,
    youtube: String
}`;

export const TemaType = `{
    template: String,
    color: String
}`;

export const AddressType = `{
    cep: String,
    greografic: String,
    link: String
}`;

export const getShopType = `{
    id: ID,
    email: String,
    name: String,
    slug: String,
    description:  String,
    about: String,
    logo: String,
    favicon: String,
    sociais: SocialType,
    politic: String,
    tema: TemaType,
    lang: String,
    address: AddressType,
    adminId: String,
    createdAt: String,
    updatedAt: String
}`;

export const UpdateShopOneReturn = `{
    acknowledged: Boolean,
    matchedCount: Int,
    modifiedCount: Int,
    upsertedCount: Int
}`;

export const DeleteShopOneReturn = `{
    acknowledged: Boolean,
    deletedCount: Int,
}`;