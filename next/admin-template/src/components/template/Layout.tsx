import Content from "./Content"
import Header from "./Header"
import MenuLateral from "./MenuLateral"

interface LayoutProps {
  title : string
  subtitle: string
  children? : any
}

export default function Layout(props : LayoutProps){
  return(
    <div className="flex dark h-screen w-screen">
      <MenuLateral />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800 dark:text-white ">
        <Header title={props.title} subtitle={props.subtitle} />
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  )
}