'use client'
import React from "react";
import { useParallax } from 'react-scroll-parallax';
import TopNav from "./ui/TopNav";
import "./landingPage.css";
import Carousel from "./ui/slider";

export default function LandingPage() {
  const clouds = useParallax({translateY:['-10vh','80vh']});
  const hero = useParallax({translateY:['0vh','-60vh']} );
  const man = useParallax({translateY:['0vh','70vh']});
  const artists = useParallax({translateY:['0vh','-40vh']});
  const man_cropped = useParallax({translateY:['-30vh','88vh']})

  return (
    <div className="flex flex-col setheight relative overflow-x-hidden custom-scrollbar landingBack overflow-y-hidden">
      <TopNav />
       <img src="/topcloud.png" alt="cloud"
         className="w-3/5 md:w-5/12 absolute top-0 right-0 md:right-10 translate-x-24 translate-y-24 z-1"/>
      <div ref={clouds.ref}  className="w-screen h-3/5 overflow-hidden md:overflow-visible relative z-1">
         <img src="/image 8.png" alt="cloud"
         className="w-3/5 md:w-5/12 absolute top-40 md:top-20 left-0 -translate-x-24 md:-translate-x-10" />
         <img src="/image 10.png" alt="cloud"
         className="w-3/5 md:w-5/12 absolute top-80 md:top-60 right-0 md:right-40 translate-x-24 md:translate-x-20" />
      </div>
      
      <img ref={hero.ref}  src="/hero.gif" alt="kreivaXalfaaz" className="flex flex-col w-12/12 md:w-6/12
         ml-40 absolute hidden md:flex top-72 left-0 right-0 items-center aspect-square z-10"/>

      <div className="flex flex-col w-9/12 md:w-5/12
         mx-auto absolute md:hidden top-72 left-0 right-0 items-center aspect-square z-10">
        <img src="/hero.gif" alt="kreivaXalfaaz" />
      </div>

     <img ref={man.ref} src="ManTowerSun.svg" alt="manTowerSun" className="man absolute w-screen hidden md:block md:top-1200 top-1/3 z-1" />
     <img ref={man_cropped.ref}  src="ManTowerSun_Cropped.svg" alt="manTowerSun" className="absolute w-screen md:hidden top-32 md:top-0 z-1" />
       
      <div ref={artists.ref} className="flex flex-row flex-nowrap 
      hidden md:flex md:flex-wrap item-center justify-center md:w-960 mx-auto z-20 absolute left-0 right-0 top-130">
        <div className="artists"></div>
        <div className="artists"></div>
        <div className="artists"></div>
        <div className="artists"></div>
        <div className="artists"></div>
        <div className="artists"></div>
        <div className="artists"></div>
      </div>

      {/* <div className="md:hidden  md:w-960 mx-auto z-20 absolute left-0 right-0 top-130">
       
      </div> */}
      <Carousel imageUrls={["a","b","c","d","e","f","g"]} />

    </div>
  );
}
