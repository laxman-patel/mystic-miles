import Image from "next/image";
import catalogue from "../../../public/catalogue.svg";
import { getGoogleSheetData } from "../sheets";
import LoadMore from "./loadMore";

export default async function Page4() {
 
  const dataRes = await getGoogleSheetData(false) || [[]];
  dataRes.shift();

  const firstSix = dataRes.slice(0, 6);
  const rest = dataRes.slice(6);

  return (
    <div id="catalog" className="flex px-7 py-0 lg:px-14 lg:py-10 flex-col justify-between items-center w-full h-full">
      <Image className="opacity-45 w-full lg:w-2/3 lg:pt-20" src={catalogue} alt="catalogue" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 pt-16 place-items-center" >
         {firstSix.map((item, _idx) => 
         <div className="flex flex-col items-center h-80 lg:h-96 justify-around lg:w-2/3 border border-white hover:scale-105 hover:border-gold transition-all bg-white/5 px-5 py-10">
            <Image src={item[2]} className="max-h-64 grayscale" width={1000} height={1000} alt="" />
            <div className="flex flex-col items-center font-sans text-white">
              <h3 className="text-[6vw] lg:text-4xl font-light text-center">{item[0]}</h3>
              <p className="text-white/30">starting from ₹{item[1]}/km</p>
            </div>
          </div>
         )}
      </div>
      <LoadMore dataRes={rest} />
    </div>
  );
}
