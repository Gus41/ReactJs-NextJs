import styles from '../src/styles/present.module.css'


export default function Present(){
    return(
        <div className={styles.box}>
            <div className={styles.tampa}></div>
            <div className={styles.body}></div>
            <div className={styles.laco_one}></div>
            <div className={styles.laco_two}></div>
        </div>
    )
}