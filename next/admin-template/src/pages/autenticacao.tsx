import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";

export default function Autenticacao(){
  const [method,setMethod] = useState('login')
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  
  return(
   <div>
     <h1>Faça Login</h1>
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
   </div>
  )
  
}