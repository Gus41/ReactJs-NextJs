import { random } from "../utils/random"
import RespostaModel from "./RespostasModel"

export default class QuestionModel{
    public id : number 
    public enunciado? : string 
    public respostas : RespostaModel[]
    public acertou? : boolean 
    public respondida : boolean | undefined
    constructor(id : number,enunciado : string | undefined  ,respostas : any[] ,acertou : boolean | undefined , respondida = false ){
        this.id = id
        this.enunciado = enunciado
        this.respostas = respostas
        this.acertou = acertou
        this.respondida = respondida
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
    responder(indice : number){
        const acertou = this.respostas[indice]?.certa
        const respostas = this.respostas.map((r,i) => {
            if( i == indice || r.certa ){
                r.revelada = true
            }
            return r
        })
        return new QuestionModel(this.id,this.enunciado,respostas,acertou,true)
    }
}