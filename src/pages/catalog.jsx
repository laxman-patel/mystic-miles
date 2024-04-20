import Image from "next/image";
import catalogue from "../../public/catalogue.svg";
import { getGoogleSheetData } from "../app/sheets";
import {rische, helvetica} from "../app/fonts";

export default function Catalog({dataRes}) {
 
  return (
    <main className={ `${rische.variable} ${helvetica.variable} scroll-smooth flex min-h-screen flex-col items-center justify-between bg-black` }> 
    <div id="catalog" className="flex px-14 py-24 flex-col justify-between items-center w-full h-full">
      <Image className="opacity-45 w-2/3 pt-20" src={catalogue} alt="catalogue" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 pt-16 place-items-center" >
         {dataRes.map((item, _idx) => 
         <div className="flex flex-col items-center h-96 justify-around lg:w-2/3 border border-white hover:scale-105 hover:border-gold transition-all bg-white/5 px-5 py-10">
            <Image src={item[2]} className="max-h-64 grayscale" width={1000} height={1000} alt="" />
            <div className="flex flex-col items-center font-sans text-white">
              <h3 className="text-[3vw] lg:text-4xl font-light text-center">{item[0]}</h3>
              <p className="text-white/30">starting from ₹{item[1]}/km</p>
            </div>
          </div>
         )}
      </div>
    </div>
    </main>

  );
}

export async function getServerSideProps() {
    const dataRes = await getGoogleSheetData(false) || [[]];
    dataRes.shift();
  
    return {
      props: {
        dataRes: dataRes
      }
    }
  }