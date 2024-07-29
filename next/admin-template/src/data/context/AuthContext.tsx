import User from "@/model/user";
import firebase from "../../firebase/config";
import router from 'next/router'
import Cookies from 'js-cookie'

import { createContext, useEffect, useState } from "react";

async function NormalUser(userFirebase: firebase.User): Promise<User> {
  const token = await userFirebase.getIdToken();
  return {
    uid: userFirebase.uid,
    name: userFirebase.displayName,
    email: userFirebase.email,
    token,
    provider: userFirebase.providerData[0]?.providerId,
    imageUrl: userFirebase.photoURL,
  };
}
function manageCokie(loged:boolean){
  if(loged){
    Cookies.set("auth",loged,{
      expires: 7
    })
  }else{
    Cookies.remove("auth")
  }
}

interface AuthContextProps {
  user?: User | null;
  loginGoogle?: () => Promise<void>;
  logout? : ()=> void,
  loading? : boolean
}


const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true)

  async function configureSection(userFirebase: firebase.User | null){
    if(userFirebase?.email){
      const user = await NormalUser(userFirebase)
      setUser(user)
      setLoading(false)
      manageCokie(true)
      return userFirebase.email
      
    } else{
      setUser(null)
      setLoading(false)
      manageCokie(false)
      return false
    }
  }

  async function loginGoogle() {
   try{
     setLoading(true)
      const resp = await firebase.auth().signInWithPopup(
         new firebase.auth.GoogleAuthProvider()
       )
       if(resp.user?.email){
         const u = await NormalUser(resp.user)
         setUser(u)
         configureSection(resp.user)
  
         router.push("/")
       }
     }finally{
       setLoading(false)
     }
    
  }

  async function logout(){
    try{
      setLoading(true)
      await firebase.auth().signOut()
      await configureSection(null)
    }finally{
      setLoading(false)
    }
   
  }

  useEffect(()=>{
    if(Cookies.get("auth")){
      const cancel = firebase.auth().onIdTokenChanged(configureSection)
      return ()=> cancel()
    }
    setLoading(false)
  },[])

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
        logout,
        loading
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
