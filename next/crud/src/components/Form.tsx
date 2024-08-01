import { useState } from "react";
import Input from "./Input";
import Client from "@/core/client";
import Button from "./Button";

interface FormProps{
  client : Client | undefined
  changeClient : (client : Client)=>void
}
export default function Form(props: FormProps){

  const [name,setName] = useState<string | null>(props.client.getName())
  const [age,setAge] = useState<number | null>(props.client.getAge())
  const id = props.client?.getId()
  return(
    <div>
      {props.client.getId()? 
        <Input type="text" value={id} text="Id" readonly />
        :
        false
      }
      <Input changeValue={setName} type="text" value={name} text="Name" />
      <Input changeValue={setAge} type="number" value={age} text="Age" />
      <div className="flex items-center justify-center">
        <Button color="green" onClick={()=>props.changeClient(new Client(name??'',age??0,id))}
          >
          Save Data
        </Button>
      </div>
    </div>
  )
}