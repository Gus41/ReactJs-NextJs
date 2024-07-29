import useAuth from "@/data/hook/useAuthData"
import { useRouter } from "next/router"

export default function ForceAuth(props : any){

  const { user , loading } = useAuth()
  const router = useRouter()

  function renderContent(){
    return(
      <>
        {props.children}
      </>
    )
  }
  function renderLoading(){
    return(
      <div className="flex justify-center items-center h-screen">
        <p>Carregando...</p>
      </div>
    )
  }
  if(!loading && user?.email){
    renderContent()
  }else if(loading){
    return renderLoading()
  }else{
    router.push("/autenticacao")
  }
}