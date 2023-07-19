import { allMessageType, clientMessageState, messageType, myMessageState, userCookieState } from '@/atom/messageState'
import { firestore } from '@/firebase.config'
import { collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

type Props = {}

const MessageApi = () => {
  const cookeValue = useRecoilValue<allMessageType>(userCookieState)
  const [messageState, setMessageState] = useRecoilState<messageType[]>(clientMessageState)  
  const [myMessage, setMyMessage] = useRecoilState<messageType[]>(myMessageState)

  const cookie = parseCookies()


 

  const userCooke = cookie.user ? JSON.parse(cookie.user) : ""
  const messageRef = collection(firestore, "users", `${cookeValue.id ? cookeValue.id as string : userCooke.id as string }`, "message")

 

 
  
    const GetClientMessage = () => {
     
      

     onSnapshot(query(messageRef, orderBy("timestamp", "desc")), (snapshot) => {
     
      setMessageState(   
      
        snapshot.docs.map((item : any) => {
         
          return {messageId : item.id, ...item.data()}
           
        })
      ) 
      
      
      
     })
     
    }


    const getMyMessage = (id : string) => {
      const myMessageRef = collection(firestore, "users", id as string, "message" )
      onSnapshot(query(myMessageRef, orderBy("timestamp", "desc")), (res) => {
        setMyMessage(
         res.docs.map((item : any) => {
           return {messageId : item.id, ...item.data()}
          })
        )
    })
    }

    
  return {
    GetClientMessage,
    getMyMessage
  }
}

export default MessageApi