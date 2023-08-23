import React, {useEffect} from 'react'

import Content from '@/components/services/content'
import MoreServices from '@/components/services/moreServices'
import Package from '@/components/services/package'
import { auth, firestore } from '@/firebase.config'
import MessageApi from '@/firebaseApi/messageApi'
import Meta from '@/meta/meta'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { fetchBasicInfoSection, fetchServiceSectionSection } from '@/untils/fetchSanity'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { allServicState, basicInfoState, basicInfoType, serviceSectionType } from '@/atom/santyType'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState, useSetRecoilState } from 'recoil'
import UserTrakingApi from '@/firebaseApi/userTrakingApi'

type Props = {
  service : serviceSectionType,
  allServiceData : serviceSectionType[],
  slugId : string,
  BasicInfoData : basicInfoType[];
}



const ServiceId = ({BasicInfoData, service, allServiceData, slugId}: Props) => {
    const {GetClientMessage, getUser} = MessageApi()
    const [user, loading, error] = useAuthState(auth);
    const [allService, setAllService] = useRecoilState<serviceSectionType[]>(allServicState)
    const [basicInfo, setBasicInfo] = useRecoilState<basicInfoType[]>(basicInfoState)
 
    useEffect(() => {
    setBasicInfo(
      BasicInfoData
    )
   }, [basicInfo])
   useEffect(() => {
    setAllService(
      allServiceData
    )
   }, [allService])

  useEffect(() => {
    GetClientMessage()
  }, [firestore])

  
useEffect(() => {
  if(user?.email !== "shahjalalkhan895@gmail.com"){
    getUser()
  }
 
  
}, [firestore])

const {userTarkings} = UserTrakingApi()

useEffect(() => {
  userTarkings()    
}, [])

  return (
    <section className=" pt-20 font-Roboto">
    <Meta title='Clickable email signature' /> 
     <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10">
      {/* <h1>MyId:-{slugId}</h1> */}
      <Content title={service.serviceTitle} Media={service.servicePageName[0].Gigs} description={service.servicePageName[0].description} />
      <Package pricingInfo={service.servicePageName[0].pricingName }  />
      
      </div> 
      <hr className="text-primary/25" />
      <MoreServices slugId={slugId} />
  </section>
  )
}

export default ServiceId


export const getServerSideProps : GetServerSideProps = async (context : GetServerSidePropsContext) => {
 const slugId = context.query.slug as string
 const query = groq`
      *[_type == "services" && ServicePath.current == $slugId][0]{
      ...,
      servicePageName[]->{..., Gigs[]->{..., "mediaImage": mediaImage.asset->url}, pricingName[]->, serviceImage[]->},
  
}
 `

 const service = await client.fetch(query, {slugId})

 const allServiceData = await fetchServiceSectionSection()
 const BasicInfoData = await fetchBasicInfoSection()
 
  return { props: {BasicInfoData, service, allServiceData, slugId } }
}

