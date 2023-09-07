import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { FaFacebook } from 'react-icons/fa6'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { EmailSignatureState, emailSignatureType } from '@/atom/createEmailSignatureState/emailSignatureState'

type Props = {}



const SignatureSocial = (props: Props) => {
    const [signatureValue, setSignatureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)
    const [signatureStorageValue, setSignatureStorageValue] = useState<emailSignatureType>()
    useEffect(() => {
       const signatureStorage =  localStorage.getItem("userSignature")  
       setSignatureStorageValue(signatureStorage ?  JSON.parse(signatureStorage) : "")   
   
     }, [signatureStorageValue])

    
    
    const SocialSignatureInput = [
        {
            icon : "linkedin.png",
            id : "linkedin",
            title : "Linkedin URL",
            value : signatureStorageValue?.linkedin,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    linkedin : e.target.value
                }))
      
            }    
        },    
        {
            icon : "instagram.png",
            id : "instagram",
            title : "Instagram Username",
            value : signatureStorageValue?.instagram,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    instagram : e.target.value
                }))
      
            }    
        },    
        {
            icon : "twitter.png",
            id : "twitter",
            title : "Twitter Handle",
            value : signatureStorageValue?.twitter,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    twitter : e.target.value
                }))
      
            }    
        },
        {
            icon : "facebook.png",
            id : "facebook",
            title : "Facebook URL",
            value : signatureStorageValue?.facebook,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    facebook : e.target.value
                }))
      
            }    
        },
        {
            icon : "tiktok.png",
            id : "tiktok",
            title : "TikTok Username",
            value : signatureStorageValue?.tiktok,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    tiktok : e.target.value
                }))
      
            }    
    
        }
    ]
  return (
    <motion.div initial={{x : 800, opacity : 0}} animate={{x : 0, opacity : 1}} transition={{duration : 0.3}} className="p-5 w-full h-screen flex flex-col space-y-3">
    <h1 className=" uppercase text-sm text-info/90 font-[700]">Social Profiles</h1>
    
    <div className="flex flex-col space-y-3">
        {SocialSignatureInput.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
            <Image src={`/${item.icon}`} width={50} height={50} alt="f" className=" w-7"  />
            <div className="signatureDetails-inputBox">           
                <input className="createSignatureInput" value={item.value} onChange={item.changeHandler} id={item.id} type="text" required />
                <label htmlFor={item.id} className="font-bold">{item.title}</label>
                <div className="borderDiv"></div>                
                </div>
        </div>
        ))}
        
        
    </div>
    

</motion.div>
  )
}

export default SignatureSocial