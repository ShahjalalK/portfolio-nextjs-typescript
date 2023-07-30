import Footer from "@/components/footer";
import Messanger from "@/components/messanger/messanger";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <main className="font-Noto">
      <Navbar />
      <RecoilRoot>
        <ToastContainer />
        <Messanger />
        <Component {...pageProps} />
        
      </RecoilRoot>
      <Footer />
      
    </main>
  );
}
