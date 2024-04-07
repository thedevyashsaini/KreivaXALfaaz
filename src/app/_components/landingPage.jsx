import React from "react";
import "./topNav.css";
import Image from "next/image";
export default function LandingPage() {
  return (
    <div className="flex flex-col setheight relative overflow-x-hidden custom-scrollbar">
      <header id="header" className="">
        <div className="nav mix-blend-normal w-1920">
          <img className="navBack object-left w-full object-cover h-auto" src="NavbarReel.png" />
          <div className="navMenu flex justify-start absolute -rotate-3 -mt-10" style={{}}>
            <ul className="navMenuList ml-162 -mt-30 -translate-y-90">
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Gallery
              </a>
              <a href="fas" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                About
              </a>
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Sponsor
              </a>
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Loda
              </a>
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Lassun
              </a>
            </ul>
          </div>
        </div>
      </header>
  

      <div className="w-screen h-3/5 overflow-hidden md:overflow-visible relative z-0">
         <Image src="/topcloud.png" height={100} width={100} 
         className="h-1/3 w-3/5 md:w-1/3 md:h-4/5 absolute top-0 right-0 md:right-10 translate-x-24 md:-translate-y-24"/>
         <Image src="/image 8.png" height={100} width={100} 
         className="h-1/3 w-3/5 md:w-1/4 absolute top-40 md:top-20 left-0 -translate-x-24 md:translate-x-10 md:h-3/5" />
         <Image src="/image 10.png" height={100} width={100} 
         className="h-1/3 w-3/5 md:w-1/4 md:h-3/5 absolute top-80 md:top-60 right-0 md:right-40 translate-x-24 md:-translate-x-24" />
      </div>
      
      <div className="flex flex-col h-2/5 w-4/5 md:w-2/5 md:h-2/5
         mx-auto absolute top-72 marginleft  items-center">
        <Image src="/name.png" height={100} width={100} className="h-4 absolute right-10 md:w-1/5" />
        <Image src="/kreiva.png" height={100} width={100} className="w-11/12 md:w-3/5 -translate-x-4" />
        <Image src="/x.png" height={40} width={40} className="md:w-1/6 " />
        <Image src="/alfaaz.png" height={100} width={100} className="w-4/5 md:w-3/5 -translate-y-8" />
      </div>

      <Image src="/man.svg" width={100} height={100} 
      className="z-20 "/>

    </div>
  );
}
