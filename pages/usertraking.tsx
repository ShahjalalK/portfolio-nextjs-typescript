import { userTrakingState, userTrakingType } from '@/atom/userTrakingState'
import Login from '@/components/my-message-deshboard/login'
import UserTrakingInfo from '@/components/userTraking/userTrakingInfo'
import { auth, firestore } from '@/firebase.config'
import UserTrakingApi from '@/firebaseApi/userTrakingApi'
import { deleteDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Circles } from 'react-loader-spinner'
import Moment from 'react-moment'
import { useRecoilState, useRecoilValue } from 'recoil'

type Props = {}

const Usertraking = (props: Props) => {



  const {getUserTraking} = UserTrakingApi()
  const [userTrakingValue, setUserTrakingValue] = useRecoilState<userTrakingType[]>(userTrakingState)

  
useEffect(() => {
  getUserTraking()
}, [firestore])

const [user, loading, error] = useAuthState(auth);

  return (
    <section className="section-padding mb-10 container font-Roboto">

{user?.email === "shahjalalkhan895@gmail.com" ?

<>
{loading ? <div className="w-full flex items-center justify-center">
      <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div> : 
    
    <div>
      <h1 className="text-xl mb-5 font-bold">Traking User Location Information- <span className="text-primary/80">{userTrakingValue.length}</span></h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5"> 
        {userTrakingValue.map((item) => (
          <UserTrakingInfo key={item.userId} item={item} />
        ))}         
            
        </div>
    </div>
    
    } 


</>
: 
<>
{loading ? <div className="w-full flex items-center justify-center">
      <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </div> : <Login />} 


</>


    
    }
  


      
      
    </section>
  )
}

export default Usertraking