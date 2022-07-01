export function errosLog(lang:'pt-br') {
    return langs[lang]
}

type CamposList = 'name' | 'email' | 'description' | 'about' | 'logo' | 'favicon' | 'facebook' | 'instagram' | 'youtube' |
'politic' | 'cep' | 'link_de_endereço' | 'slug' | 'value' | 'video' | 'code' | 'avaliation' | 'image' |
'sub_categort' | 'categoryId' | 'shopId'
interface CamposBr {
    name: string, email: string, description: string, about: string, logo: string, favicon: string,
    facebook: string, instagram: string, youtube: string, politic: string, cep: string,
    link_de_endereço: string, slug: string, value: string, video: string, code: string,
    avaliation: string, image: string, sub_categort: string, categoryId: string, shopId: string
}
const campos: {
    'pt-br': CamposBr
} = {
    'pt-br': {
        name: 'nome', email: 'email', description: 'descrição', about: 'sobre',
        logo: 'logo', favicon: 'simbolo de logo - favicon', facebook: 'facebook',
        instagram: 'instagram', youtube: 'youtube', politic: 'política', cep: 'CEP',
        link_de_endereço: 'link de endereço', slug: 'Slug de url', value: "valor", video: "vídeo",
        code: 'código', avaliation: 'validação', image: 'imagem', sub_categort: 'sub categoria',
        categoryId: 'id da categoria', shopId: 'id da loja'
    }
}

const langs:{
    'pt-br': {
        MUITOPEQUENO: Function, MUITOGRANDE: Function, NAOEEMAIL: Function,
        NAOEURL: Function, NAOECEP: Function, EMPTY: Function, NAONUMBER: Function
    }
} = {
    'pt-br': {
        MUITOPEQUENO: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} é muito pequeno`;
        },
        MUITOGRANDE: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} é muito grande`;
        },
        NAOEEMAIL: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} não é um email`;
        },
        NAOEURL: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} não é uma URL`;
        },
        NAOECEP: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} não é um CPF`;
        },
        EMPTY: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} é obrigatório`;
        },
        NAONUMBER: (campo: CamposList) => {
            const text = campos['pt-br'][campo]
            return `O campo ${text} não é um número`;
        },
    }
}