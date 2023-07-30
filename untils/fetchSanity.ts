import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"

const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://amazon2023.vercel.app'

const homeSectionQuery = groq`
*[_type == "home"]
`
const aboutSectionQuery = groq`
*[_type == "about"]{   
  ...,
  "uploadCV": uploadCV.asset->url

}
`

const testimonialSectionQuery = groq`
*[_type == "testimonial"]{   
  ...,
  "clientImage": clientImage.asset->url

} | order(_createdAt, desc)
`

const frontEndSkillSectionQuery = groq`
*[_type == "frontEndSkills"]{
  ...,
} | order(_createdAt, desc)
`

const serviceSectionQuery = groq`
*[_type == "services"]{
  ...,
  "serviceImage" : serviceImage.asset->url,
  "ServicePath" : ServicePath.current
} | order(_createdAt, desc)
`
const portfolioSectionQuery = groq`
*[_type == "portfolio"]{
  ...,
  "media" : media.asset->url
} | order(_createdAt, desc)
`
// export const fetchHomeSection = async () => {
//     const res = await fetch(`${API_URL}/api/sanity/getHomeSection`)   
//     const data = await res.json()
//     const homePageInfo = data.home
//     return res
// }

export const fetchHomeSection = async () => {  
      
    return await client.fetch(homeSectionQuery) 
}

export const fetchAboutSection = async () => {  
      
    return await client.fetch(aboutSectionQuery) 
}

export const fetchTestimonialSection = async () => {  
      
  return await client.fetch(testimonialSectionQuery) 
}

export const fetchfrontEndSkillSectionSection = async () => {  
      
  return await client.fetch(frontEndSkillSectionQuery) 
}

export const fetchServiceSectionSection = async () => {  
      
  return await client.fetch(serviceSectionQuery) 
}

export const fetchPortfolioSectionSection = async () => {  
      
  return await client.fetch(portfolioSectionQuery) 
}