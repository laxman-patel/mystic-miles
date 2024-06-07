"use client";

import {rische, helvetica} from "../app/fonts";
import "../app/globals.css";
import Menu from "../app/components/Menu";
import Footer from "./footer";
import Image from "next/image";
import pattern from "../../public/pattern-high.png";
import {useState, useEffect} from "react";
import tick from "../../public/tick.svg";
import { useRouter } from "next/router";

export default function BookingPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sheetData, setSheetData] = useState([]);
    const [model, setModel] = useState();
    const [modelImage, setModelImage] = useState('/placeholder_car.png');
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    
    const router = useRouter();

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/sheet");
            const data = await response.json();
         //   console.log(data);
            setSheetData(data);
        }

        fetchData();
    }, []);

    function onModelChange(modelValue) {
        setModel(modelValue);
       // console.log(modelValue);

        const modelData = sheetData.find((item) =>{
            return item[0] == modelValue;
        } 
    );

        setModelImage(modelData[2]);
    }

    function handleSubmit() {
        setIsSubmitting(true);
    
        const data = {
            carModel: model,
            contact: contact,
            name: name,
        };

        fetch("/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsSubmitting(false);
            }).then(() => {
                router.push("/thank");
            });
    }

    return <main className={ `${rische.variable} ${helvetica.variable} scroll-smooth flex min-h-screen flex-col items-center justify-between bg-black` }>
           <Menu />
            <h1 className="font-serif text-4xl lg:text-8xl text-white mt-48">
                book your rental
            </h1>
            <div className="bg-white w-3/4 border-2 lg:border-4 border-red lg:w-2/4 max-w-7xl my-10 flex justify-between h-fi mb-36">
                <div className="flex flex-col items-center justify-center w-full py-16">
                    <div className="flex flex-col items-center">
                        <Image src ={modelImage} alt="car" width="500" height="500" className="px-10" />
                        <select  onChange={(event) => {onModelChange(event.target.value)}} className="bg-white text-center font-sans mt-16 lg:mt-10 border-b-0 lg:border-b-0 w-full text-[4vw] lg:text-5xl border-black focus:outline-none placeholder-black/60" name="Model Name">
                            <option key={0}>Choose Model</option>
                          { sheetData.map((item) => <option key={sheetData.indexOf(item) + 1} value={item[0]}>{item[0]}</option>)
                          }
                        </select>
                    </div>
                    <div className="flex flex-col mt-12 justify-between h-24">
                            <input placeholder="your name" value={name} onChange={(e) => setName(e.target.value)} className="bg-white font-sans border-b-2 border-black/20 focus:border-red focus:outline-none" />
                            <input placeholder="contact number" value={contact} onChange={(e) => setContact(e.target.value)} className="bg-white font-sans border-b-2 border-black/20  focus:border-red focus:outline-none" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="bg-red mt-20 hover:bg-black transition-all flex items-center justify-between lg:w-1/3 tracking-wider hover:cursor-pointer font-sans text-sm max-w-44 text-white font-light px-5 py-3">
                        {isSubmitting ? <p>Processing...</p> : <>CONFIRM <Image className="w-4 hover:fill-red" src={tick} alt="tick" /></>}
                    </button>
                </div>
                <Image className="min-h-fit w-1/3 object-cover opacity-70 hidden lg:block" src={pattern} alt="pattern" />
            </div>
        <Footer />
    </main>
};