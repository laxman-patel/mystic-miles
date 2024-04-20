import Image from "next/image";
import who_we_are from "../../../public/who_we_are.svg";
import cars from "../../../public/car.png";


export default function Page2() {
  return (
    <div id="about" className="flex px-14 py-10 flex-col justify-around w-full h-screen">
        <Image className="opacity-45 w-screen pt-20" src={who_we_are} alt="who we are" />
        <div className="flex pt-16">
            <Image className="w-1/2 border-white border-2 object-cover" src={cars} alt="a few cars" />
            <p className="text-justify pl-10 text-white font-sans font-light text-[1.5vw]" >Mystic Miles offers an unparalleled luxury car rental experience, blending an exclusive
fleet with exceptional service to redefine travel at every turn.
<br/><br/>Based out of Delhi, India. Mystic Miles was established with a clear vision: to deliver
unforgettable experiences in the world's most prestigious vehicles. Since our inception,
we've remained dedicated to exceeding expectations, ensuring that every moment with
Mystic Miles is nothing short of extraordinary.<br/><br/> Discover the art of luxury travel with Mystic Miles. Whether it's a special occasion or a
dream adventure, we invite you to embark on an extraordinary journey with us.

</p>
        </div>
    </div>
  );
}
