import useAppData from "@/data/hook/useAppData"
import MenuLateral from "./MenuLateral"
import ThemeButton from "./ThemeButton"
import Title from "./Title"

interface headerProps {
  title : string
  subtitle: string
}

export default function Header(props : headerProps){
  const data = useAppData()
  
  return(
    <div className="flex">
     <Title title={props.title} subtitle={props.subtitle} />
      <div className="flex flex-grow justify-end">
        <ThemeButton dark={data.dark} toggle={data.toggle} />
      </div>
    </div>
  )
}