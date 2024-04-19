'use client'
import React from "react";
import { useParallax } from 'react-scroll-parallax';
import TopNav from "./ui/TopNav";
import "./landingPage.css";
import Image from 'next/image'
import cloud from "../../../public/topcloud.png";
import leftCloud from "../../../public/image 8.png"
import rightCloud from "../../../public/image 10.png"
import heroImg from "../../../public/hero.gif"
import manTowerSun from "../../../public/ManTowerSun.svg"
import croppedTower from "../../../public/ManTowerSun_Cropped.svg"
import artist1 from "../../../public/artist1.jpg"
import artist2 from "../../../public/artist2.jpeg"
import artist3 from "../../../public/artist3.jpeg"
import artist4 from "../../../public/artist4.JPG"
import artist5 from "../../../public/artist5.jpg"

import Carousel from "./ui/slider";


export default function LandingPage() {
  const clouds = useParallax({translateY:['-10vh','80vh']});
  const hero = useParallax({translateY:['0vh','-60vh']} );
  const man = useParallax({translateY:['0vh','70vh']});
  const artists = useParallax({translateY:['0vh','-40vh']});
  // const artist = useParallax({speed:50})
  const man_cropped = useParallax({translateY:['-30vh','88vh']})

  return (
    <div className="flex flex-col setheight relative overflow-x-hidden custom-scrollbar landingBack overflow-y-hidden">
      <TopNav />
      <Image priority={true} height={300} width={300} src={cloud} alt="cloud"
             className="w-3/5 md:w-5/12 absolute top-0 right-0 md:right-10 translate-x-24 translate-y-24 z-1"/>
      <div ref={clouds.ref}  className="w-screen h-3/5 overflow-hidden md:overflow-visible relative z-1">
        <Image priority={true} height={300} width={300} src={leftCloud} alt="cloud"
               className="w-3/5 md:w-5/12 absolute top-40 md:top-20 left-0 -translate-x-24 md:-translate-x-10" />
        <Image priority={true} height={300} width={300} src={rightCloud} alt="cloud"
               className="w-3/5 md:w-5/12 absolute top-80 md:top-60 right-0 md:right-40 translate-x-24 md:translate-x-20" />
      </div>

      <Image priority={true} width={400} height={400} ref={hero.ref}  src={heroImg} alt="kreivaXalfaaz" className="flex flex-col w-11/12 md:w-6/12
         md:ml-40 absolute hidden md:flex top-72 left-0 right-0 items-center aspect-square z-10" style={{"pointer-events": "none"}}/>

      <div className="flex flex-col w-full md:w-9/12
         mx-auto absolute md:hidden top-72 left-0 right-0 items-center z-10" style={{"pointerEvents": "none", "marginLeft": "-2rem"}}>
        <Image priority={true} height={400} width={400} src="/hero.gif" alt="kreivaXalfaaz" />
      </div>
      <Image priority={true} width={100} height={100} ref={man.ref} src={manTowerSun} alt="manTowerSun" className="man absolute w-screen hidden md:block md:top-1200 top-1/3 z-1" />
      <Image priority={true} width={100} height={100} ref={man_cropped.ref}  src={croppedTower} alt="manTowerSun" className="absolute w-screen md:hidden top-32 md:top-0 z-1" />
      <h1 className="z-50 text-white text-center py-4 text-4xl font-bold block md:hidden">Our Artists</h1>
      <div ref={artists.ref} className="flex flex-row flex-nowrap 
      hidden md:flex md:flex-wrap item-center justify-center md:w-960 mx-auto z-20 absolute left-0 right-0 top-130" style={{maxWidth: "900px"}}>

        <div className="artists"><Image priority={true} width={200} height={200} src={artist1} alt="artst" /></div>
        <div className="artists"><Image priority={true} width={200} height={200} src={artist2} alt="artst" /></div>
        <div className="artists"><Image priority={true} width={200} height={200} src={artist3} alt="artst" /></div><br/>
        <div className="artists"><Image priority={true} width={200} height={200} src={artist4} alt="artst" /></div>
        <div className="artists"><Image priority={true} width={200} height={200} src={artist5} alt="artst" /></div>
      </div>

      {/* <div className="md:hidden  md:w-960 mx-auto z-20 absolute left-0 right-0 top-130">

</div> */}
      <Carousel imageUrls={["/artist1.jpg","/artist2.jpeg","/artist3.jpeg","/artist4.JPG","/artist5.jpg"]} />

    </div>
  );
}
