import { atom } from "recoil"

export interface contactType{
    email : string,
    name : string,
    subject : string,
    message : string
}

const defaultcontactState : contactType = {
    email : "",
    name : "",
    subject : "",
    message : ""
}

export const contactState = atom<contactType>({
    key : "contactState",
    default : defaultcontactState
})