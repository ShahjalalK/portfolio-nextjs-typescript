// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
const SibApiV3Sdk = require('sib-api-v3-typescript');


type Data = {
    message : string
    
}
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
)  => {
  const {email} = req.body
    if(!email) return

    let apiInstance = new SibApiV3Sdk.ContactsApi()
    
    let apiKey = apiInstance.authentications['apiKey'];
    
    apiKey.apiKey = process.env.SIB_API_KEY
    
    let createContact = new SibApiV3Sdk.CreateContact();
    
    createContact.email = email;
    createContact.listIds = [2];
    
    apiInstance.createContact(createContact).then(function(data : any) {
        res.status(200)
        res.status(200).json({message : "Thank you for submiting!"})
    }, function(error : any) { 
      res.status(400)
      res.status(400).json({message : "Thank you for submiting!"})
      console.error(error);
    });
}

export default handler