import AuthInput from "@/components/auth/AuthInput";
import { Google, Error } from "@/components/icons";
import { useState } from "react"

export default function Autenticacao(){
  const [method,setMethod] = useState('login')
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [error,setError] = useState<null | string >(null)

  function showError(msg : string,time = 5){
    setError(msg)
    setTimeout(()=> setError(null),time * 1000)
  }

  function submit(){
    if(method == 'login'){
      console.log('login')
      showError("Erro no Login")
      return
    }
    console.log("Registro .")
  }
  return(
   <div className="flex flex-row h-screen items-center justify-center">
     <div className=" hidden bg-purple-700 md:block flex-1 h-screen w-full object-cover">

     </div>
     <div className="m-10 w-full md:w-1/2">
        <h1 className="
          text-xl font-bold mb-5
          ">Faça {method}</h1>
       {error? (
     <div className="border red-700 rounded-lg p-3 bg-red-400 text-white flex justify-center items-center">
        {Error}
        <p className="ml-4">Erro na autenticação</p>
      </div>
       ) : false}
        <AuthInput
          label="Email"
          value={email}
          onChangeValue={setEmail}
          typeInput="email"
         />
        <AuthInput
         label="Password"
         value={password}
         onChangeValue={setPassword}
          typeInput="password"
        />
        <button className="shadow w-full bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg mt-5"
          onClick={submit}>
          {method=='login'? 'Entrar': 'Cadastrar'}
        </button>
        <hr className="my-6 border-gr-300 w-full" />
        <button className="shadow w-full flex bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
           onClick={submit}>
           <p className="flex-1">Entrar com o Google</p>
          <div className="w-7 flex items-center justify-center rounded bg-white h-7">
            {Google}
          </div>
         </button>
       <div className="w-full flex justify-center items-center">
         {method != 'login' ? (
            <p className="mt-8">
             <a onClick={()=>setMethod("login")}
               className="cursor-pointer text-blue-500 hover:text-blue-700 text-center mx-auto"
               >Já tenho uma conta</a>
            </p>
              ): (
             <p className='mt-8'>
                 <a onClick={()=>setMethod("registro")}
                    className="cursor-pointer text-blue-500 hover:text-blue-700 text-center mx-auto"
                    >Criar uma conta</a>
              </p>
              )}
       </div>
      </div>
   </div>
  )

}