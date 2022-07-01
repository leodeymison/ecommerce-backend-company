import { throwError } from "../../../../messages/Erros";
import { errosLog } from "../../../../messages/ErrosMsg";
import { isURL, notEmpty, isNumber } from "../../../../modules/isValidation.module";
import { ProductType } from "../../../../schemas/types/Product.model";

export function ProductValidationAll(args:ProductType){
    args.informations.forEach(inf => {
        if(typeof(inf) !== 'boolean'){
            // Informations/Name = Min: 2 | Máx: 255 | Obg |
            throwError(!notEmpty(inf.name), errosLog('pt-br').EMPTY('name'), {})
            throwError(inf.name.length < 2, errosLog('pt-br').MUITOPEQUENO('name'), {});
            throwError(inf.name.length > 100, errosLog('pt-br').MUITOGRANDE('name'), {});

            // Informations/Slug = Min: 2 | Máx: 255 | Obg |
            throwError(!notEmpty(inf.slug), errosLog('pt-br').EMPTY('slug'), {})
            throwError(inf.slug.length < 2, errosLog('pt-br').MUITOPEQUENO('slug'), {});
            throwError(inf.slug.length > 100, errosLog('pt-br').MUITOGRANDE('slug'), {});

            // Informations/Description = Min: 50 | Obg
            throwError(!notEmpty(inf.description), errosLog('pt-br').EMPTY('description'), {})
            throwError(inf.description.length < 50, errosLog('pt-br').MUITOPEQUENO('description'), {});

            // Informations/Value = isNumber | Obg
            throwError(!notEmpty(inf.value), errosLog('pt-br').EMPTY('value'), {})
            throwError(!isNumber(inf.value), errosLog('pt-br').NAONUMBER('value'), {})

            // Video = isURL
            const informationsVideoIsUrl = typeof(inf.video) == 'string' ? isURL(inf.video) : true
            throwError(!informationsVideoIsUrl, errosLog('pt-br').NAOEURL('video'), {})
        }
    })
    
    // Code_product = Obg
    throwError(!notEmpty(args.code_product), errosLog('pt-br').EMPTY('code'), {})

    // Avalidation = isNumber | Obg
    throwError(!notEmpty(args.avaliation), errosLog('pt-br').EMPTY('avaliation'), {})
    throwError(!isNumber(args.avaliation), errosLog('pt-br').NAONUMBER('avaliation'), {})

    // image_primary = isURL | Obg
    throwError(!notEmpty(args.image_primary), errosLog('pt-br').EMPTY('image'), {})
    throwError(!isURL(args.image_primary), errosLog('pt-br').NAOEURL('image'), {})

    // Images/url = isURL
    if(args.images?.length){
        args.images.forEach(image => {
            throwError(!isURL(image.url), errosLog('pt-br').NAOEURL('image'), {})
        })
    }

    // subCategoryId = Obg
    throwError(!notEmpty(args.subCategoryId), errosLog('pt-br').EMPTY('sub_categort'), {})

}