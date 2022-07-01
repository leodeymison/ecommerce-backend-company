import { throwError } from "../../../../messages/Erros";
import { errosLog } from "../../../../messages/ErrosMsg";
import { isCEP, isMailto, isURL } from "../../../../modules/isValidation.module";
import { ShopTypes } from "../../../../schemas/types/Shop.types";

export function ShopValidationAll(args:ShopTypes){
    // Name
    throwError(args.name.length < 3, errosLog('pt-br').MUITOPEQUENO('name'), {});
    throwError(args.name.length > 40, errosLog('pt-br').MUITOGRANDE('name'), {});
    // E-mail
    throwError(!isMailto(args.email), errosLog('pt-br').NAOEEMAIL('email'), {});
    // Description
    throwError(args.description.length < 20, errosLog('pt-br').MUITOPEQUENO('description'), {});
    throwError(args.description.length > 255, errosLog('pt-br').MUITOGRANDE('description'), {});
    // About
    const aboutValid = args.about ? args.about?.length < 100 : false;
    throwError(aboutValid, errosLog('pt-br').MUITOPEQUENO('about'), {});
    // Logo
    throwError(!isURL(args.logo), errosLog('pt-br').NAOEURL('logo'), {});
    // Favicon
    throwError(!isURL(args.favicon), errosLog('pt-br').NAOEURL('favicon'), {});
    // Social/Facebook
    const facebookValid = args.sociais?.facebook ? !isURL(args.sociais?.facebook) : false;
    throwError(facebookValid, errosLog('pt-br').NAOEURL('facebook'), {});
    // Social/Instagram
    const instagramValid = args.sociais?.instagram ? !isURL(args.sociais?.instagram) : false;
    throwError(instagramValid, errosLog('pt-br').NAOEURL('instagram'), {});
    // Social/YouTube
    const youtubeValid = args.sociais?.youtube ? !isURL(args.sociais?.youtube) : false;
    throwError(youtubeValid, errosLog('pt-br').NAOEURL('youtube'), {});
    // Politic
    const politicValid = args.politic ? !isURL(args.politic) : false;
    throwError(politicValid, errosLog('pt-br').NAOEURL('politic'), {});
    // Address/cep
    const addressCepValid = args.address?.cep ? !isCEP(args.address?.cep) : false;
    throwError(addressCepValid, errosLog('pt-br').NAOECEP('cep'), {});
    // Address/link
    const addressLinkValid = args.address?.link ? !isURL(args.address?.link) : false;
    throwError(addressLinkValid, errosLog('pt-br').NAOEURL('link_de_endereco'), {});
}