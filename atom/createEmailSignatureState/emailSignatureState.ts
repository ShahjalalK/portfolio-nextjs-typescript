import { atom } from "recoil";

export interface signatureAtivateType{
    open : boolean
}
const signatureDefault : signatureAtivateType = {
    open : true
}
export const signatureActivate = atom<signatureAtivateType>({
    key : "signatureActivate",
    default : signatureDefault
})

export interface emailSignatureType {
   id : string,
    name : string,
    title : string,
    company : string,
    mobile : string,
    website : string,
    email : string,
    address : string,
    logo : string,
    linkedin : string,
    facebook : string,
    instagram : string,
    twitter : string,
    tiktok : string,
    
}

const defaultSignatureState : emailSignatureType = {
    id: "",
    name : "",
    title : "",
    company : "",
    mobile : "",
    website : "",
    email : "",
    address : "",
    logo : "",
    linkedin : "",
    facebook : "",
    instagram : "",
    twitter : "",
    tiktok : "",
}

export const EmailSignatureState = atom<emailSignatureType>({
    key : "EmailSignatureState",
    default : defaultSignatureState
})


export interface SignatureImageType {   
    media : File,
    previewImage : string
}

const defaultSignatureImageState : SignatureImageType = {
    media : {} as File,
    previewImage: ""
}




export const signatureImageState = atom<SignatureImageType>({
    key : "signatureImageState",
    default : defaultSignatureImageState
})

