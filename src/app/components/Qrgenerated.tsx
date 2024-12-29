'use client'
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import Image from 'next/image';

interface urls  {
    url: string
}
  
export  function QrGenerated({url}: urls) {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    
    if (qrCodeRef.current) {
      html2canvas(qrCodeRef.current)
        .then((canvas) => {
          const dataURL = canvas.toDataURL();
          const link = document.createElement('a');
          link.href = dataURL;
          link.download = 'myqrcode.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error('Error al generar la imagen:', error);
        });
    }
    
  
  };
  const copyText = ()=>{
    navigator.clipboard.writeText(url)
  }
  return (
    <div className='flex flex-col w-full h-screen justify-center items-center '>
      <section  className=' bg-[#3662E3] p-6 rounded-full bg-opacity-20 ' >
      
      <div className=' bg-white p-6 rounded-3xl' ref={qrCodeRef} >
      <QRCode
      value={url}
      bgColor="#F2F5F9"
      fgColor="#111729"
      size={150} // Tamaño del código QR en píxeles
    />
      </div>
      </section> 
      <section className=' flex space-x-4  pt-10'>
        <button className=' hover:bg-opacity-20  flex items-center bg-[#3662E3] py-3 px-6 w-[150px] rounded-md ' onClick={handleDownload} >Download <span className=' ml-4 ' ><Image src={'/flecha-hacia-abajo.png'} alt={''} width={15} height={15} /> </span> </button>
        <button onClick={copyText} className=' hover:bg-opacity-20 justify-center flex items-center bg-[#3662E3] py-3 px-6 w-[150px] rounded-md ' >Share
        <span className=' ml-4' ><Image src={'/enlace.png'} alt={''} width={15} height={15} /> </span>
        </button>
      </section>  
  </div>
  );
}
