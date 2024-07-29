import User from "@/model/user";
import firebase from "../../firebase/config";
import router from 'next/router'
import { createContext, useState } from "react";

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

interface AuthContextProps {
  user?: User | null;
  loginGoogle?: () => Promise<void>;
}
const AuthContext = createContext<AuthContextProps>({});
export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if(resp.user?.email){
      const u = await NormalUser(resp.user)
      setUser(u)
      router.push("/")
    }
    
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginGoogle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
