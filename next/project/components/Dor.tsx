import DorModel from '../model/DorModel'
import styles from '../src/styles/dor.module.css'
import Present from './Present'

interface DorPros{
    dor : DorModel
    onChange : (newDor : DorModel) => void   
}

export default function Dor(props : DorPros){
    const {dor} = props

    const selected = dor.active && !dor._opened? styles.active : ''
    function toggleSelected(){
        props.onChange(dor.toggleActive())
    }
    function open(e : any){
        e.stopPropagation()
        props.onChange(dor.open())
    }
    return (
        <div className={styles.area} onClick={toggleSelected}>
            <div className={`${styles.structure} ${selected}`} >
                {!dor._opened?
                    <div className={styles.dor}>
                        <div className={styles.number}>{dor._number}</div>
                        <div onClick={open} className={styles.mog}></div>
                    </div>
                    :
                    dor._sorted?
                    <Present />
                    :
                    false
                }
             </div>
            <div className={styles.grownd}></div>
        </div>
    )
}