import { type } from "os";
import { atom } from "recoil";

interface Base{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
    
}

export interface homeSectionType extends Base {
    subtitle : string,
    title : string
    _type : "home"
  }

  export interface basicInfoType extends Base {
    name : string,
    myImage : string,
    _type : "basicInfo",
    email : string,
    title : string,
    hireLink : string    
  }

  export interface aboutSectionType extends Base {
    subtitle : string,
    title : string,
    _type : "about",
    experience : string,
    phone : string,
    email : string,
    country : string,
    description : string,
    clientNumber : number,
    experienceYears : number,
    aboutImage : string,
    uploadCV : string,
    name : string,
    client : string
  }

  export interface testimonialSectionType extends Base {    
    _type : "testimonial",
    review : string,
    name : string,
    title : string,
    companyName : string,
    clientImage : string

    
  }

  export interface frontEndSkillsSectionType extends Base {    
    _type : "frontEndSkills",
    skillName: string,
    parsent: number,
    colorCode : color,

    
  }

  interface color {
    _type:"color",
    hex : string
  }

  export interface serviceSectionType extends Base { 
    serviceName: string,
    icon: string,
    ServicePath : string,
    serviceTitle : string,
    searchDescription : string,
    orderLenth : string ,
    serviceImage : string,
    orderLink : string,
    servicePageName : servicePageNameType[]   

  }

  export interface servicePageNameType extends Base{
    _type : "servicePage",   
    Gigs : GigsType[]
    description : any,
    serviceTitle : string

  }


  
 
  
  export interface GigsType extends Base{
    _type : "gigMedia"
    video? : string,
    mediaImage?: string

  }

   export interface portfolioSectionType extends Base {    
    _type : "portfolio",
    targetLink: string,
    programName: string[],
    media : string,
    title : string ,
    className?: boolean,
    imageHeight?:boolean 

  }



 

  export const allServicState = atom<serviceSectionType[]>({
    key : "allServiceData",
    default : []
  })


  export interface serviceMessageType{
   
    serviceTitle : string,
    searchDescription : string,   
    serviceImage : string,
    orderLink : string
  }

  const defaultServiceState : serviceMessageType = {    
    serviceTitle : "",
    searchDescription : "",   
    serviceImage : "",
    orderLink : ""
  }

  export const servicMessageState = atom<serviceMessageType>({
    key : "servicMessageState",
    default : defaultServiceState
  })

  export const basicInfoState = atom<basicInfoType[]>({
    key : "basicInfoState",
    default : []
  })

 


 
