import Login from '@/components/my-message-deshboard/login'
import SubscribeItem from '@/components/subscribe-page/subscribeItem'
import { auth, firestore } from '@/firebase.config'
import SubscribeApi from '@/firebaseApi/subscribeApi'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {Circles} from 'react-loader-spinner'

type Props = {}

const Subscribe = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const {getSubscribeUser} = SubscribeApi()

  useEffect(() => {
    getSubscribeUser()
  }, [firestore])


 return(
  <section className="section-padding mb-10 container">
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
    </div> : <SubscribeItem />} 


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

export default Subscribe