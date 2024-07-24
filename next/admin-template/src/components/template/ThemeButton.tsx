import { Sun, Moon } from "../icons"

interface ThemeButtonProps{
  dark?: boolean
  toggle?: ()=>void
}
export default function ThemeButton(props:ThemeButtonProps){
  return !props.dark? (
    <div onClick={props.toggle} className="
      hidden sm:flex bg-gradient-to-r from-yellow-300 to-yellow-600
      lg:w-24 w-14 h-8 cursor-pointer p-1 rounded-full">
      <div className="
        flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full p-1">
        {Sun}
      </div>
      <div  className=" items-center justify-center hidden lg:flex ml-3 text-white">
        <p>Claro</p>
      </div>
    </div>
  ):(
    <div onClick={props.toggle} className="
      hidden sm:flex bg-gradient-to-r from-black to-purple-600
      lg:w-24 w-14 h-8 cursor-pointer p-1 rounded-full justify-end">
      
      <div  className=" items-center justify-center hidden lg:flex mr-3 text-white">
        <p>Escuro</p>
      </div>
      <div className="
        flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full p-1">
        {Moon}
      </div>

    </div>
  )
}