"use client"
import React, { Component, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";
function Carousel({ children }) {
  let sliderRef = useRef()
  const Next = () => {
    sliderRef.slickNext()
  }
  const Previous = () => {
    sliderRef.slickPrev()
  }
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 4,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 2,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 468,
        settings: {
          className: "center",
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
    ]

  };
  return (
    <div className="slider-container relative mx-5 sm:mx-15 md:mx-20">
      <Slider ref={slider => { sliderRef = slider }} {...settings}>
        {children}
      </Slider>
      <div className=" absolute left-0 top-[45%]">
        <button className="rounded-[50%] h-17.75 w-17.75 z-10 bg-white items-center justify-center flex" onClick={Previous} ><MoveLeft className="ptextc" /></button>
      </div>
      <div className="absolute right-0 top-[45%]" >
        <button className="rounded-[50%] h-17.75 w-17.75 z-10 bg-white items-center justify-center flex" onClick={Next} ><MoveRight className="ptextc" /></button>
      </div>
    </div>
  );
}

export default Carousel;
