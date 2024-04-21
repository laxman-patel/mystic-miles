import Link from "next/link";

export default function LearnMore() {
  return (
    <Link href="#about" className="flex items-center mt-8 lg:mt-0 lg:border-2 h-full lg:ml-9 border-white text-white  bg-black justify-center  py-2 px-10 hover:bg-white hover:text-black transition">
      <p className={`font-sans tracking-wider break-normal underline lg:no-underline`}>LEARN MORE</p>    
    </Link>
  );
}
