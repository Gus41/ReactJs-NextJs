import { BlockList } from "net"

export default class RespostaModel{
    public valor? : string
    public certa? : boolean 
    public revelada? : boolean 

    constructor(valor: string, certa: boolean, revelada = false){
        this.valor = valor
        this.certa = certa
        this.revelada = revelada
    }
}