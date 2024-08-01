export default class Client{
  private id: string | null
  private name: string | null
  private age: number | null

  constructor(name:string, age:number, id:string | null = null){
    this.id = id
    this.name = name
    this.age = age
  }
  getId(): string | null{
    return this.id
  }
  getName(): string | null{
    return this.name
  }
  getAge(): number | null{
    return this.age
  }

  static getEmpty(){
    return new Client('Name',0)
  }
  
}