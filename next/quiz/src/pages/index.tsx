import Questao from "@/components/Questao";
import QuestionModel from "../../models/Question";
import RespostaModel from "../../models/RespostasModel";
import { useState } from "react";

const questaoMock = new QuestionModel(1,'Enunciado 0',[
  new RespostaModel('Resposta n 1',false,false),
  new RespostaModel('Resposta n 2',true,false),
  new RespostaModel('Resposta n 3',false,false),
],false)
export default function Home(){
  const [questao,setQuestao] = useState(questaoMock)


  function onResonse(indice: number){
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }
  
  return(
    <div style={{
      display:"flex",
      height:'100vh',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Questao onResonse={onResonse} questao={questao} />
    </div>
  )
}