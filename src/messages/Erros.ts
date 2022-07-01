export function throwError(val:boolean,message:string, user: object){
    if(val){
        throw new Error(message);
    }
}