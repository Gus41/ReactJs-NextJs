// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import QuestionModel from "../../../../models/Question";
import questoes from "../questions";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const id = +req.query.id

  const question = questoes.filter(q=> id == q.id)

  if(question.length == 1){
    res.status(200).json(question[0])
  }else{
    res.status(404).json({message:"Questão não encontrada"})
  }
}
