import Image from "next/image";
import rent from "../../public/rent.svg";
import Cta2 from "../app/components/Cta2";
import LearnMore from "../app/components/LearnMore";

export default function Page1() {
  return (
<div id="hero" className="flex  px-7 py-5 lg:px-14 lg:py-10 flex-col justify-between items-center w-full h-screen">
    <div className="flex flex-col relative items-center justify-center h-full">
     <Image className="opacity-45 w-screen" src={rent} alt="rent" />
     <h1 className="font-serif leading-10 absolute font-bold top-2/5 lg:top-2/4 text-white text-center text-[12vw]">the exquisite.</h1>
    </div>
    <div className="flex flex-col lg:flex-row justify-end w-full items-center">
            <Cta2/>
            <LearnMore/>
    </div>

</div>
  );
}
