import QuestionModel from "../../models/Question";
import styles from '../styles/questao.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

const letras = ['A','B','C','D','E','F','G','H','I','J','K','L',]

interface QuestaoProps{
  questao: QuestionModel
  onResonse: (indice: number) => void
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
               onResonse={props.onResonse}
               />
    })
  }
  
  return(
    <div className={styles.questao}>
      <Enunciado  text={questao.enunciado}/>
      {renderRespostas()}
    </div>
  )
}