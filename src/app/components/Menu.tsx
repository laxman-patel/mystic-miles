"use client";

import Image from "next/image";
import logo from "../../../public/logo.svg";
import hamBurger from "../../../public/hamburger.svg";
import Cta from "./Cta";
import {useState, useEffect} from "react";
import logoLight from "../../../public/logo_light.svg"
import close from "../../../public/close.svg";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Menu() {

  const [isOpen, setIsOpen] = useState(false);
  const [showCta, setShowCta] = useState(false);

  const handleScroll = () => {
    
    if(window.scrollY > 500) {
      setShowCta(true);
    } else {
      setShowCta(false);
    }
  }

  useEffect(() => {
    window.addEventListener(
    'scroll', handleScroll, {passive:true}
    )
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }}
,[]);

//   return !isOpen ? ( 
//   <div className="fixed px-5 py-3 lg:px-10 lg:py-6 bg-black z-30 flex justify-between w-full  items-center border-b border-white border-opacity-50">
// <div className="h-10 w-10 relative hover:cursor-pointer" onClick={()=>setIsOpen(true)}>
//     <Image className="absolute left-1/4 top-1/4" priority src={hamBurger} alt="hamBurger" />
// </div>
//  <div className="pr-4 flex w-full justify-center">
//     <Image className="w-28" priority src={logo} alt="logo"/>

//  </div>
//     {showCta?  <Cta />: <div></div> }
//  </div>
// ):(
return <>
   <div className="fixed px-5 py-3 lg:px-10 lg:py-6 bg-black z-30 flex justify-between w-full  items-center border-b border-white border-opacity-50">
<div className="h-10 w-10 relative hover:cursor-pointer" onClick={()=>setIsOpen(true)}>
   <Image className="absolute left-1/4 top-1/4" priority src={hamBurger} alt="hamBurger" />
,</div>

<Link href="/">
 <div className="pr-4 flex w-full justify-center">
    <Image className="w-28" priority src={logo} alt="logo"/>
 </div>
</Link>
    {showCta?  <Cta />: <div></div> }
 </div>
  <div className="fixed bg-black px-5 py-3 lg:px-10 lg:py-6 flex justify-between w-full items-center border-b ll border-white border-opacity-50">
    <Image  priority onClick={()=>setIsOpen(true)} src={hamBurger} alt="hamBurger" />

    <Image className="w-28 absolute right-1/2 " priority src={logo} alt="logo"/>
    {showCta?  <Cta />: <div></div> }
  </div>
<motion.div style={{display: isOpen ? "" : "none"}} onTransitionEnd={() => {}} animate={{x:isOpen ? 0 : -900}} transition={{type:"spring", damping: 24, stiffness: 150}} className="bg-white z-50 justify-around flex flex-col py-24 items-center fixed left-0 h-screen w-full lg:w-1/3">
    <Image className="absolute top-10 right-20 cursor-pointer" src={close} onClick={()=> setIsOpen(false)} alt="close"/>
    <Image src={logoLight} alt="logo"/>
   <ul className="flex flex-col items-center text-3xl font-serif h-3/6 justify-between">
    <Link onClick={() => setIsOpen(false)} href="#hero"><li  className="hover:border-gold hover:border-b-2  border-white border-b-2">home</li></Link> 
    <Link onClick={() => setIsOpen(false)} href="#about"> <li  className="hover:border-gold hover:border-b-2  border-white border-b-2">who we are</li> </Link>
    <Link onClick={() => setIsOpen(false)} href="#customers"> <li  className="hover:border-gold hover:border-b-2  border-white border-b-2">our customers</li> </Link>
    <Link onClick={() => setIsOpen(false)} href="#catalog"> <li  className="hover:border-gold hover:border-b-2  border-white border-b-2">catalogue</li> </Link>
   </ul>
  </motion.div>
  <motion.div style={{display: isOpen ? "" : "none"}} animate={{opacity: isOpen? 1:0}} transition={{type:"spring", damping: 5, stiffness: 40}} onClick={() => setIsOpen(false)} className=" lg:fixed right-0 h-full w-2/3 bg-black/20 z-50 backdrop-blur-md">
  </motion.div>

</>
  ;
}
