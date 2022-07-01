export function errosLog(lang:'pt-br') {
    return langs[lang]
}

type CamposList = 'name'
interface CamposBr {
    name: string
}
const campos: {
    'pt-br': CamposBr
} = {
    'pt-br': {
        name: "nome"
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