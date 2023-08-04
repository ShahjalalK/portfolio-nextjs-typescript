import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "./nodemailer";
import { mailOption } from "./nodemailer";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject) return;
    if(!data.message && !data.media) return

    try {
      let date = new Date();
	    let current_date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear() ;
      await transporter.sendMail({
        ...mailOption,
        subject: data.subject,
        html: `
                <table style="width: 100%;">
    <tr>
        <td align="center">
            <table class="sub-container" border="0" cellpadding="0" cellspacing="0" width="550" style="background-color: #f1f1f1; padding: 0 15px;">
                <tr>
                    <td height="20"></td>
                </tr>
                
              
               
                <tr>
                    <td align="left" style="font-weight:500;">
                    <p align="left"><span style="background-color: aquamarine; padding: 2px 5px; color: #222;">${current_date}</span></p>
                    ${data.message  && `<p style="line-height: 140%;">
                    <span style="font-weight: 600;">${data.name}-</span>
                    ${data.message}
                   </p>`}
                       
                       <div style="height: 5px;"></div>
                       ${data.media && ` <img src="${data.media}" alt="" width="250">`}
                        <p style="font-size:26px;font-weight:600; line-height: 0;"> Contact Email!</p>
                            <a href="mailto:${data.email}" style="line-height: 0;">${data.email}</a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://shahjalalk.vercel.app/message/${data.id}" target="_blank" style="background-color: #ddd; padding: 5px 5px; text-decoration: none; border-radius: 5px;">Admin-Replay</a>
                    </td>
                </tr>
                
              
                <tr>
                    <td height="20"></td>
                </tr>
            </table>
        </td>
    </tr>
</table>
                `,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
