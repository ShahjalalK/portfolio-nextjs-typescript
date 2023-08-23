import { userTrakingState, userTrakingType } from '@/atom/userTrakingState'
import { firestore } from '@/firebase.config'
import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import Cookies from 'js-cookie'
import { parseCookies } from 'nookies'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { v4 as uuidv4 } from 'uuid';

type Props = {}

const UserTrakingApi = () => {
  const setUserTraking = useSetRecoilState<userTrakingType[]>(userTrakingState)
  const userTrakingRef = collection(firestore, "userTraking")

   const getUserTraking = () => {     
       
       
          onSnapshot(query(userTrakingRef, orderBy("timestamp", "desc")), (snapshot) => {
         
            setUserTraking(
              snapshot.docs.map((item : any) => {                       
                return {...item.data()}                 
              })
            )
            
           })
       
    }

  

    const [userVewCount, setUserVewCount] = useState<boolean>(true)

    const cookie = parseCookies()

  const userTrakingCooke = cookie.userTraking ? JSON.parse(cookie.userTraking) : ""

  const userTrakingFirebase = async (id : string, userVew : number) => {
    

   if(id){
    const docRef = doc(firestore, `userTraking/${id}`)

    const location = await fetch(`https://geolocation-db.com/json/${process.env.GEOLOCATION_DB_KEY}`).then((res) => res.json()).then((data) => 
    data

     )
 
     if(location.country_name){
      await setDoc(docRef, {
        userId :id,
        userVew,
        timestamp : serverTimestamp(),
        country_name: location?.country_name,
        city : location?.city,
        state : location?.state,
        postal : location?.postal,
        IP : location?.IPv4
       })
     }else{
      await setDoc(docRef, {
        userId :id,
        userVew,
        timestamp : serverTimestamp(),
        country_name: "",
        city : "",
        state : "",
        postal : "",
        IP : ""
       })
     }
    

   
   }
  }
  
  const userTrakingFunc = async  (id : string) => {
    if(!userTrakingCooke.userId){
      Cookies.set("userTraking", JSON.stringify({
        userId : id,
        userVew : 1,           
       }), { expires: 365 })
       
    }else{
      Cookies.set("userTraking", JSON.stringify({ 
        userId : userTrakingCooke.userId,       
        userVew : userTrakingCooke.userVew + 1,           
       }), { expires: 365 })
       
    }
    userTrakingFirebase(userTrakingCooke.userId, userTrakingCooke.userVew)

    setUserVewCount(false)
  }


  const userTarkings = () => {
    if(userVewCount){
    
      userTrakingFunc(uuidv4())    
    }   
  }


  return{
    getUserTraking,
    userTarkings
  }
}

export default UserTrakingApi