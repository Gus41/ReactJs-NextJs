import RespostaModel from '../../models/RespostasModel'
import styles from '../styles/resposta.module.css'

interface RespostaPros{
  resposta: RespostaModel
  indice: number
  letra: string
  onResonse: (indice: number) => void
}

export default function Resposta(props : RespostaPros){
  const resposta = props.resposta.valor
  
  return(
    <div className={styles.resposta}  onClick={()=>props.onResonse(props.indice)}>
      <div className={styles.conteudo}>
        {!props.resposta.revelada?
        <div className={styles.front}>
          <div className={styles.letra}>
            {props.letra}
          </div>
          <div className={styles.valor}>
            {resposta}
          </div>
        </div>
        :
          <div className={styles.back}>
            {props.resposta.certa?
              <div className={styles.certa}>
                 Resposta Certa
              </div>
              :
              <div className={styles.errada}>
                Resposta Errada
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}