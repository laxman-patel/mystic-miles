"use client";

import Image from "next/image";
import {useState} from "react";

export default function LoadMore({dataRes}) {
    const [shouldLoad, setShouldLoad] = useState(false);

    return <>
       {!shouldLoad && <button className="mt-24 mb-24 transition-all border-2 hover:bg-white hover:text-black text-white font-sans px-14 py-5 bg-black border-white" onClick={() => setShouldLoad(true)} >LOAD MORE</button>}
       {shouldLoad &&  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 pt-16 place-items-center" >
         {dataRes.map((item, _idx) => 
         <div className="flex flex-col items-center h-96 justify-around lg:w-2/3 border border-white hover:scale-105 hover:border-gold transition-all bg-white/5 px-5 py-10">
            <Image src={item[2]} className="max-h-64 grayscale" width={1000} height={1000} alt="" />
            <div className="flex flex-col items-center font-sans text-white">
              <h3 className="text-[3vw] lg:text-4xl font-light text-center">{item[0]}</h3>
              <p className="text-white/30">starting from ₹{item[1]}/km</p>
            </div>
          </div>
         )}
      </div>}
     </>
}