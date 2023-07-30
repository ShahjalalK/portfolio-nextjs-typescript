import React, {useEffect} from 'react'

import Content from '@/components/services/content'
import MoreServices from '@/components/services/moreServices'
import Package from '@/components/services/package'
import { firestore } from '@/firebase.config'
import MessageApi from '@/firebaseApi/messageApi'
import Meta from '@/meta/meta'
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { fetchServiceSectionSection } from '@/untils/fetchSanity'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { serviceSectionType } from '@/atom/santyType'

type Props = {
  service : serviceSectionType,
  allServiceData : serviceSectionType[],
  slugId : string
}



const ServiceId = ({service, allServiceData, slugId}: Props) => {
    const {GetClientMessage} = MessageApi()

  useEffect(() => {
    GetClientMessage()
  }, [firestore])
  return (
    <section className="section-padding font-Roboto">
    <Meta title='Clickable email signature' /> 
     <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10">
      {/* <h1>MyId:-{slugId}</h1> */}
      <Content title={service.serviceTitle} Media={service.servicePageName[0].Gigs} description={service.servicePageName[0].description} />
      <Package pricingInfo={service.servicePageName[0].pricingName }  />
      
      </div> 
      <hr className="text-primary/25" />
      <MoreServices allServiceData={allServiceData} slugId={slugId} />
  </section>
  )
}

export default ServiceId

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       {
//         params: {
//           name: 'next.js',
//         },
//       }, // See the "paths" section below
//     ],
//     fallback: true, // false or "blocking"
//   }
// }


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
  
  // const serviceSectionData = await fetchServiceSectionSection()
  return { props: { service, allServiceData, slugId } }
}
