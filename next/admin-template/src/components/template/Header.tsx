import useAppData from "@/data/hook/useAppData"
import MenuLateral from "./MenuLateral"
import ThemeButton from "./ThemeButton"
import Title from "./Title"
import Link from "next/link"
import useAuth from "@/data/hook/useAuthData"

interface headerProps {
  title : string
  subtitle: string
}

const img = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 h-10 rounded cursor-pointer ml-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>


export default function Header(props : headerProps){
  const data = useAppData()
  const { user } = useAuth()
  
  
  return(
    <div className="flex">
     <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <ThemeButton theme={data.theme} toggle={data.toggle} />
        <Link href='/profile'>
          {user?.imageUrl?  <img src={user?.imageUrl} alt="Avatar do Usuario"
            className="h-10 w-10 rounded-full cursor-pointer"/> :
          img}
        </Link>
      </div>
    </div>
  )
}