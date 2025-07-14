import React from 'react'
import Insta from './assets/insta_logo_1.svg';
import Youtube from './assets/youtube_logo_1.svg';
import Location from './assets/location_logo_1.png';

function Footer() {
  return (
<div className="footerContainer text-center">
    <div className="queries flex flex-wrap justify-evenly p-2 ">
            <p className="m-1">Contact</p>
            <p className="m-1">FAQ</p>
            <p className="m-1">Terms & Conditions</p>
            <p className="m-1">Shipping & Returns</p>
            <p className="m-1">Privacy Policy</p>
    </div>
    <div className="medias flex justify-evenly">
     <img src={Insta} alt="" className="w-6" />
     <img src={Youtube} alt="" className="w-7" />
     <img src={Location} alt="" className="w-8" />   
    </div>
    <div className="details">  © {new Date().getFullYear()} Mithu's Gift & dj_r Codes. All rights reserved.</div>
</div>
)
}

export default Footer