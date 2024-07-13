export function getStaticProps(){
    return{
        props:{
            num: Math.random()
        }
    }
}

export default function static_api(props){

    return(
        <div>
                <p>Random: {props.num} </p>
        </div>
    )
}