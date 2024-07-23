import Link from "next/link"

interface MenuItemProps{
  url?:string
  text:string
  icon: any
  className? : string
  onClick? : (event:any)=> void
}
export default function MenuItem(props:MenuItemProps){
  function renderLink(){
    return(
    <a className={`flex flex-col justify-center items-center w-full h-20 ${props.className}`} >
        {props.icon}
        <p className="dark:text-gray-200 text-xs font-light text-gray-600">{props.text}</p>
      </a>
    )
    
  }
  return(
    <li onClick={props.onClick} className="hover:bg-gray-200 
      dark:hover:bg-gray-800">
      {props.url ? (
        <Link legacyBehavior href={props.url}>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  )
}