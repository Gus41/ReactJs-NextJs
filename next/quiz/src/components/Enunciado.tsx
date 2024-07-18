import styles from '../styles/enunciado.module.css'

interface EnunciadoProps {
  text?: string;
}
export default function Enunciado(props : EnunciadoProps){
  return(
    <div className={styles.enunciado}>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}