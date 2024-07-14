export async function getServerSideProps(){
    return {
        props:{
            num: Math.random() * 100
        }
    }
}
//server side rendering
export default function Ssr(props){
    return(
        <>
            <h2>Dinamic</h2>
            <p>{props.num}</p>
        </>
    )
}