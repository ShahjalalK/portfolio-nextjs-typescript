import { allMessageType, userMessageState } from '@/atom/messageState'
import { firestore } from '@/firebase.config'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { MdOutlineMailLock, MdOutlineMarkEmailUnread } from 'react-icons/md'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'

type Props = {
 
}

const MyMessageHeader = ({}: Props) => {
  
    const [userState, setUserState] = useRecoilState<allMessageType>(userMessageState)
    const [checked, setChecked] = useState<boolean>(userState.emailProvider); 

    const handleChange = async () => {     
        setChecked(!checked) 
        const updateUser = doc(firestore, "users", userState.id as string)  
        await updateDoc(updateUser, {
          emailProvider : !checked
        })
        if(checked){
          toast(`${userState.name} Email provider has been activated🎉`)
        }else{
          toast(`${userState.name} Email provider has been closed✨`)
        }
        
      }; 
     

  return (
    <div className="flex items-center space-x-2 border border-b-0 border-primary/30 rounded rounded-b-none p-1 bg-primary/5">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 "><span className="text-xl uppercase">{userState.name[0]}</span></div>
            <div className="flex flex-col -space-y-1 flex-grow">
              <h1 className="text-lg font-medium capitalize">{userState.name}</h1>
              <p className="text-sm">{userState.email}</p>
            </div>

            <div className="flex items-center space-x-1">
                
                <input type="checkbox" checked={checked} className="checkButton" onChange={handleChange} />
                {checked ?  <MdOutlineMarkEmailUnread className="text-2xl text-primary/80" /> :  <MdOutlineMailLock className="text-2xl text-primary/30" />}
               
            </div>
           
          </div>
  )
}

export default MyMessageHeader