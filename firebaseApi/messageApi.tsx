import { allMessageState, allMessageType, clientMessageState, messageType, myMessageState, userCookieState, userMessageState } from '@/atom/messageState'
import { firestore } from '@/firebase.config'
import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

type Props = {}

const MessageApi = () => {
  const [cookeValue, setCookieValue] = useRecoilState<allMessageType>(userCookieState)
  const  setAllUserState = useSetRecoilState<allMessageType[]>(allMessageState)
  const [messageState, setMessageState] = useRecoilState<messageType[]>(clientMessageState)  
  const [myMessage, setMyMessage] = useRecoilState<messageType[]>(myMessageState)
  const setUserState = useSetRecoilState(userMessageState)

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

    const getUser = () => {
      if(!cookeValue.email && !userCooke.email) return
      const myMessageRef = doc(firestore, "users", cookeValue.id ? cookeValue.id as string : userCooke.id as string)
      onSnapshot(myMessageRef, (res) => {
        setUserState(       
          res.data() as any
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

    const getAllUsers = async () => {
      const queryUsers = query(collection(firestore, "users"), orderBy("timestamp", "desc"))
      onSnapshot(queryUsers, (snapshot) => {
        setAllUserState(snapshot.docs.map((message : any) => {
         return {...message.data() }
       }))
      })
    }

    
  return {
    GetClientMessage,
    getMyMessage,
    getAllUsers,
    getUser
  }
}

export default MessageApi