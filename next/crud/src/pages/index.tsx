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

function deleteCLient(client : Client){
  console.log(client)
}

export default function Home(){

  
  const [client,setCLient] = useState<Client>(clients[0])
  
  const [visible,setVisible] = useState<'tabela'|'formulario'>('tabela')



  function updateClient(client:Client){
    console.log(client)
    setVisible('tabela')
  }
  function selectClient(client : Client){
    setCLient(client)
    setVisible('formulario')
  }
  function newClient(){
    setCLient(Client.getEmpty())
    setVisible('formulario')
    
  }
  return(
    <div className="flex items-center justify-center w-screen h-screen">
      <Layout title="Crud - Firebase">

        {visible=='formulario'?(
          <>
            <Form changeClient={updateClient} client={client} />
            <div className="flex justify-end w-full">
                <Button  onClick={()=>setVisible("tabela")}>
                  Voltar
                </Button>
            </div>
          </>
        ):(
          <>
            <div className="flex justify-end w-full">
                <Button onClick={()=>newClient()}>
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