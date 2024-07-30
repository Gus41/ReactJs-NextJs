import { createContext, useEffect, useState } from "react";

interface AppContextProps {
  theme?: string;
  toggle? : ()=> void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props : any){
  const [theme, setTheme] = useState('dark')
  
  function toggle(){
      if(theme == 'dark'){
        setTheme('light')
        localStorage.setItem('theme','light')
        return
      }
    localStorage.setItem('theme','dark')
    setTheme('dark')
  }

  useEffect(()=>{
    const theme = localStorage.getItem("theme")
    if(theme){
       setTheme(theme)
    }else{
      setTheme("light")
    }
    
  },[])

  return(
    <AppContext.Provider value={{
      theme,
      toggle
    }}>
      {props.children}
      
    </AppContext.Provider>
  )
}
export default AppContext