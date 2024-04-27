"use client";

import Image from "next/image";
import pattern from "../../public/pattern.png";
import close from "../../public/close.svg";
import closeWhite from "../../public/close-white.svg";
import tick from "../../public/tick.svg";

import { useEffect, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { useModalStore } from "@/app/state";

export default function Form({dataRes}) {

    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [model, setModel] = useState();
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSubmitting,setIsSubmitting ] = useState(false);
  
    const isModalOpen = useModalStore((state) => state.isModalOpen);
    const closeModal = useModalStore((state) => state.closeModal);

    const [submit, submitting] = useFormspark({
      formId : "zRE6Sr5m4"
    })

    const onSubmit = async (e) => {
      setIsSubmitting(true)
      e.preventDefault();
      await submit({name, contact, model});
      setIsSubmitting(false);
      setIsSubmit(true);
    } 

    if(!isModalOpen) {
      return <> </>;
    }

    if(isSubmit) {
      return <> <> 
  <div onClick={closeModal} className="fixed right-0 h-full w-full bg-black/20 z-40 backdrop-blur-md"> </div>

  <div className="fixed flex flex-col items-center top-1/3 z-50 bg-white px-28 py-16">
    <div className="flex flex-col items-center">
        <h1 className="font-serif font-semibold text-8xl">Thank you</h1>
        <p className="font-sans font-light">You will be receiving call from us shortly.</p>
    </div>
        <button onClick={closeModal} className="bg-red mt-10 hover:bg-black transition-all flex items-center justify-between w-1/4 text-xltransition-all tracking-wider hover:cursor-pointer font-sans text-white font-light px-4 py-2" >CLOSE<Image className="w-4 hover:fill-red" src={closeWhite} alt="close" /></button>

    </div>
  </> </>;
    }

  return ( <> 
  <div onClick={closeModal} className="fixed right-0 h-full w-full bg-black/20 z-40 backdrop-blur-md"> </div>

  <div className="fixed py-16 flex flex-col justify-center lg:justify-between lg:block top-[18vh] lg:top-[3vh] w-full h-auto lg:top- mx-10 lg:w-2/3 z-50 bg-white overflow-scroll	  md:px-16 md:py-16 lg:px-28 lg:py-16 ">
         <div className="flex justify-center lg:justify-between items-center">
            <div>
                <h1 className="font-serif text-center lg:text-start font-semibold text-5xl  lg:text-8xl">Get in touch</h1>
                <p className="font-sans font-light text-black/50 text-[3vw] text-center lg:text-start lg:text-xl">Fill out following details to get a quote on your rental</p>
            </div>
            <div onClick={closeModal} className="h-14 w-14 hidden lg:flex cursor-pointer rounded-full justify-center items-center hover:bg-red transition-colors">
               <Image src={close} alt="close" />
            </div>
        </div>

        <div className="flex items-start lg:items-center h-[60vh] justify-center lg:justify-between mt-24  lg:mt-0">
            <Image className="object-cover hidden lg:block w-2/4" src={pattern} alt="pattern" />
            <form onSubmit={onSubmit} method="POST" className=" w-full flex flex-col items-center justify-between lg:pb-10 lg:pl-6">
                <div className="flex flex-col justify-center font-sans items-center">
                  <input name="Full name" className="bg-white text-[4vw] pt-0 lg:pt-16 lg:text-2xl border-b lg:border-b-2 border-black focus:outline-none placeholder-black/60" value={name} onChange={(event) => {setName(event.target.value)}} type="text" placeholder="Full name" />
                  <input name="Contact Number" className="bg-white pt-14 lg:pt-10 border-b lg:border-b-2 text-[4vw] lg:text-2xl border-black focus:outline-none placeholder-black/60"  value={contact} onChange={(event) => {setContact(event.target.value)}} type="tel" placeholder="Contact number" />
                  {/* <input name="Model name" className="bg-white pt-24 border-b-2 text-3xl border-black focus:outline-none placeholder-black/60"  value={model} onChange={(event) => {setModel(event.target.value)}} type="text" placeholder="Model name" /> */}
                  <select  onChange={(event) => {setModel(event.target.value)}} className="bg-white mt-16 lg:mt-10 border-b lg:border-b-2 w-full text-[4vw] lg:text-2xl border-black focus:outline-none placeholder-black/60" name="Model Name">
                   <option key={0}>Choose Model</option>
                    {dataRes.map((item) => <option key={dataRes.indexOf(item) + 1} value={item}>{item}</option>)}
                  </select>
                </div>
                <button disabled={submitting} type="submit" className="bg-red mt-20 hover:bg-black transition-all flex items-center justify-between lg:w-1/3 tracking-wider hover:cursor-pointer font-sans text-sm max-w-32 text-white font-light px-5 py-3">
                  {isSubmitting ? <p>Submitting...</p> : <>SUBMIT <Image className="w-1/6 hover:fill-red" src={tick} alt="tick" /></>}
                </button>
            </form>
        </div> 
  </div>
  </>
  );
}
