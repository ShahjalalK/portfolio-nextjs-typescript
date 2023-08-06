import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface subscribeUserType {
    email : string,
    id : string,
    timestamp : Timestamp
}

export const subscribeState = atom<subscribeUserType[]>({
    key : "subscribeUserState",
    default : [] 
})