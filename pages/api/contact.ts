
import type { NextApiRequest, NextApiResponse } from 'next'
import { transporter } from './nodemailer'
import {mailOption} from './nodemailer'

type Data = {
  name: string
 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method === "POST"){
        const data = req.body
        if(!data.name || !data.email || !data.subject || !data.message) return

        try {
            await transporter.sendMail({
                ...mailOption,
                subject : data.subject,                
                html : `<h2>${data.name}-</h2><p>${data.message}</p> <p>Email:-<a href="mailto:${data.email}">${data.email}</a></p>
                `
            })
           
        } catch (error : any) {
           console.log(error.message) 
           
        }
    }
  
}

