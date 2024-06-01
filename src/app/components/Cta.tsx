"use client";

import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import Link from "next/link";


export default function Cta() {

  return (<Link href="/book">
 <button  className="md:flex hidden items-center text-black bg-gold justify-between w-56 px-6 py-5 h-12 hover:bg-white transition">
    <p className={`font-sans tracking-wider text-[1.5vw] lg:text-sm`}>BOOK NOW</p>
    <Image className="w-4" src={arrow} alt="arrow" />
 </button>
  </Link>
  );
}
