'use client'
import React, { useState } from "react";
import { QrGenerated } from "./components/Qrgenerated";
import Image from "next/image";

export default function Home(url: string) {
  const [valorInput, setValorInput] = useState("");
  const [inputUrl, setInputUrl] = useState(false);


  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputUrl(true)
  };

  const handledChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValorInput(e.target.value);
  };
 

  return (
    <>
      <main className="flex flex-col w-full h-screen justify-center items-center  bg-[url('/bg-illustration.svg')] bg-no-repeat bg-[300px] md:bg-right ">
      <header className={`${inputUrl ? ' w-full py-9 pl-12 ' : 'mb-8   '} `}  >
            <figure className="  cursor-pointer "    onClick={()=>setInputUrl(false)} >
              <Image src={"/logo-qr-generator.svg"} alt={"logo de qr generate"} width={200} height={200} className={`${inputUrl ? 'w-[100px]' : '  '} `}  />
            </figure>
           </header>
       { !inputUrl ? (
          <>  
               <form action="" onSubmit={handleSubmit} className="flex border border-[#3662E3] p-2 bg-[#111729] rounded-2xl pl-4 justify-between  w-[500px] space-x-2  " >
                 <input
                   required
                   onChange={handledChange}
                   className=" bg-transparent appearance-none focus:outline-none w-full  "
                   type="text"
                   aria-label="ingresar la url"
                   placeholder="Enter on url"
                 />
                 <button className=" py-2 px-4 bg-[#3662E3] rounded-xl w-[120px] ">
                   QR code
                 </button>
               </form>
             
             </>
       ) : (
        <QrGenerated url={valorInput} />
       ) }
     
       
       
      </main>
    </>
  );
}
