import Client from "@/core/client";
import clientRepository from "@/core/clientRepository";
import firebase from '@/firebase/config'

export default class ClientCollection implements clientRepository{ 

  private converter = {
    toFirestore(client:Client){
      return {
        name: client.getName(),
        age : client.getAge(),

      }
    },
    fromFirestore(
      snapshot : firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ){
      const data = snapshot.data(options)
      return new Client(
        data.name,
        data.age,
        snapshot.id
      )
    }
  }
  async save(client: Client): Promise<Client | undefined>{
    const id = client.getId()
    if(id){
      await this.collection().doc(id).set(client)
      return client
    }else{
      const docRef = await this.collection().add(client)
      const cl = await docRef.get()
      return cl.data()
    }
  }

  async delete(id: string): Promise<void> {
    this.collection().doc(id).delete()
  }
  async getAll(): Promise<Client[]> {
    const qs = await this.collection().get()
    return qs.docs.map(doc => doc.data())
  }

  private collection(){
    return firebase.firestore().collection("clients").withConverter(this.converter)
  }
}