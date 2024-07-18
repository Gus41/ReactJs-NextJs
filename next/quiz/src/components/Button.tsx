import Link from 'next/link'
import styles from '../styles/button.module.css'


interface ButtonProps{
  href? : string
  text: string
  onClick : (e:any)=> void
}
export default function Button(props : ButtonProps){

  function renderButton(){
    return(
      <button className={styles.button}
        onClick={props.onClick}
        >
        <p className={styles.text}>
          {props.text}
        </p>
      </button>
    )
  }
  return(
    props.href?
    <Link className={styles.link} href={props.href} >
      {renderButton()}
    </Link>
    :
    renderButton()
  )
}