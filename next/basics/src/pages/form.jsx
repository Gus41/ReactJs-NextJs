import { useState } from "react"

export default function Form(){
    const [age,setAge] = useState()
    const [name,setName] = useState('')
    
    const [users,SetUsers] = useState([])
    function renderUsers(){
        return users.map((u,i)=>{
            return <li key={i}>{u.name} - {u.age}</li>
        })
    }

    async function save(){
        await fetch('/api/form',{
            method: 'POST',
            body : JSON.stringify({
                name,
                age
            })
        })

        const all = await fetch('/api/form')
        const users = await all.json()
        SetUsers(users)
        setName('')
        setAge(0)
    }

    return (
        <div style={{
            backgroundColor:'white',
            color:'black',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>
            <h2>Integração com API</h2>
            <hr/>
            <input type="text" value={name} 
            onChange={e=>setName(e.target.value)}/>
            <input type="number"
            value={age}
            onChange={a=>setAge(+a.target.value)} />
            <button onClick={save}>Send</button>
            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}