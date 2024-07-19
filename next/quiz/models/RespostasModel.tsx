
export default class RespostaModel{
    public valor? : string
    public certa? : boolean 
    public revelada? : boolean 

    constructor(valor: string, certa: boolean, revelada = false){
        this.valor = valor
        this.certa = certa
        this.revelada = revelada
    }

    static certa(value: string){
        return new RespostaModel(value,true,false)
    }
    static errada(value: string){
        return new RespostaModel(value,false,false)
    }
}