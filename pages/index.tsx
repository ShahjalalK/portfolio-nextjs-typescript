import Hero from '@/components/hero'
import { firestore } from '@/firebase.config'
import MessageApi from '@/firebaseApi/messageApi'

import Meta from '@/meta/meta'
import React, {useEffect} from 'react'


type Props = {}

const Home = (props: Props) => {
  const {GetClientMessage} = MessageApi()


useEffect(() => {
  GetClientMessage()
}, [firestore])

  return (
    <div>
      <Meta title='Home' /> 
      <div className="backgroundIntro relative pb-32">
        
      
       <Hero /> 




        <video  autoPlay loop muted playsInline className="w-full -z-20 object-cover absolute top-0 left-0  h-full" >
  <source src="video3.mp4" type="video/mp4" /> 
</video>
    </div>    
    </div>
  )
}

export default Home