import { throwError } from "../../../../messages/Erros";
import { errosLog } from "../../../../messages/ErrosMsg";
import { notEmpty } from "../../../../modules/isValidation.module";
import { CategoryType } from "../../../../schemas/types/Category.types";

export function CategoryValidationAll(args:CategoryType){
    // Name
    throwError(!notEmpty(args.name), errosLog('pt-br').MUITOPEQUENO('name'), {});
    throwError(args.name.length < 3, errosLog('pt-br').MUITOPEQUENO('name'), {});
    throwError(args.name.length > 255, errosLog('pt-br').MUITOGRANDE('name'), {});

    // Slug
    throwError(!notEmpty(args.slug), errosLog('pt-br').MUITOPEQUENO('name'), {});
    throwError(args.slug.length < 3, errosLog('pt-br').MUITOPEQUENO('slug'), {});
    throwError(args.slug.length > 255, errosLog('pt-br').MUITOGRANDE('slug'), {});

    // Slug
    throwError(!notEmpty(args.shopId), errosLog('pt-br').MUITOPEQUENO('shopId'), {});
}