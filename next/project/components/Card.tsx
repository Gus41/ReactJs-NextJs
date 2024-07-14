import styles from '../src/styles/card.module.css'
export default function Card(props : any){
    return(
        <div className={styles.card}>
            {props.children}
        </div>
    )
}