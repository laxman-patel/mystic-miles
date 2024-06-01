"use client";

import Image from "next/image";
import arrow from "../../../public/arrow.svg";
import Form from "@/pages/form";
import Link from "next/link";

export default function Cta2() {


  return (<Link href="/book">
 <button className="flex items-center text-black bg-gold justify-between w-56 px-6 py-5 h-14 hover:bg-white transition">
    <p className={`font-sans tracking-wider break-normal`}>BOOK NOW</p>
    <Image className="w-4" src={arrow} alt="arrow" />
 </button>

  </Link>
  );
}
