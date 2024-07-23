import MenuLateral from "./MenuLateral"

interface ContentProps {
  children? :any
}

export default function Content(props : ContentProps){
  return(
    <div className="flex flex-col mt-7
      dark:font-text-gray-200">
      {props.children}
    </div>
  )
}