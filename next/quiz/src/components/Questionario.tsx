import QuestionModel from '../../models/Question'
import styles from '../styles/questionario.module.css'
import Questao from './Questao'
import Button from "@/components/Button";


interface QuestionarioProps{
  questao : QuestionModel
  isLast : boolean
  onResponse : (indice : number) => void
  goNext : () => void
}



export default function Questionario(props : QuestionarioProps){
    
  function responder(indice: number){
    if(!props.questao.respondida){
      props.onResponse(indice)
    }
   
  }
  
  return(
    <div className={styles.questionario}>
      {props.questao?
        <Questao finish={props.goNext} responder={responder} questao={props.questao} />
        :
        false
      }
      <Button 
        text={props.isLast ? 'Finalizar' : 'Próxima questão'}
        onClick={props.goNext} />
    </div>
  )
}