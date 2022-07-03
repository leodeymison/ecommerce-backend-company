export function errosLog(lang:'pt-br') {
    return langs[lang]
}

type CamposList = 'name' | 'slug' | 'email' | 'code' | 'status' | 'login' | 'password'
interface CamposBr {
    name: string,
    slug: string,
    email: string,
    code: string,
    status: string,
    login: string,
    password: string
}
const campos: {
    'pt-br': CamposBr
} = {
    'pt-br': {
        name: "nome",
        slug: "slug de url",
        email: "e-mail",
        code: 'código',
        status: 'status',
        login: 'login',
        password: 'senha'
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