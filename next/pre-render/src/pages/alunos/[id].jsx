
//apartir desses tres ids serçao geradas as págians estaticas
export function getStaticPaths(){
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        fallback: false
    }
}

export async function getStaticProps(context){
    console.log(context)
    const respo = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
    const data = await respo.json()

    return{
        props:{
            aluno : data
        }
    }
}
export default function Alun(props){
    console.log(props.aluno)
    return (
        <>
        <h2>Detalhes: </h2>
        <ul>
            <li>{props.aluno.name}</li>
        </ul>
        </>
    )
}