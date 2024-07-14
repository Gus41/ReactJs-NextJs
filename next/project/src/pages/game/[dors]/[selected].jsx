import Dor from '../../../../components/Dor'
import { useEffect, useState } from 'react'
import { createDors, updateDors } from '../../../../utils/dors'
import styles from '../../../styles/game.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home(){
  const router = useRouter()



  const [dors, setDors] = useState([])


  useEffect(()=>{
    let dors = +router.query.dors
    let selected = +router.query.selected
    setDors(createDors(dors,selected))
  },[router?.query])

  function renderDors(){
    return dors.map(d=>{
      return <Dor dor={d} onChange={newDor => {
        setDors(updateDors(dors,newDor))
      }} key={d._number} />
    })
  }
  return(
    <div className={styles.game}>  
      <div className={styles.dors}>
        {renderDors()}
      </div>
      <div className={styles.buttons}>
        <Link href='/'>
            <p>Voltar</p>
        </Link>
      </div>
    </div>
  )
}