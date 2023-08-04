import React from "react";
import Basic from "./basic";
import Standard from "./standard";
import Premium from "./premium";
import { useRecoilState } from "recoil";
import { useTabState } from "@/atom/prichingTab";
import { pricingNameType } from "@/atom/santyType";
import { useRouter } from "next/router";


type Props = {
  pricingInfo : pricingNameType[]
};

const Package = ({pricingInfo}: Props) => {
  const [tabState, setTabState] = useRecoilState(useTabState);
  const router = useRouter()
  return (
    <div className=" col-span-1">
      <div className="md:sticky top-[100px] mb-20">
        <div className="border border-primary/50 flex items-center  justify-center font-bold">
          <div
            className={`p-3 text-center  flex-grow border-r border-primary/50 cursor-pointer text-info/90 ${tabState.view === "basic" && "border-b-2 border-secoundary text-secoundary"}`}
            onClick={() =>
              setTabState((prev) => ({ ...prev, open: true, view: "basic" }))
            }
          >
            Basic
          </div>
          <div  onClick={() =>
              setTabState((prev) => ({ ...prev, open: true, view: "standard" }))
            }  className={`p-3 text-center  flex-grow border-r border-primary/50 cursor-pointer text-info/90 ${tabState.view === "standard" && "border-b-2 border-secoundary text-secoundary"}`}>
            Standard
          </div>
          <div  onClick={() =>
              setTabState((prev) => ({ ...prev, open: true, view: "premium" }))
            }  className={`p-3 text-center  flex-grow cursor-pointer text-info/90 ${tabState.view === "premium" && "border-b-2 border-secoundary text-secoundary"}`}>
            Premium
          </div>
        </div>
        <div className="border border-primary/50 border-t-0 p-5">
          {tabState.view === "basic" && <Basic pricingInfo={pricingInfo} />}
          {tabState.view === "standard" && <Standard pricingInfo={pricingInfo} />}
          {tabState.view === "premium" && <Premium pricingInfo={pricingInfo}/>}
        </div>

        <button className="border border-primary/75 w-full p-2 rounded-lg mt-5 font-bold text-primary/90 hover:bg-primary/60 hover:text-white hover:border-[transparent]" onClick={() => router.push("/#contact")}>Contact me</button>

      </div>
    </div>
  );
};

export default Package;
