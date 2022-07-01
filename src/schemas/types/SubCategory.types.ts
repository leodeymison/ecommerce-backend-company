import { all } from "./index.types";

export interface SubCategoryTypes extends all {
    id: string,
    name: string,
    slug: string,
    categoryId: string,
    createdAt: string,
    updatedAt: string,
}
