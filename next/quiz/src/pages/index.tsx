import Questao from "@/components/Questao";
import QuestionModel from "../../models/Question";
import RespostaModel from "../../models/RespostasModel";

export default function Home(){
  const questao = new QuestionModel(1,'Enunciado0',[
      new RespostaModel('teste',true,false)
    ],false)
  
  return(
    <>
      <Questao questao={questao} />
    </>
  )
}