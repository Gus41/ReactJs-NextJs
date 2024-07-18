import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/timer.module.css'

interface TimerProps{
  duracao: number
  finish : ()=>void
}

export default function Timer(props : TimerProps){
  return(
    <div className={styles.timer}>
      <CountdownCircleTimer 
        size={120}
        isPlaying
        duration={props.duracao}
        onComplete={props.finish}
        colors={["#008000", "#FFFF00", "#FF0000", "#FF0000"]}
        colorsTime={[10, 6, 4, 0]}
        >
        {({remainingTime}) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}