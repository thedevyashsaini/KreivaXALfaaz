"use client";
import React, { useState } from "react";
import "../landingPage.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

function Carousel({ imageUrls, cnames }) {

  var $ = require("jquery");
  if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }

  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    loop: true,
    mmargin: 20,
    center: true,
    responsiveClass: true,
    nav: false,
    dotsEach: 1,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  };

  return (
    <div className={"w-10/12 mx-auto block md:hidden " + (cnames ? cnames.join(" ") : "")}>
      <OwlCarousel className="owl-theme" {...options}>
      {imageUrls.map((imageUrl, index) => (
          <div key={index} className="item" style={{ backgroundImage: `url(${imageUrl})` }}>
            {/* <img src={imageUrl} alt={`Slide ${index + 1}`} /> */}
          </div>
        ))}
      </OwlCarousel>
      ;
    </div>
  );
}

export default Carousel;
