import Link from "next/link"
import { useRouter } from "next/router"
export default function Route(){
    const router = useRouter()

    function navigateWithParams(){
        router.push({
            pathname:'route',
            query : {
                code: 123,
                name:'Ana'
            }
        })
    }
    return(
        <div>
            <p>Routes</p>
            <ul>
                <li><Link href='/routes/params?name=olá'>Params</Link></li>
                <li><Link href='/routes/params?name=teste'>Params</Link></li>
            </ul>

            <div style={{backgroundColor:'white',color:'black'}}>
                <p>USando o UseRouter</p>
                <button onClick={()=>router.push('/123/buscar')}>Search</button>
                <button onClick={navigateWithParams}>Search</button>
            </div>
        </div>
    )
}