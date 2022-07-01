import { Lang, Social, Address, all } from './index.types'

interface Tema {
    template: string,
    color: string
}

export interface ShopTypes extends all {
    id: string,
    name: string,
    email: string,
    slug?: string,
    description:  string,
    about?: string, // Sobre a empresa
    logo: string,
    favicon: string,
    sociais?: Social,
    politic?: string,
    tema: Tema,
    lang: Array<Lang>,
    address?: Address,
    adminId: string
}
