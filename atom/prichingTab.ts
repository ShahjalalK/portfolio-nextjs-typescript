import { atom } from "recoil";

interface tabType  {
    open : boolean,
    view : "basic" | "standard" | "premium"

}

const defaultTab : tabType = {
    open : true,
    view : "basic"
}

export const useTabState = atom<tabType>({
    key : "tabInfo",
    default : defaultTab
})