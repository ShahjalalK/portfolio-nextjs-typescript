
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
 
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 
 
 
 res.status(200).json({ message : "Hello Shahjalal Khan" })
}
