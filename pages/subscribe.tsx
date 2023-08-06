import { basicInfoState, basicInfoType } from '@/atom/santyType'
import { subscribeUserType } from '@/atom/subscribeTypeState'
import Login from '@/components/my-message-deshboard/login'
import SubscribeItem from '@/components/subscribe-page/subscribeItem'
import { auth, firestore } from '@/firebase.config'
import SubscribeApi from '@/firebaseApi/subscribeApi'
import { fetchBasicInfoSection } from '@/untils/fetchSanity'
import { doc, getDoc } from 'firebase/firestore'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {Circles} from 'react-loader-spinner'
import { useRecoilState } from 'recoil'

type Props = {
  BasicInfoData : basicInfoType[]
}

const Subscribe = ({BasicInfoData}: Props) => {
  const [user, loading, error] = useAuthState(auth);
 
  const {getSubscribeUser} = SubscribeApi()
  const [basicInfo, setBasicInfo] = useRecoilState<basicInfoType[]>(basicInfoState)


  useEffect(() => {
      setBasicInfo(
        BasicInfoData
      )
     }, [basicInfo])

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

export const getServerSideProps: GetServerSideProps = async () => {
 
  const BasicInfoData = await fetchBasicInfoSection()
 
  return { props: {   
    BasicInfoData
    } }
}



export default Subscribe



