import { useRouter } from "next/router"

export default function route(){
    const router = useRouter()
    
    return(
        <>
            <p>Route sem pasta</p>
            <p>{router.query.name}</p>
            
        </>
    )
}