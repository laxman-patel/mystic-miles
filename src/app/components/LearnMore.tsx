import Link from "next/link";

export default function LearnMore() {
  return (
    <Link href="#about" className="flex items-center border-2 h-full ml-9 border-white text-white  bg-black justify-center  py-2 px-10 hover:bg-white hover:text-black transition">
      <p className={`font-sans tracking-wider break-normal`}>LEARN MORE</p>    
    </Link>
  );
}
