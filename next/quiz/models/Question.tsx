import { BlobOptions } from "buffer"
import RespostaModel from "./RespostasModel"

export default class QuestionModel{
    public id : number | undefined
    public enunciado : string | undefined
    public respostas : RespostaModel[]
    public acertou : boolean | undefined
    //respondida : boolean
    constructor(id : number,enunciado : string ,respostas : any[],acertou : boolean){
        this.id = id
        this.enunciado = enunciado
        this.respostas = respostas
        this.acertou = acertou
    }
    foiRespondida(){
        for( let resposta of this.respostas ){
            if(resposta.revelada){
                return true
            }
        }
        return false
    }
}