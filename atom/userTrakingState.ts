import { Timestamp } from "firebase/firestore"
import { atom } from "recoil"

export interface userTrakingType {
    userId : string,
    userVew : number,
    timestamp : Timestamp,
    country_name?: string,
      city? : string,
      state? : string,
      postal? : string,
      IP? : string
}


export const userTrakingState = atom<userTrakingType[]>({
    key : "userTrakingState",
    default : []
})