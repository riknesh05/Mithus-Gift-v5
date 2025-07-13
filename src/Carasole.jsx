import React,{ Component } from "react";
import im1 from "./assets/items/1.png";
import im2 from "./assets/items/2.png";
import im3 from "./assets/items/3.png";
import im4 from "./assets/items/4.png";
import im5 from "./assets/items/5.png";
import im6 from "./assets/items/6.png";
import im7 from "./assets/items/7.png";
import im8 from "./assets/items/8.png";
import im9 from "./assets/items/9.png";
import im10 from "./assets/items/10.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";


function Carasole() {
 const settings = {
 className: "center",
  centerMode: true,
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  cssEase: "ease-in-out",
  swipeToSlide: true,          // ✅ ALLOWS fluid slide following swipe
  draggable: true,             // ✅ Enables mouse drag on desktop
  touchThreshold: 10,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll:7,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,  //mobi portrait
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      Image: im1,
      title: "Posters",
    },
    {
      Image: im2,
      title: "Thread Arts",
    },
    {
      Image: im3,
      title: "Resin Arts",
    },
    {
      Image: im4,
      title: "Key Chains",
    },
    {
      Image: im5,
      title: "Preservations",
    },
    {
      Image: im6,
      title: "Wood Arts",
    },
    {
      Image: im7,
      title: "Photo frames",
    },
    {
      Image: im8,
      title: "Gift Boxes",
    },
    {
      Image: im9,
      title: "Cards",
    },
    {
      Image: im10,
      title: "Decotations",
    },
  ];
  return (
    <>
    <div className="newArrivals p-2">
      <h1 className="text-2xl p-2 font-bold">New Arrivals</h1>
    </div>
    <div className="overflow-hidden h-[300px]">
      <div className="image_container ">
       <Slider {...settings} >
        {data.map((item, index) => {
          return (
            <div className="" key={index}>
              <div className="w-60 h-50 object-contain">
                <img src={item.Image} alt="" className="w-full h-full"/>
              </div>
              <div className="">
                <p className="font-bold text-xl p-0.5">{item.title}</p>
              </div>
            </div>
          );
        })}</Slider>
      </div>
    </div>
    </>
  );
}

export default Carasole;
