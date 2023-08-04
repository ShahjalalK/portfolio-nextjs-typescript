import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";


export interface messageType{
    email : string,
    name : string,
    timestamp : Timestamp,
    message : string,
    media : string,
    id : string,
    messageId : string
    
}

export interface allMessageType {
    name : string,
    email : string,
    emailProvider : boolean,
    id : string,
    timestamp : Timestamp
}

export interface messageContentType {
    content : string,
    media : File,
    previewImage : string
}


export const allMessageState = atom<allMessageType[]>({
    key : "allMessageState",
    default : []
})

const defaultUserState : allMessageType  = {
    name : "",
    email : "",
    emailProvider : true,
    id : "",
    timestamp : Timestamp as any
}


export const userMessageState = atom<allMessageType> ({
    key : "userMessageState",
    default : defaultUserState
})


export const userCookieState = atom<allMessageType>({
    key : "userCookieState",
    default : defaultUserState
})

export const clientMessageState = atom<messageType[]>({
    key : "clientMessageState",
    default : []
})

export const myMessageState = atom<messageType[]>({
    key : "myMessageState",
    default : []
})

const defaultMesssageState : messageContentType = {
    content : "",
    media : {} as File,
    previewImage: ""
}

export const messageContentState = atom<messageContentType>({
    key : "messageContentState",
    default : defaultMesssageState
})

export interface messageSignupType {
    open : boolean
}

const defaultMessagSignup = {
    open : false
}

export const messageSignupState = atom<messageSignupType>({
    key : "signupShowState",
    default : defaultMessagSignup
})