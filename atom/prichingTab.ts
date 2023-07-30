import { atom } from "recoil";

interface tabType  {
    open : boolean,
    view : "basic" | "standard" | "premium"

}

 export interface includeType  {
    open : boolean   

}

const defaultTab : tabType = {
    open : true,
    view : "basic"
}

export const useTabState = atom<tabType>({
    key : "useTabState",
    default : defaultTab
})

const defaultIncludeTab = {
    open : false
}

export const useIncudeState = atom<includeType>({
    key : "useIncudeState",
    default : defaultIncludeTab
})