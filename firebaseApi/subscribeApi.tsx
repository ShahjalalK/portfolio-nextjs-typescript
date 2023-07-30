import { subscribeUserState, subscribeUserType } from '@/atom/subscribeUser'
import { firestore } from '@/firebase.config'
import { timeStamp } from 'console'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { useSetRecoilState } from 'recoil'


const SubscribeApi = () => {
    const subscribeRef = collection(firestore, "subscribe")
    const setSubscribe = useSetRecoilState(subscribeUserState)

    const getSubscribeUser = () => {
      onSnapshot(query(subscribeRef, orderBy("timeStamp", "desc")), (snapshot) => {
     
        setSubscribe(   
        
          snapshot.docs.map((item : any) => {
                       
            return {id : item.id, ...item.data()}
             
          })
        ) 
        
        
        
       })
    }
    const postSubscribe = async (setLoading : React.Dispatch<React.SetStateAction<boolean>>, subscribeEmails : string, email : string, setEmail : React.Dispatch<React.SetStateAction<string>>, setSucess : React.Dispatch<React.SetStateAction<string>>, setSubscribeEmails : React.Dispatch<React.SetStateAction<string>>) => {
      try {
        setLoading(true)
        if(subscribeEmails === email){    
          setEmail("")
          setSucess("Thank you for submiting!")
         }else{

         const res = await fetch("/api/subscribeMessage", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({email})
          }) 

          const res2 = await res.json()
          
         await addDoc(subscribeRef, {
            timeStamp : serverTimestamp(),
            email
          })
             
            setEmail("")
            setSucess(res2.message)
         }
      
        
         setSubscribeEmails(email)
    
         setLoading(false)
       } catch (error : any) {
        console.log(error.message)
       }
        
    }
  return {
    getSubscribeUser,
    postSubscribe
  }
}

export default SubscribeApi