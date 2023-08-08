import "@/styles/globals.css";
import Footer from "@/components/footer";

import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar/navbar";


import Messanger from "@/components/messanger/messanger";
import { useEffect, useState } from "react";
import PageLoading from "@/components/pageLoading";




export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
 
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000)
  }, [])
  return (
    <RecoilRoot>
    {loading ? <PageLoading /> : (
        <main className="font-Noto">      
       
        <Navbar />
          <ToastContainer />
          
          <Messanger />
          <Component {...pageProps} />
          
        
        <Footer />
        
      </main>
    ) }
    </RecoilRoot>
    
  );
}
