//esse metodo é executado no lado do servidor
export async function getServerSideProps(){
    console.log("Esse log não ira aparecer no Browser")
    const data = await fetch('http://localhost:3000/api/products')
    const dataJson = await data.json()
    
    return {
     props:{
         data : dataJson
     }
    }
 }
 
 // SERVER SIDE RENRERING
 export default function StaticTwo(props){
     function appendData(){
         return props.data.map(e=>{
             return <li key={e.id}>{e.id} - {e.name}</li>
         })
     }
     return(
         <>
             <h2>Products</h2>
             <ul>
                 {appendData()}
             </ul>
         </>
     )
 }
 
 // para buildar isso, é preciso rodar npm run dev e DEPOIS rodar em outro shell o npm run build