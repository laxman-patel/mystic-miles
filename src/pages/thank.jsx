"use client";

import Menu from "../app/components/Menu";
import {rische, helvetica} from "../app/fonts";
import "../app/globals.css";
import closeWhite from "../../public/close-white.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ThanksPage() {
    const router = useRouter();

    function handleClose() {
        router.push("/");
    }

    return <main className={ `${rische.variable} ${helvetica.variable} scroll-smooth flex min-h-screen flex-col items-center justify-between bg-black` }>
    <Menu />
          <div className="fixed right-0 h-full w-full bg-black/20 z-40 backdrop-blur-md"> </div>

<div className="fixed flex flex-col items-center top-1/3 z-50 bg-white px-10 py-6 lg:px-28 lg:py-16">
  <div className="flex flex-col items-center">
      <h1 className="font-serif font-semibold text-6xl lg:text-8xl text-center">Thank you</h1>
      <p className="font-sans font-light text-center">You will be receiving call from us shortly.</p>
  </div>
      <button onClick={handleClose} className="bg-red mt-10 hover:bg-black min-w-28 transition-all flex items-center justify-between  lg:w-1/4 text-xltransition-all tracking-wider hover:cursor-pointer font-sans text-white font-light px-4 py-2" >CLOSE<Image className="w-4 hover:fill-red" src={closeWhite} alt="close" /></button>

  </div>
    </main>
    
}