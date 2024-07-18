import QuestionModel from "../../models/Question";
import styles from '../styles/questao.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Timer from "./Timer";

const letras = ['A','B','C','D','E','F','G','H','I','J','K','L',]

interface QuestaoProps{
  questao: QuestionModel
  responder: (indice: number) => void
  finish : ()=> void
}

export default function Questao(props : QuestaoProps){
  const questao : QuestionModel = props.questao

  function renderRespostas(){
    return questao.respostas.map((r,i)=>{
      return <Resposta
               resposta={r}
               letra={letras[i]}
               indice={i}
               key={i}
               responder={props.responder}
               />
    })
  }
  
  return(
    <div className={styles.questao}>
      <Timer duracao={12} finish={props.finish} />
      <Enunciado  text={questao.enunciado}/>
      {renderRespostas()}
    </div>
  )
}