"use client";

import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import Form from "@/pages/form";
import { useState } from "react";
import { useModalStore } from "../state";

export default function Cta2() {

  const openModal = useModalStore((state: any) => state.openModal);

  return (<>
 <button onClick={openModal} className="flex items-center text-black bg-gold justify-between w-56 px-6 py-5 h-14 hover:bg-white transition">
    <p className={`font-sans tracking-wider break-normal`}>GET IN TOUCH</p>
    <Image className="w-4" src={arrow} alt="arrow" />
 </button>

  </>
  );
}
