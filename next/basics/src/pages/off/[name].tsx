import { useRouter } from "next/router"
import route from "../route"


export default function Name(){
    const router = useRouter()
    const code = router.query.code
    const name = router.query.name

    return(
        <div>
            <p>{code}/{name}/search</p>
        </div>
    )
}