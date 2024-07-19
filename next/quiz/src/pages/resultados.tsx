import { useRouter } from "next/router"
import styles from '../styles/resultados.module.css'


export default function Resultados(){
  const router = useRouter()
  const total = router.query.total? +router.query.total : 0
  const acertos = router.query.acertos? +router.query.acertos :0
  const percentual = Math.round((acertos/total) * 100)
  return(
    <div className={styles.resultados}>
      <h1>Resultados</h1>
      <hr/>
      <p>Total de quetões: {total}</p>
      <p>Acertos: {acertos}</p>
      <p>Percentual: {percentual}</p>
    </div>
  )
}