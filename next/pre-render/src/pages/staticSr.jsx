export async function getStaticProps(){
    return {
        revalidate: 7, //a cada 7s o conteudo será atualizado 
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