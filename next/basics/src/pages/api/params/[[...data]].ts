import { NextApiRequest, NextApiResponse } from "next"


export default function Data(
    req: NextApiRequest,
    res: NextApiResponse
    ){
        res.status(200).json({
            params: req.query
        })
}