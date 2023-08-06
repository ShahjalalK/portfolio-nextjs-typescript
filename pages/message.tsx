import { allMessageState, allMessageType } from '@/atom/messageState';
import { basicInfoState, basicInfoType } from '@/atom/santyType';
import Login from '@/components/my-message-deshboard/login';
import MyMessage from '@/components/my-message-deshboard/myMessage';
import { auth, firestore } from '@/firebase.config';
import MessageApi from '@/firebaseApi/messageApi';
import { fetchBasicInfoSection } from '@/untils/fetchSanity';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import React, { useEffect, useMemo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Circles } from 'react-loader-spinner';
import { useRecoilState, useSetRecoilState } from 'recoil';



type Props = {
  BasicInfoData : basicInfoType[]
}

const MessageDesboard = ({BasicInfoData}: Props) => {
  const [user, loading, error] = useAuthState(auth);


 

  const {GetClientMessage, getAllUsers} = MessageApi()
  const [basicInfo, setBasicInfo] = useRecoilState<basicInfoType[]>(basicInfoState)


  useEffect(() => {
      setBasicInfo(
        BasicInfoData
      )
     }, [basicInfo])


useEffect(() => {
  GetClientMessage()
}, [firestore])
  



 
useEffect(() => {
  getAllUsers()
}, [firestore])

  return (
   <section className="section-padding ">
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
    </div> : <MyMessage />} 
    
    
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

export default MessageDesboard