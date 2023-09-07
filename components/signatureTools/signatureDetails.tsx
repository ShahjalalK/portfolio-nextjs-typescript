import { EmailSignatureToolState, emailSignatureToolType } from '@/atom/emailSignatureToolSTate'
import React, { useEffect, useState } from 'react'
import {TbCameraPlus} from 'react-icons/tb'
import { useRecoilState, useSetRecoilState } from 'recoil'
import {motion} from 'framer-motion'
import { EmailSignatureState, emailSignatureType, signatureActivate, signatureAtivateType } from '@/atom/createEmailSignatureState/emailSignatureState'
import Image from 'next/image'
import {LuDelete} from 'react-icons/lu'
import { deleteObject, ref } from 'firebase/storage'
import { storage } from '@/firebase.config'

type Props = {}



const SignatureDetails = (props: Props) => {
    const setSignaturTool = useSetRecoilState<emailSignatureToolType>(EmailSignatureToolState)
    const [signatureValue, setSignatureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)

    const [signatureStorageValue, setSignatureStorageValue] = useState<emailSignatureType>()
    useEffect(() => {
       const signatureStorage =  localStorage.getItem("userSignature")  
       setSignatureStorageValue(signatureStorage ?  JSON.parse(signatureStorage) : "")   
   
     }, [signatureStorageValue])

     const [showEdit, setShowEdit] = useRecoilState<signatureAtivateType>(signatureActivate)


    const SignatureInput = [
        {
            id: "name",
            title : "Name", 
            value : signatureStorageValue?.name,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    name : e.target.value
                }))
      
            }     
        },
        {
            id: "title",
            title : "Title",
            value : signatureStorageValue?.title,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    title : e.target.value
                }))
      
            }        
        },
        {
            id: "company",
            title : "Company",
            value : signatureStorageValue?.company,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    company : e.target.value
                }))
      
            }         
        },
        {
            id: "mobile",
            title : "Mobile",
            value : signatureStorageValue?.mobile,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    mobile : e.target.value
                }))
      
            }          
        },
        {
            id: "website",
            title : "Website",
            value : signatureStorageValue?.website,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    website : e.target.value
                }))
      
            }        
        },
        {
            id: "email",
            title : "Email",
            value : signatureStorageValue?.email,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    email : e.target.value
                }))
      
            }         
        },
        {
            id: "address",
            title : "Address",
            value : signatureStorageValue?.address,
            changeHandler : (e : React.ChangeEvent<HTMLInputElement>) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    address : e.target.value
                }))
      
            }         
        },
    ]

    const removeLogo = () => {
        const storageRef = ref(storage, `createSignature/${signatureValue.id}`);
            deleteObject(storageRef).then((res) => {
                setSignatureValue((prev) => ({
                    ...prev,
                    logo : ""
                }))
            })
    }
   
  return (
    <motion.div initial={{x : -800, opacity : 0}} animate={{x : 0, opacity : 1}} transition={{duration : 0.3}} className="p-5 w-full h-screen flex flex-col space-y-3">
        <h1 className=" uppercase text-sm text-info/90 font-[700]">Signature Details</h1>
        <div className="grid grid-cols-12 gap-5">
        <div className=" col-span-8 flex flex-col space-y-3">
           
            {SignatureInput.map((item) => (

                <div key={item.id} className="signatureDetails-inputBox">           
              <input disabled={showEdit.open ? true : false} id={item.id} name={item.id} type="text" value={item.value} required onChange={item.changeHandler} /> 
                <label htmlFor={item.id}>{item.title}</label>
                <div className="borderDiv"></div>
                </div>
            ))}
       

        

        </div>
        <div className="col-span-4 px-3">
           {signatureValue.logo ? 
           <div onClick={() => setSignaturTool((prev) => ({...prev, provider : "images"}))}  className="border border-primary/30 w-28 h-28 cursor-pointer rounded overflow-hidden relative group">
            <button className="absolute right-1 top-1 text-white/80 z-20 text-xl group-hover:text-white/100" onClick={removeLogo}><LuDelete /></button>
           <div className="absolute top-0 left-0 w-full h-full group-hover:bg-primary/20"></div>
           <Image src={signatureValue.logo} width={150} height={150} alt='me' />
       </div>
       : 
       <div onClick={() => setSignaturTool((prev) => ({...prev, provider : "images"}))} className="border border-dashed p-4 bg-[#f1f0f0] border-info/40 flex flex-col justify-center items-center py-5 rounded cursor-pointer">
       <TbCameraPlus className="text-2xl text-primary/80" />
       <p className="text-info/60 text-center text-sm">Upload image</p>
   </div>
        
        }
            
           
        </div>
        </div>
    </motion.div>
  )
}

export default SignatureDetails