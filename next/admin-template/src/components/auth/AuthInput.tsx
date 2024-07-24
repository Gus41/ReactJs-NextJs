interface AuthInputProps {
  label : string
  value : any
  onChangeValue: (value:any) => void
  typeInput : string
}

export default function AuthInput(props :AuthInputProps ){
  return(
    <div>
      <p>{props.label}</p>
      <input required type={props.typeInput} value={props.value} onChange={e=>props.onChangeValue(e.target.value)} />
    </div>
  )
}