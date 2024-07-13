import { useEffect, useState } from "react"

export default function Teste(){
    

    const [res,setRes] = useState()

    useEffect(()=>{
        fetch('http://localhost:3000/api/teste/123')
        .then(data=> data.json())
        .then(setRes)
    },[])

    function showPossibilities(){
        if(!res){
            return false
        }
        return res.possibilities.map((e,i)=>{
            return <li key={i}>{e}</li>
        })
    }

    return(
        <div>
            <p>Teste?</p>
            <p>{res?.id}</p>
            {res?.value}
            <ul>
                {showPossibilities()}
            </ul>
        </div>
    )
}