import Image from "next/image";
import logo from "../../public/logo.svg";
import insta from "../../public/instagram.svg";
import phone from "../../public/phone.svg";
import email from "../../public/email.svg";
import Link from "next/link";

export default function Footer() {
  return (
<div className="flex px-14 py-4 flex-col w-full justify-between items-center bg-white/5 border-t border-white">
    <div className="flex flex-col justify-evenly items-center h-52">
        <Image src={logo} alt="logo" className="w-44" />
        <div className="w-4 h-1 bg-white/20" ></div>
    </div>
    <ul className="flex flex-col lg:flex-row items-center text-xl justify-between text-white font-sans font-light w-full lg:px-96">
        <Link href="#hero" className="py-3 lg:py-0">home</Link>
        <Link href="#about"  className="py-3 lg:py-0" >who we are</Link>
        <Link href="#customers" className="py-3 lg:py-0" >catalogue</Link>
        <Link href="#catalog"  className="py-3 lg:py-0" >our customers</Link>
    </ul>
   <div className="flex justify-between items-center pt-20 pb-10 lg:w-1/5">
    <Image  src={email} alt="email" className="w-10 mr-5"  />
   <Link href="https://www.instagram.com/mystic.miles_/">
    <Image  src={insta} alt="instagram" className="w-10 mr-5" />
   </Link>
    <Image  src={phone} alt= "phone" className="w-10 mr-5" />
   </div>
</div>
  );
}
