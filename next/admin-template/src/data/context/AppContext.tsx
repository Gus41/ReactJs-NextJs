import { createContext, useState } from "react";

interface AppContextProps {
  dark?: boolean;
  toggle? : ()=> void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props : any){
  const [dark, setDark] = useState(true)
  
  function toggle(){
    setDark(!dark)
  }
  
  return(
    <AppContext.Provider value={{
      dark,
      toggle
    }}>
      
      {props.children}
      
    </AppContext.Provider>
  )
}
export default AppContext