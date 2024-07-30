import useAuth from "@/data/hook/useAuthData"
import { useRouter } from "next/router"

export default function ForceAuth(props : any){

  const { user , loading } = useAuth()
  const router = useRouter()

  function renderContent(){
    console.log("Autorizado")
    console.log(props.children)
    return<>{props.children}</>
  
  }
  function renderLoading(){
    return(
      <div className="flex justify-center items-center h-screen">
        <p>Carregando...</p>
      </div>
    )
  }
  if (loading) {
      return renderLoading();
    }

    if (user) {
      return renderContent();
    } else{
      router.push("/autenticacao")
    }
}