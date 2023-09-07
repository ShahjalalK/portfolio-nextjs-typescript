import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { MdAnimation } from 'react-icons/md'
import { AiFillCamera, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import Image from 'next/image'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { EmailSignatureState, SignatureImageType, emailSignatureType, signatureImageState } from '@/atom/createEmailSignatureState/emailSignatureState'
import { storage } from '@/firebase.config'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { doc } from 'firebase/firestore'
import { parseCookies } from 'nookies'
import { Circles } from 'react-loader-spinner'

type Props = {}

const SignatureImages = (props: Props) => {
    const [showUpload, setShowUpload] = useState(false)
    const [signatureValue, setSignatureValue] = useRecoilState<emailSignatureType>(EmailSignatureState)
    const [signatureImage, setSignatureImage] = useRecoilState<SignatureImageType>(signatureImageState)

    const [loading, setLoading] = useState(false)

    
    const resetSignatureImage = useResetRecoilState(signatureImageState)
    const cookie = parseCookies()
    const userTrakingCooke = cookie.userTraking ? JSON.parse(cookie.userTraking) : ""


    const changeHanderImage = (e : React.ChangeEvent<HTMLInputElement>) => {
        const currentFile = e.target.files as FileList
        setSignatureImage((prev) => ({
          ...prev,
          media : currentFile[0],
          previewImage : currentFile[0] ? URL.createObjectURL(currentFile[0]) : ""
        }))
      }

      const uploadImage = async () => {
        if(signatureImage.previewImage && signatureValue.id){          
            setLoading(true)
           
            const storageRef = ref(storage, `createSignature/${signatureValue.id}`);
            deleteObject(storageRef).then(() => {
              const uploadTask = uploadBytesResumable(storageRef, signatureImage.media);
  
              uploadTask.on('state_changed', 
                (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                  }
                }, 
                (error) => {
                  // Handle unsuccessful uploads
                }, 
                () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  getDownloadURL(uploadTask.snapshot.ref).then((getDownloadURL) => {                
                    setSignatureValue((prev) => ({
                        ...prev,
                        logo : getDownloadURL
                    }))
                   
                  });
                }
              )

              setLoading(false)
              resetSignatureImage()
              
            }
           
            ).catch((error) => {
              const uploadTask = uploadBytesResumable(storageRef, signatureImage.media);
  
              uploadTask.on('state_changed', 
                (snapshot) => {
                  // Observe state change events such as progress, pause, and resume
                  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                    case 'paused':
                      console.log('Upload is paused');
                      break;
                    case 'running':
                      console.log('Upload is running');
                      break;
                  }
                }, 
                (error) => {
                  // Handle unsuccessful uploads
                }, 
                () => {
                  // Handle successful uploads on complete
                  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                  getDownloadURL(uploadTask.snapshot.ref).then((getDownloadURL) => {                
                    setSignatureValue((prev) => ({
                        ...prev,
                        logo : getDownloadURL
                    }))
                   
                  });
                }
              )

              setLoading(false)
              resetSignatureImage()
            });
      }
    }

  return (
    <motion.div initial={{x : 800, opacity : 0}} animate={{x : 0, opacity : 1}} transition={{duration : 0.3}} className="p-5 w-full h-screen flex flex-col space-y-3">
    <h1 className=" uppercase text-sm text-info/90 font-[700]">Images</h1>
    
    <div className="border border-dashed border-info/40 h-40 flex justify-center items-center rounded flex-col space-y-1 relative">
    {signatureImage.previewImage &&
    <>
    <div className="relative">
    <Image src={signatureImage.previewImage} width={100} height={100} alt='p' className="w-32 h-32 rounded-full object-cover" />
    <label htmlFor='signatureImage' className="bg-[#ddd] group group-hover:bg-white/100 rounded-full h-7 w-7 flex justify-center items-center absolute bottom-2 right-2 cursor-pointer ">
    <AiFillCamera className="text-xl text-primary/80 group-hover:text-info/100" />
    </label>
    
    </div>
<div className="absolute top-3 right-6">
{ loading ? <Circles
  height="40"
  width="40"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 
/>
:
<button onClick={uploadImage} className="bg-[#1cb7eb] hover:bg-secoundary rounded px-5 py-1 text-white">Done</button>

}
</div>
    
    </>
}

{!signatureImage.previewImage && 
    <>
     <label  htmlFor='signatureImage' className="bg-[#1cb7eb] cursor-pointer px-7 py-2 rounded text-white text-base font-bold">+ Upload Photo or Logo</label>
     <p className="text-info/90">Image should be at least 100X100px</p>
    </>
}
            
   
    </div>
    <input type="file" onChange={changeHanderImage} accept='image/*' id='signatureImage' className="hidden" />

    <div className="flex items-center text-[#1cb7eb] font-bold cursor-pointer">
        <MdAnimation />
        <span>Animate</span>
    </div>

    <div onClick={() => setShowUpload(!showUpload)} className="flex items-center text-[#1cb7eb] font-bold cursor-pointer">
        {showUpload ? 

<AiOutlineMinusCircle />

:
        <>
        <AiOutlinePlusCircle />
        <span>Add another</span>
        </>
        

    }
        

        
    </div>
{showUpload && 
<>
<div className="border border-dashed border-info/40 h-40 flex justify-center items-center rounded flex-col space-y-1">
    <button className="bg-[#1cb7eb] px-7 py-2 rounded text-white text-base font-bold">+ Upload Photo or Logo</button>
                <p className="text-info/90">Image should be at least 100X100px</p>
    </div>

    <div className="flex items-center text-[#1cb7eb] font-bold cursor-pointer">
        <MdAnimation />
        <span>Animate</span>
    </div>
</>
}
    

</motion.div>
  )
}

export default SignatureImages