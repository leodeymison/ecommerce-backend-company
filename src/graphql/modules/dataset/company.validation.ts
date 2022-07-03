import { throwError } from "../../../messages/Erros";
import { errosLog } from "../../../messages/ErrosMsg";
import { isMailto, notEmpty } from "../../../modules/isValidation.module";
import { CompanyType } from "../../../schemas/Company.types";

export function CompanyValidationAll(args:CompanyType){
    // name - obg | max = 100 | min = 2
    throwError(!notEmpty(args.name), errosLog('pt-br').EMPTY('name'), {})
    throwError(args.name.length > 100, errosLog('pt-br').MUITOGRANDE('name'), {})
    throwError(args.name.length < 2, errosLog('pt-br').MUITOPEQUENO('name'), {})

    // slug - obg | max = 100 | min = 2
    throwError(!notEmpty(args.slug), errosLog('pt-br').EMPTY('slug'), {})
    throwError(args.slug.length > 100, errosLog('pt-br').MUITOGRANDE('slug'), {})
    throwError(args.slug.length < 2, errosLog('pt-br').MUITOPEQUENO('slug'), {})

    // email - obg | isEmail
    throwError(!notEmpty(args.email), errosLog('pt-br').EMPTY('email'), {})
    throwError(!isMailto(args.email), errosLog('pt-br').NAOEEMAIL('email'), {})

    // code - obg
    throwError(!notEmpty(args.code), errosLog('pt-br').EMPTY('code'), {})

    // status - obg
    throwError(!notEmpty(args.status), errosLog('pt-br').EMPTY('status'), {})

    // login - obg
    throwError(!notEmpty(args.login), errosLog('pt-br').EMPTY('login'), {})

    // password - obg
    throwError(!notEmpty(args.password), errosLog('pt-br').EMPTY('password'), {})
}