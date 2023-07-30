import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface subscribeUserType {
    email : string,
    id : string,
    timestamp : Timestamp
}

export const subscribeUserState = atom<subscribeUserType[]>({
    key : "subscribeUserState",
    default : [] 
})