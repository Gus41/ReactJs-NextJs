import Title from "./Title"

interface LayoutProps{
  title : string,
  children: any
}

export default function Layout(props : LayoutProps){
  return(
    <div className="rounded flex flex-col w-2/3 bg-gray-200 text-black">
      <Title>{props.title}</Title>
      <div className="p-4">
        {props.children}
      </div>
    </div>
  )
}