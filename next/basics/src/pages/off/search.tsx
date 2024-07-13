import { useRouter } from "next/router"
import route from "../route"


export default function Search(){
    const router = useRouter()
    const code = router.query.code

    return(
        <div>
            <p>{code}/search</p>
        </div>
    )
}