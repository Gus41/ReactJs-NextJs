import Link from "next/link";
import Card from "../../components/Card";
import styles from '../styles/home.module.css'
import { useState } from "react";
export default function Home(){
    const [amount,setAmount] = useState(5)
    const [sorted,setSorted] = useState(2)

    const target : string = `game/${amount}/${sorted}`
 return(
  <div className={styles.home}>
    <Card>
        <div className={styles.inputs}>
            <div>
                <label htmlFor="num">Quantas portas terão?</label>
                <input type="number" id="num" value={amount} onChange={(e)=> setAmount(+e.target.value)}/>
            </div>
            <div>
                <label htmlFor="num">Qual porta será sortida</label>
                <input type="number" id="sorted" value={sorted}  onChange={(e)=>setSorted(+e.target.value)}/>
            </div>
        </div>
        <div>
            <Link href={target} >
                <p>Iniciar</p>
            </Link>
        </div>
    </Card>
  </div>
 )
}