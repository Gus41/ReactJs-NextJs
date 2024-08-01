import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/client";
import clientRepository from "@/core/clientRepository";
import ClientCollection from "@/firebase/db/ClientCollection";
import { useEffect, useState } from "react";

export default function Home(){

  const Repository : clientRepository = new ClientCollection()
  
  const [client,setCLient] = useState<Client>()
  const [clients,setClients] = useState<Client[] | undefined>([])
  const [visible,setVisible] = useState<'tabela'|'formulario'>('tabela')

  useEffect(()=>{
    setAll()
  },[])


  async function updateClient(client:Client){
    await Repository.save(client)
    setVisible('tabela')
    setAll()
  }
  function selectClient(client : Client){
    setCLient(client)
    setVisible('formulario')
  }
  function newClient(){
    setCLient(Client.getEmpty())
    setVisible('formulario')
    setAll()
    
  }
  function setAll(){
    Repository.getAll().then(clients => {
      setClients(clients)

    })
  }
  function deleteCLient(client : Client){
    Repository.delete(client.getId()!)
    setAll()
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