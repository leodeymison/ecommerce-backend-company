import { ShopValidationAll } from '../modules/Shop/dataset/Shop.validation';
import { ProductValidationAll } from '../modules/Product/dataset/Product.validation'
import { SubCategoryValidationAll } from '../modules/SubCategory/dataset/SubCategory.validation'
import { CategoryValidationAll } from '../modules/Category/dataset/Category.validation'

export type list = 'Shop' | 'Product' | 'SubCategory' | 'Category'
const validation = {
    Shop: ShopValidationAll,
    Product: ProductValidationAll,
    SubCategory: SubCategoryValidationAll,
    Category: CategoryValidationAll,
}

export default validation