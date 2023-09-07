
import type { NextApiRequest, NextApiResponse } from 'next'
import {unlink, writeFile} from 'fs'
type Data = {
 
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    id,
    name,
    title,
    company,
    mobile,
    website,
    email,
    address,
    logo,
    linkedin,
    facebook,
    instagram,
    twitter,
    tiktok} = req.body


 
  if(req.method === "POST"){
    writeFile(`public/${id}wide.html`, `<table id="Table_01" cellspacing="0" cellpadding="0" style="padding: 10px; min-width: 300px; font-family: sans-serif; " border="0" >
		<tbody>
	
	<tr>
	${logo && `<td rowspan="1" style="padding-right: 5px;  " width="125"><img src="${logo}" width="125" alt="" style=" border-radius: 50%; border-bottom-left-radius: 50%; text-decoration: none; " alt=""></td>`}	
		
		<td style="padding-left: 5px; padding-right: 15px;" >
					${name && `<div style="font-family: sans-serif;
          font-size: 14pt; font-weight: bold;
          color: #767180 ; margin: 0; line-height: 20px; " >${name}
      </div>`}	
			${title && `<div style="font-size: 3px; color: transparent;">.</div>							 
      <div style="font-family: sans-serif; font-size: 11pt; color: gray; margin: 0;">${title}<span style="font-style: italic;">${company}</span></div>`}	
					

					${name || title ? `<div style="font-size: 3px; color: transparent;">.</div>
					<div style="font-size: 3px; color: transparent;">.</div>
					
					
					

					<div style="width: 100%; height: 2px; background-color: #ddd9e6;"></div>
` : ``}						
					
					<div style="font-size: 3px; color: transparent;">.</div>
					
					<div style="font-size: 3px; color: transparent;">.</div>

						
						 <div style="line-height: 130%;">
							<span> ${email && `<span style="color: #8c8794; font-weight: bold; font-style: italic; font-size: 11pt;">Email:</span>
							<a href="mailto:${email}" style="font-size: 11pt; color:gray; margin: 0; text-decoration: none; padding: 0; font-family: sans-serif;" >${email}</a></span>`}${email && mobile && ` <span style="color: #ddd9e6;"> | </span>`}
							${mobile && `<span><span style="color: #8c8794; font-weight: bold; font-style: italic; font-size: 11pt;">Phone:</span>
							<a href="tel:${mobile}" style="font-size: 11pt; color:gray; margin: 0; text-decoration: none; padding: 0; font-family: sans-serif;" >${mobile}</a></span>`}
						 </div>

						${website && ` <div style="line-height: 130%;">
            <span style="color: #8c8794; font-weight: bold; font-style: italic; font-size: 11pt;">Web:</span>
    <a href="https://${website}" target="_blank" style="font-size: 11pt; color:gray; margin: 0; text-decoration: none; padding: 0; font-family: sans-serif;" >${website}</a>
           </div>`}

						${address && `<div style="line-height: 130%;">
            <span style="color: #8c8794; font-weight: bold; font-style: italic; font-size: 11pt;">Location:</span>
    <span style="font-size: 11pt; color:gray; margin: 0; text-decoration: none; padding: 0; font-family: sans-serif;" >${address}</span>
           </div>`} 
						 

						

						 <div style="font-size: 3px; color: transparent;">.</div>
						 <div style="font-size: 3px; color: transparent;">.</div>
						
						 
						<div>
							
								${linkedin && `<a href="${linkedin}" target="_blank" style="text-decoration: none; vertical-align: middle;">
                <img src="https://raw.githubusercontent.com/ShahjalalK/mywebsigantureganaretor/master/img/linkedin.png" width="26" height="26" alt=""></a>`}	

								${instagram && `<a href="${instagram}" target="_blank" style="text-decoration: none; vertical-align: middle;">
                <img src="https://raw.githubusercontent.com/ShahjalalK/mywebsigantureganaretor/master/img/instagram.png" width="26" height="26" alt=""></a>`}	
										
                ${twitter && `<a href="${twitter}" target="_blank" style="text-decoration: none; vertical-align: middle;">
                <img src="https://raw.githubusercontent.com/ShahjalalK/mywebsigantureganaretor/master/img/twitter.png" width="26" height="26" alt=""></a>`}

										${facebook && `<a href="${facebook}" target="_blank" style="text-decoration: none; vertical-align: middle;">
                    <img src="https://raw.githubusercontent.com/ShahjalalK/mywebsigantureganaretor/master/img/facebook.png" width="26" height="26" alt=""></a>`}	

											${tiktok && `	<a href="${tiktok}" target="_blank" style="text-decoration: none; vertical-align: middle;">
                      <img src="https://raw.githubusercontent.com/ShahjalalK/mywebsigantureganaretor/master/img/tiktok.png" width="26" height="26" alt=""></a>`}
										
										
						</div>
						</td>

						

		
	</tr>
	
	

	<!-- <tr>
		<td colspan="3" width="100%"  style="padding: 5px 0 5px 5px; font-family: sans-serif; font-size: 10pt; color: #646E80; border-top: 1px solid #ddd; border-bottom: 1px solid #ddd9e6; border-top-left-radius: 50px; border-bottom-left-radius: 50px;"> 
			
			
			<span style="color: #000; text-decoration: none;  padding: 5px 7px; text-transform: uppercase; "><img src="https://raw.githubusercontent.com/ShahjalalK/BARBARA-Signature/master/img/tagline.png" alt="" width="18" style="vertical-align: middle;" > <span style="vertical-align: middle;">A Little Kindness Goes a Long Way</span></span>
			
				
								
		</td>
	</tr> -->
			
		
	</tbody></table>`, (err) => {
      if(err){
        console.log(err)
      }else{
        console.log("successfully created")
      }
    })
  }

  if(req.method === "DELETE"){
    unlink("wideSignature.html", (err) => {
        if(err){
          console.log(err)
        }else{
          console.log("success fully deleted")
        }
    })
  }

 
 res.status(200).json({ message : "Hello Shahjalal Khan" })
}
