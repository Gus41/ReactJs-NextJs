import { useRouter } from "next/router"
import Link from "next/link"

export default function params(){
    const router = useRouter()
    const name = router.query.name
    //pegando name direta pela url ( ?name = exemplo )
    console.log(name)
    return(
        <div>
            <p>{name} routes</p>
            <Link href='/routes'>Voltar</Link>
        </div>
    )
}