"use client";

import Image from "next/image";
import who_we_are from "../../../public/who_we_are.svg";
import who_we_are_sm from "../../../public/who_we_are_sm.svg";
import cars from "../../../public/car.png";
import { useEffect, useState } from "react";


export default function Page2() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', () => {
          setWindowWidth(window.innerWidth);
      })
  }, []);


  return (
    <div id="about" className="flex px-7 py-5 lg:px-14 lg:py-10 flex-col justify-around w-full lg:h-screen">
        
          <Image className="opacity-45 w-screen pt-20 pb-10 lg:pb-0" src={windowWidth > 750 ? who_we_are : who_we_are_sm}  alt="who we are" />
         
        <div className="flex flex-col items-center lg:flex-row  mt-10 lg:mt-0 h-full lg:h-2/3 ">
         
            <Image className="border-white w-full lg:w-1/2 h-2/3 border-2 object-cover" src={cars} alt="a few cars" />
            <p className="text-justify lg:text-justify pt-10 lg:pt-0 lg:pl-10 w-full lg:w-1/2 text-white font-sans font-light text-base lg:text-[1.3vw]" >Mystic Miles offers an unparalleled luxury car rental experience, blending an exclusive
fleet with exceptional service to redefine travel at every turn.
<br/><br/>Based out of Delhi, India. Mystic Miles was established with a clear vision: to deliver
unforgettable experiences in the world's most prestigious vehicles. Since our inception,
we've remained dedicated to exceeding expectations, ensuring that every moment with
Mystic Miles is nothing short of extraordinary.<br/><br/> Discover the art of luxury travel with Mystic Miles. Whether it's a special occasion or a
dream adventure, we invite you to embark on an extraordinary journey with us.

</p>
        </div>
    </div>
  );
}
