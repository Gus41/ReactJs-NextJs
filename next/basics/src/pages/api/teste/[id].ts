import { NextApiRequest, NextApiResponse } from "next"

export default function Id(
    req: NextApiRequest,
    res: NextApiResponse
    ){
    if( req.method == 'GET' ){
        const id = req.query.id

        res.status(200).json({
            value : 'Valor voltado da api',
            id,
            possibilities : [
                'Uma','duas','tres'
            ]
        })
    }else{
        res.status(405).send('Sem permisão')
    }
}