// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer  from 'nodemailer'

type Data = {
  name: string
}

const email = process.env.NEXT_PUBLIC_NODE_MAILER_EMAIL
const pass = process.env.NEXT_PUBLIC_NODE_MAILER_PASSWORD

export const transporter = nodemailer.createTransport({
    service : "gmail",
  auth: {
    user: email,
    pass: pass,
  },
})

export const mailOption = { 
    from : email,  
    to: email,
    // subject: 'Your Website Message!',
    // html: "",
  };