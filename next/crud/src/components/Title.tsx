export default function Title(props : any){
  return(
    <div className="flex flex-col justify-center items-center">
      <h2 className="my-2">{props.children}</h2>
      <hr className="border-2 border-gray-400 w-full" />
    </div>
  )
}