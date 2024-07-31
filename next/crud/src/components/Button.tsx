interface ButtonProps {
  children: any
  onClick: any
  color? : 'green' | 'red' | 'blue' | 'gray'
}
export default function Button(props : ButtonProps){
  return(
    <button className={`
      bg-gray-300 py-2 rounded shadow-md mb-4 px-6 hover:transform hover:scale-105 transition-all duration-300
    `}>
      {props.children}
    </button>
  )
}