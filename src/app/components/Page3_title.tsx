'use client';

import Image from 'next/image';
import our_customers from '../../../public/our_customers.svg';
import our_customers_sm from '../../../public/our_customers_sm.svg';

import { useEffect, useState } from 'react';

export default function Page3_title() {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        })
    }, []);
  

    return <>
         <Image className="opacity-45 w-screen lg:pt-20" src={windowWidth > 750 ? our_customers : our_customers_sm} alt="our customers" />
    </>
}