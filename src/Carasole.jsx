import React,{ Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./App.css";


function Carasole({data, name}) {
 const settings = {
 className: "center",
  centerMode: true,
  infinite: true,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  cssEase: "ease-in-out",
  swipeToSlide: true,         
  draggable: true,             
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

  
  return (
    <>
    <div className="newArrivals p-2">
      <h1 className="text-2xl p-2 font-bold">{name}</h1>
    </div>
    <div className="overflow-hidden h-[300px]">
      <div className="image_container ">
       <Slider {...settings} >
        {data.map((item, index) => {
          return (
            <div className="" key={index}>
              <div className="w-60 h-50 object-contain">
                <img src={item.Image} alt="" className="w-full h-full rounded-lg"/>
              </div>
              <div className="">
                <p className="font-bold text-xl p-0.5 text-white">{item.title}</p>
                <p className="font-bold text-xs p-0.5 ml-0.5 underline text-black">Know More</p>
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
