import { random } from "../utils/random"
import RespostaModel from "./RespostasModel"

export default class QuestionModel{
    public id? : number 
    public enunciado? : string 
    public respostas : RespostaModel[]
    public acertou? : boolean 
    //respondida : boolean
    constructor(id : number | undefined ,enunciado : string | undefined  ,respostas : any[] ,acertou : boolean | undefined ){
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
    embaralharResps(){
        let respo = random(this.respostas)
        return new QuestionModel(this.id,this.enunciado,respo,this.acertou)
        
    }
}