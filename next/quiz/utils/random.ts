export function random(elements : any[]) : any[]{
  return elements.map(e=> ({e,sort:Math.random()}))
    .sort((ob1,obj2)=>(ob1.sort-obj2.sort))
      .map(obj=>obj.e)
}