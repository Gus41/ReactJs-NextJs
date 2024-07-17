import QuestionModel from "../../models/Question";
import styles from '../styles/questao.module.css'


interface QuestaoProps{
  questao: QuestionModel
}
export default function Questao(props : QuestaoProps){
  const questao : QuestionModel = props.questao

  return(
    <div className={styles.questao}>
      <p>Questao</p>
    </div>
  )
}