import React, {useEffect} from 'react'

import Content from '@/components/services/content'
import MoreServices from '@/components/services/moreServices'
import Package from '@/components/services/package'
import { auth, firestore } from '@/firebase.config'
import MessageApi from '@/firebaseApi/messageApi'
import Meta from '@/meta/meta'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { fetchBasicInfoSection, fetchServiceSectionSection, fetchTestimonialSection } from '@/untils/fetchSanity'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { allServicState, basicInfoState, basicInfoType, servicMessageState, serviceMessageType, serviceSectionType, testimonialSectionType } from '@/atom/santyType'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState, useSetRecoilState } from 'recoil'
import UserTrakingApi from '@/firebaseApi/userTrakingApi'
import SignatureTools from '@/components/signatureTools/signatureTools'

type Props = {
  service : serviceSectionType,
  allServiceData : serviceSectionType[],
  slugId : string,
  BasicInfoData : basicInfoType[];
  testiMonailSectionData : testimonialSectionType[]
}



const ServiceId = ({BasicInfoData, service, allServiceData, slugId, testiMonailSectionData}: Props) => {
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
    <section className=" font-Roboto">
    <Meta title={service.serviceTitle} /> 
    <div className="mb-32 pt-14">
      <SignatureTools />
    </div>
    <div className="pt-20">
    <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10">
      {/* <h1>MyId:-{slugId}</h1> */}
      <Content title={service.serviceTitle} Media={service.servicePageName[0].Gigs} description={service.servicePageName[0].description} testiMonailSectionData={testiMonailSectionData}/>
      <Package service={service} />
      
      </div> 
      <hr className="text-primary/25" />
      <MoreServices slugId={slugId} />
    </div>
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
      "serviceImage" : serviceImage.asset->url
  
}
 `

 const service = await client.fetch(query, {slugId})

 const allServiceData = await fetchServiceSectionSection()
 const BasicInfoData = await fetchBasicInfoSection()
 const testiMonailSectionData =  await fetchTestimonialSection()
  return { props: {BasicInfoData, service, allServiceData, slugId, testiMonailSectionData } }
}

