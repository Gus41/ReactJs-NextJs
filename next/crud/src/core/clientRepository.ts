import Client from "@/core/client";

export default interface clientRepository{
  save(client:Client) : Promise<Client | undefined >
  getAll() : Promise<Client[] | undefined>
  delete(id:string) : Promise<void>
  
}