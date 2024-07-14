export async function getStaticProps(){
    return {
        props:{
            num: Math.random() * 100
        }
    }
}
//Metodo acim irá definir oq irá ser a props do componente
//Em build será retornado um conteudo Static
export default function StaticTwo(props){
    return(
        <>
            <h2>Static</h2>
            <p>{props.num}</p>
        </>
    )
}