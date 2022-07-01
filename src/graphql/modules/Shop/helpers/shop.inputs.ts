export const getShopInputFilter = `{
    name: String,
    slug: String,
    description:  String,
    about: String,
    logo: String,
    favicon: String,
    sociais: SocialInput,
    politic: String,
    tema: TemaInput,
    lang: String,
    address: AddressInput,
    adminId: String
}`;

export const DeleteShopOneInput = `{
    id: String
}`;

export const SocialInput = `{
    facebook: String,
    instagram: String,
    youtube: String
}`;
export const TemaInput = `{
    template: String,
    color: String
}`;

export const AddressInput = `{
    cep: String,
    greografic: String,
    link: String
}`;

export const getShopInput = `{
    id: ID,
    name: String,
    email: String,
    slug: String,
    description:  String,
    about: String,
    logo: String,
    favicon: String,
    sociais: SocialInput,
    politic: String,
    tema: TemaInput,
    lang: String,
    address: AddressInput,
    adminId: String,
    createdAt: String,
    updatedAt: String
}`;