// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import questoes from "../questions";
import { random } from "../../../../utils/random";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(random(questoes.map(e=>e.id)))
}