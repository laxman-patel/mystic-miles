"use client";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Image from "next/image";

export default function Carasouel({dataRes}) {

    let perPage = 1;
    
    if (window.innerWidth >= 1200) {
        perPage = 3;
    } else if (window.innerWidth >= 768) {
        perPage = 2;
    } else {
        perPage = 1;
    }

    return <div className='pt-16 lg:pt-32'>
    <Splide  options= {{rewind:true,gap: "5rem", perPage: perPage, focus: 'center', pagination :false, start: 1, arrows: false,interval:"2500" , autoplay: true, type: "loop"}} aria-label="Customer carasouel" >
        {dataRes.map((item, idx) =>
        <SplideSlide className=" border-2 border-white" key={idx}>
            <div className='flex flex-col h-full w-full'>
                <Image src={item[1]} width='1000' height='1000' className="h-full object-cover" alt={item[0]} />
                <p className='bg-black font-serif font-medium absolute text-2xl lg:text-[2.3vw] py-5 bottom-0 w-full text-center text-white'>{item[0]}</p>
            </div>
        </SplideSlide>
        
        )}     
    </Splide>
    </div>
}