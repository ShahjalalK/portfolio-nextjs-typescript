import { allMessageState, allMessageType, messageContentState, messageContentType, messageSignupState, messageSignupType, userCookieState, userMessageState } from '@/atom/messageState'
import { firestore, storage } from '@/firebase.config'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { parseCookies } from 'nookies'
import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'




type Props = {}

const MessageHandlerApi = () => {
    const setMessageSignupState = useSetRecoilState<messageSignupType>(messageSignupState) 
    const [cookeValue, setCookeValue] = useRecoilState<allMessageType>(userCookieState)
    const cookie = parseCookies()
    const userCooke = cookie.user ? JSON.parse(cookie.user) : ""

const [messageState, setMessageState] = useRecoilState<messageContentType>(messageContentState)

const userValue = useRecoilValue<allMessageType>(userMessageState)
    const messageRef = collection(firestore, "users", `${cookeValue.id ? cookeValue.id : userCooke.id}`, "message")
    
   
    
    const emailHandler = async (mediaImage : string) => {
      try {
        if(!cookeValue.email && !userCooke.email) return
        
        if(!userValue.emailProvider) return

        await fetch("/api/contact", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"                
          },
          body : JSON.stringify({                
            email : cookeValue.email ? cookeValue.email : userCooke.email,
            name : cookeValue.name ? cookeValue.name : userCooke.name,
            id : cookeValue.id ? cookeValue.id : userCooke.id,
            subject : `${userCooke.name}- messaged you from your website`,
            message : messageState.content, 
            media : mediaImage
          })
         })
        
      } catch (error: any) {
        console.log(error.message)
      }
    }
  
    const messageHandler = async (setMessageHeight : React.Dispatch<React.SetStateAction<string | number | undefined>>) => {
        if(!userCooke){
            setMessageSignupState((prev) => ({
             
                open : true
            }))
            return
          }
    
          
    
          if(!messageState.content && !messageState.previewImage){
            return
          }
          
          try {

            
            const res = await addDoc(messageRef, {
              email : cookeValue.email ? cookeValue.email : userCooke.email,
              name : cookeValue.name ? cookeValue.name : userCooke.name,
              timestamp : serverTimestamp(),
              message : messageState.content,
              media : "",
              id : cookeValue.id ? cookeValue.id : userCooke.id,
             })
        
             if(messageState.previewImage){
             
                const storageRef = ref(storage, `messages/${cookeValue.id ? cookeValue.id : userCooke.id}/${res.id}`);
              const uploadTask = uploadBytesResumable(storageRef, messageState.media);
        
              await uploadTask.on('state_changed', 
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
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const docRef = doc(firestore, "users", `${cookeValue.id ? cookeValue.id : userCooke.id}`, "message", res.id)
                    updateDoc(docRef, {
                      media : downloadURL
                    })
                    emailHandler(downloadURL)
                  });
                }
              )
              
                
             }else{
              emailHandler("")
             }

            
        
              setMessageState((prev) => ({
                ...prev,
              media : {} as File,
              previewImage : "",
              content : ""
              }))

              setMessageHeight("20px");


              
            
          } catch (error : any) {
            console.log(error.message)
          }
     }

   

 


     const myMessageHandler = async (id : string) => {
     
    const myMessageRef = collection(firestore, "users", id as string, "message" )
      
        
  
        if(!messageState.content && !messageState.previewImage){
          return
        }
        
        try {
          
          const res = await addDoc(myMessageRef, {
            name : "shahjalal khan",
            email : "shahjalalkhan895@gmail.com",
            id : "cca5740a-6dd6-4fa9-b4da-6598ef9e49da",
            timestamp : serverTimestamp(),
            message : messageState.content,
            media : "",
           })
      
           if(messageState.previewImage){
           
              const storageRef = ref(storage, `messages/${id}/${res.id}`);
            const uploadTask = uploadBytesResumable(storageRef, messageState.media);
      
            await uploadTask.on('state_changed', 
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
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  const docRef = doc(firestore, "users", `${id}`, "message", res.id)
                  updateDoc(docRef, {
                    media : downloadURL
                  })
                });
              }
            )
            
              
           }
      
           
  
            setMessageState((prev) => ({
              ...prev,
            media : {} as File,
            previewImage : "",
            content : ""
            }))
          
        } catch (error : any) {
          console.log(error.message)
        }
   }
    
  return {
        messageHandler,
        myMessageHandler,
        emailHandler
  }
}

export default MessageHandlerApi