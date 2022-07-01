export interface all {
    id: string,
    createdAt: string,
    updatedAt: string
}

export interface Social {
    facebook: string,
    instagram: string,
    youtube: string
}

export type Lang = 'pt-br' | 'en'

export interface Affiliations {
    id: string
}

export interface Address {
    cep: string,
    greografic: string,
    link: string
}