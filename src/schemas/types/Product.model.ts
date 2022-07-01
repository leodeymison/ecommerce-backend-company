import { all } from "./index.types"

interface Images {
    url: string
}

interface Comments {
    id: string,
    name: string,
    body: string,
    avaliation: Number,
    code_user: string,
    id_user: string,
    createDate: string,
    updateDate: string,
    responses: Array<Response>
}
interface Response {
    id: string,
    name: string,
    body: string,
    code_user: string,
    id_user: string,
    createDate: string,
    updateDate: string,
}
export interface ProductType extends all {
    informations: Array<{
        name: string,
        slug: string,
        description: string,
        value: string,
        comments?: Array<Comments>,
        video?: string,
    } | boolean>,
    code_product: string,
    avaliation: number,
    image_primary: string,
    images?: Array<Images>,
    varProducts?: Array<string>,
    subCategoryId: string
}
