interface InputProps{
  text:string
  type:'text' | 'number'
  value: any
  readonly?: boolean
  changeValue?: (value: any) => void
  
}
export default function Input(props: InputProps){
  return(
    <div className="flex flex-col my-4 ">
      <label>
        {props.text}
      </label>
      <input type={props.type} 
        value={props.value}
        readOnly={props.readonly}
        onChange={e=> {
          if(props.changeValue){
            props.changeValue(e.target.value)
          }
        }}
        className={`
          border-2 border-gray-300 focus:outline-none rounded-md px-4 py-2 ${props.changeValue ? 'focus:border-gray-500' : ''}
        `}
        />
    </div>
  )
}