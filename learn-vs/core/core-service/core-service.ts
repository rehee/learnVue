export class CoreService {
    Delay(ms:number){
        return new Promise(
            resolve =>setTimeout(resolve,ms)
        )
    }
    constructor() { }
}