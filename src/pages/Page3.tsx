import Image from "next/image";
import our_customers from "../../public/our_customers.svg";
import { getGoogleSheetData } from "../app/sheets";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Carasouel from "@/app/components/Carasouel";

export const getStaticProps = (async () => {
  const dataRes = await getGoogleSheetData(true) || [[]];
  dataRes.shift();

  return {props: {dataRes}};
}) satisfies GetStaticProps<{dataRes: Array<Array<[string, string]>>}>;

export default async function Page3() {
 
  const dataRes = await getGoogleSheetData(true) || [[]];
  dataRes.shift();

  return (
    <div id="customers" className="flex px-7 py-28 lg:px-14 lg:py-10 flex-col justify-between w-full h-full">
      <Image className="opacity-45 w-screen pt-20" src={our_customers} alt="our customers" />
      <Carasouel dataRes={dataRes} />
    </div>
  );
}
        
