export function isURL(url:string){
    const https = /https:\/\/www./
    if(https.exec(url)){
        return true
    } else {
        return false
    }
};

export function isMailto(email:string){
    const emailQuant = email.length
    const arroba = /@/
    const temArroba = arroba.exec(email);
    const ponto = /\./
    const temPonto = ponto.exec(email);
    
    if(temArroba){ // Tem arroba
        if(temPonto){ // Tem ponto
            // Tem letras após o arroba e ponto
            if(emailQuant > temArroba.index++ && emailQuant > temPonto.index++){ 
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
};

export function isCEP(email:string){
    return true
};

export function notEmpty(value:any){
    var newValue;
    if(value == undefined || value == null){
       return false
    } else {
        newValue = value.trim() // remove os espaços desnecessários
        if(value == ''){
            return false
        } else {
            return true
        }
    }
};

export function isNumber(value: string | number) {
    return true
}