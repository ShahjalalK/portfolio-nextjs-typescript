import { atom } from "recoil"

export interface emailSignatureToolType{
    open : boolean,
    provider : "details" | "images" | "social"
}

const emailSignatureToolDefaultState : emailSignatureToolType = {
    open : true,
    provider : "details"
} 

export const EmailSignatureToolState = atom<emailSignatureToolType>({
   key : "EmailSignatureToolState" ,
   default : emailSignatureToolDefaultState
}) 

export interface downloadType{
    open : boolean
}

const defaultDownloadState : downloadType  = {
    open : false
}

export const downloadState = atom<downloadType>({
    key : "downloadState",
    default : defaultDownloadState
})