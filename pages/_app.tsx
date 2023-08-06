import "@/styles/globals.css";
import Footer from "@/components/footer";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navbar/navbar";


import Messanger from "@/components/messanger/messanger";




export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <main className="font-Noto">      
      <RecoilRoot>
      <Navbar />
        <ToastContainer />
        
        <Messanger />
        <Component {...pageProps} />
        
      </RecoilRoot>
      <Footer />
      
    </main>
  );
}
