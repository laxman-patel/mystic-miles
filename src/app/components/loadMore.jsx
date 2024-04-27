"use client";

import Image from "next/image";
import {useState} from "react";

export default function LoadMore({dataRes}) {
    const [shouldLoad, setShouldLoad] = useState(false);

    return <>
       {!shouldLoad && <button className="mt-24 mb-24 transition-all border-2 hover:bg-white hover:text-black text-white font-sans px-14 py-5 bg-black border-white" onClick={() => setShouldLoad(true)} >LOAD MORE</button>}
       {shouldLoad &&  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 py-16 place-items-center" >
       {dataRes.map((item, _idx) => 
         <div className="flex flex-col items-center max-h-72 lg:max-h-96 lg:h-96 justify-around max-w-80  lg:max-w-96  border border-white hover:scale-105 hover:border-gold transition-all bg-white/5 px-5 py-10">
            <Image src={item[2]} className="max-h-40 max-w-64 lg:max-w-full lg:max-h-96 grayscale object-fill" width={1000} height={1000} alt="" />
            <div className="flex flex-col items-center font-sans text-white">
              <h3 className="text-xl lg:text-4xl mt-3 font-light text-center">{item[0]}</h3>
              <p className="text-white/30">starting from ₹{item[1]}</p>
            </div>
          </div>
         )}
      </div>}
     </>
}