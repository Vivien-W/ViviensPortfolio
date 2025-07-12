import { useEffect, useState } from "react";
import logo from "../assets/images/logo.gif";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Willkommen auf meiner Portfolio-Website.../>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white text-black flex flex-col items-center justify-center">
      {/*<div className="mb-4 text-3xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div> */}
      <p className="text-stone-600 font-bold mb-8">Portfolio Loading...</p>

      

      {/* Lade-Kreis */}
    <div className="w-13 h-13 border-4 border-stone-800 border-t-transparent rounded-full animate-spin"></div>

      {/* Hier Loading-Screen- GIF einfügen 
      <img src={logo} alt="Loading Screen" className="w-48 h-48 object-contain"/> */}
      
     {/* Alternative: blauer Ladebalken:  */} 
   {/*   <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-cyan-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>* */} 
      

      
    </div>
  );
};