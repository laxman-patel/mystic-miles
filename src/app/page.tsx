import Menu from "./components/Menu";
import {rische, helvetica} from "./fonts";
import Page1 from "../pages/Page1";
import Page4 from "./components/Page4";
import Page2 from "./components/Page2";
import Page3 from "../pages/Page3";
import Footer from "../pages/footer";
import Form from "../pages/form";
import { getGoogleSheetData } from "./sheets";


export default async function Home() {

  let dataRes = await getGoogleSheetData(false) || [[]];
  dataRes.shift();
  dataRes = dataRes.map((carInfo: Array<Array<String>>) => carInfo[0]);

  return (
    <main className={ `${rische.variable} ${helvetica.variable} scroll-smooth flex min-h-screen flex-col items-center justify-between bg-black` }>
      <Menu/>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
      <Form dataRes={dataRes} />
    </main>
  );
}

