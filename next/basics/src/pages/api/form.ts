import { NextApiRequest, NextApiResponse } from "next"
import { Ewert } from "next/font/google"

interface user{
    name : string,
    age : number
}

const users : Array<user> = []

export default function Form(
    req: NextApiRequest,
    res: NextApiResponse
    ){
        if(req.method == 'POST'){
            post(req,res)
        }else if(req.method == 'GET'){
            res.status(200).json(users)
        }else{
            res.status(405).send('Metodo não suportado')
        }
}
function post(
    req: NextApiRequest,
    res: NextApiResponse
){
    const data : user = JSON.parse(req.body)
    users.push(data)
    res.status(200).send('Succes')
}