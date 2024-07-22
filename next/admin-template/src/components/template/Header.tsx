import MenuLateral from "./MenuLateral"
import Title from "./Title"

interface headerProps {
  title : string
  subtitle: string
}

export default function Header(props : headerProps){
  return(
    <div>
     <Title title={props.title} subtitle={props.subtitle} />
    </div>
  )
}