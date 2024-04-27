import Image from "next/image";
import our_customers from "../../../public/our_customers.svg";
import { getGoogleSheetData } from "../sheets";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Carasouel from "@/app/components/Carasouel";
import Page3_title from "./Page3_title";

export const getStaticProps = (async () => {
  const dataRes = await getGoogleSheetData(true) || [[]];
  dataRes.shift();

  return {props: {dataRes}};
}) satisfies GetStaticProps<{dataRes: Array<Array<[string, string]>>}>;

export default async function Page3() {
 
  const dataRes = await getGoogleSheetData(true) || [[]];
  dataRes.shift();

  return (
    <div id="customers" className="flex px-7 py-16 lg:px-14 lg:py-10 flex-col justify-between w-full lg:h-full">
      <Page3_title />
      <Carasouel dataRes={dataRes} />
    </div>
  );
}
        
