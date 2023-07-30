import Hero from '@/components/hero'
import { firestore } from '@/firebase.config'
import MessageApi from '@/firebaseApi/messageApi'
import { fetchHomeSection, fetchAboutSection, fetchTestimonialSection, fetchfrontEndSkillSectionSection, fetchServiceSectionSection, fetchPortfolioSectionSection } from '@/untils/fetchSanity'

import Meta from '@/meta/meta'

import { GetServerSideProps, GetStaticProps } from 'next'
import React, {useEffect} from 'react'
import { aboutSectionType, frontEndSkillsSectionType, homeSectionType, portfolioSectionType, serviceSectionType, testimonialSectionType } from '@/atom/santyType'


type Props = {
  homeSectionData : homeSectionType[];
  aboutSectionData : aboutSectionType[];
  testiMonailSectionData : testimonialSectionType[];
  frontEndSkillSectionData : frontEndSkillsSectionType[];
  serviceSectionData : serviceSectionType[];
  portfolioSectionData : any
}

const Home = ({homeSectionData, aboutSectionData, testiMonailSectionData, frontEndSkillSectionData, serviceSectionData, portfolioSectionData} : Props) => {
  const {GetClientMessage} = MessageApi()


useEffect(() => {
  GetClientMessage()
}, [firestore])


  return (
    <div>
      <Meta title='Home' /> 
    
      <div className="backgroundIntro relative pb-32">
      
       <Hero homeSectionData={homeSectionData} aboutSectionData={aboutSectionData} testiMonailSectionData={testiMonailSectionData} frontEndSkillSectionData={frontEndSkillSectionData} serviceSectionData={serviceSectionData} portfolioSectionData={portfolioSectionData} />

        <video  autoPlay loop muted playsInline className="w-full -z-20 object-cover absolute top-0 left-0  h-full" >
  <source src="video3.mp4" type="video/mp4" /> 
</video>
    </div>  
    
    </div>
  )
}

export default Home

// export const getServerSideProps: GetServerSideProps<{
 
// }> = async () => {
//  const homeSectionData = await fetchHomeSection()
//  console.log("homeData", homeSectionData)
  
//   return { props: {  } }
// }

// export const getStaticProps: GetStaticProps<{
 
// }> = async () => {
//  const homeSectionData = await fetchHomeSection()
//  const aboutSectionData = await fetchAboutSection()
//  const testiMonailSectionData =  await fetchTestimonialSection()
//  const frontEndSkillSectionData = await fetchfrontEndSkillSectionSection()
//  const serviceSectionData = await fetchServiceSectionSection()
//  const portfolioSectionData = await fetchPortfolioSectionSection()
 
  
//   return {
//      props: { homeSectionData, aboutSectionData, testiMonailSectionData, frontEndSkillSectionData, serviceSectionData, portfolioSectionData }, 
//      revalidate: 10 }
// }

export const getServerSideProps: GetServerSideProps<{
 
}> = async () => {
 const homeSectionData = await fetchHomeSection()
 const aboutSectionData = await fetchAboutSection()
 const testiMonailSectionData =  await fetchTestimonialSection()
 const frontEndSkillSectionData = await fetchfrontEndSkillSectionSection()
 const serviceSectionData = await fetchServiceSectionSection()
 const portfolioSectionData = await fetchPortfolioSectionSection()
 
  
  return {
     props: { homeSectionData, aboutSectionData, testiMonailSectionData, frontEndSkillSectionData, serviceSectionData, portfolioSectionData } 
     }
}
