import { Config, Home, Notification, Logo, LogOut} from "../icons"
import MenuItem from "./MenuItem"

export default function MenuLateral(){
  return(
    <aside className="flex flex-col">
      <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-800 flex flex-col items-center justify-center text-white">
        {Logo}
      </div>
      <ul className="flex-grow">
        <MenuItem text="Home" icon={Home} url="/" />
        <MenuItem text="Config" icon={Config} url="/configuracoes" />
        <MenuItem text="Notificacoes" icon={Notification} url="/notificacoes" />
      </ul>
      <ul>
        <MenuItem text="Sair" className={`text-red-600 hover:bg-red-400 hover:text-white cursor-pointer`} 
          icon={LogOut} 
          onClick={()=> console.log("Log-out")} />
      </ul>
    </aside>
  )
}