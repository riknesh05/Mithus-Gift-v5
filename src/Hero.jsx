import React from "react";
import bgImg from "./assets/hero_img_1.jpeg"
import bgImgM from "./assets/gifting.jpg"

function Hero() {
  return (
    <div>
      <div className="hero_img_main relative">
        <img src={bgImg} alt="" className="md:h-screen md:w-screen md:block hidden" />
        <img src={bgImgM} alt="" className="h-screen w-screen object-cover md:hidden" />
         <div className="absolute flex flex-col items-center justify-center inset-0 pt-15 font-ds bg-black/50 "> {/* backdrop-blur-xs */}
          <p className=" font-extrabold text-white text-5xl">Mithu's Gift</p>
          <p className=" font-extrabold text-white text-lg">Make your ocassion memorable with us</p>
          <button className="font-extrabold text-white text-sm bg-blue-400 p-2 rounded-md mt-0.5">Shop Now</button>
        </div>
       
      </div>
    </div>
  );
}

export default Hero;
