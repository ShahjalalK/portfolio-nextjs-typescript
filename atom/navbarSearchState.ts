import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface navbarSearchType {
    searchValue : string
}

const defaultSearchState : navbarSearchType = {
    searchValue : ""
}

export const navbarSearchState = atom<navbarSearchType>({
    key : "navbarSearchState",
    default : defaultSearchState
})