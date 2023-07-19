import React, {useEffect} from 'react'

import Content from '@/components/services/content'
import MoreServices from '@/components/services/moreServices'
import Package from '@/components/services/package'
import { firestore } from '@/firebase.config'
import MessageApi from '@/firebaseApi/messageApi'
import Meta from '@/meta/meta'

type Props = {}

const AllServiceData = [
  {
    name : "business-wix-website",
    media : "/wix.jpg",
    title : "I will design, develop or redesign your business wix website"
  },
  {
    name : "full-stack-development-with-nextjs",
    media : "/nextjs.webp",
    title : "I will do full stack development with react, next js, firebase, sanity, sendinblue"
  },
  {
    name : "hubspot-email-newsletter-template",
    media : "/hubspot-1.jpg",
    title : "I will develop a responsive hubspot html email newsletter template"
  },
  {
    name : "sendinblue-email-template",
    media : "/sendinblue1.webp",
    title : "I will do professional sendinblue html email newsletter template"
  },
  {
    name : "klaviyo-email-template",
    media : "/klaviyo-1.webp",
    title : "I will do responsive html klaviyo email newsletter template"
  },
  {
    name : "mailchimp-email-newsletter-template",
    media : "/mailchimp-1.jpg",
    title : "I will develop responsive mailchimp HTML email newsletter template"
  },
  {
    name : "HTML-email-template",
    media : "/html-email-1.jpg",
    title : "I will design a responsive HTML email newsletter template"
  }

]


const ClickableEmailSignature = (props: Props) => {
  const {GetClientMessage} = MessageApi()


  useEffect(() => {
    GetClientMessage()
  }, [firestore])
  return (
    <section className="section-padding font-Roboto">
      <Meta title='Clickable email signature' /> 
       <div className="grid container grid-cols-1 lg:grid-cols-3 gap-10">
        <Content />
        <Package />
        
        </div> 
        <hr className="text-primary/25" />
        <MoreServices allServiceData={AllServiceData} />
    </section>
  )
}

export default ClickableEmailSignature