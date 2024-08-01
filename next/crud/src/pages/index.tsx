import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/client";
import { useState } from "react";

const clients = [
  Client.getEmpty(),
  Client.getEmpty(),
  Client.getEmpty(),
]
function selectClient(client : Client){
  console.log(client)
}
function deleteCLient(client : Client){
  console.log(client)
}
function updateClient(client:Client){
  console.log(client)
}
export default function Home(){

  const [visible,setVisible] = useState<'tabela'|'formulario'>('tabela')
  
  return(
    <div className="flex items-center justify-center w-screen h-screen">
      <Layout title="Crud - Firebase">

        {visible=='formulario'?(
          <>
            <Form changeClient={updateClient} client={clients[0]} />
            <div className="flex justify-end w-full">
                <Button  onClick={()=>setVisible("tabela")}>
                  Voltar
                </Button>
            </div>
          </>
        ):(
          <>
            <div className="flex justify-end w-full">
                <Button onClick={()=>setVisible("formulario")}>
                  New Client
                </Button>
              </div>
             <Table deleteClient={deleteCLient} selectClient={selectClient} clients={clients} /> 
          </>
        )}
        
      </Layout>
    </div>
  )
}