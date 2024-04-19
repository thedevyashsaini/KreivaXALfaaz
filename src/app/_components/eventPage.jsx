"use client";
import React from "react";
import Plx from "react-plx";
import "./eventPage.css";
import "./ui/TopNav.css";
import './gallery.css';
import Carousel from "./ui/slider";
import Image from 'next/image'
import eventTopFilm from "../../../public/EventTopFilm.svg";
import event1 from "../../../public/event1.jpg";
import event2 from "../../../public/event2.jpg";
import event3 from "../../../public/event3.jpg";
import event4 from "../../../public/event4.jpg";
import event5 from "../../../public/event5.jpg";
import event6 from "../../../public/event6.jpg";
import pipudi from "../../../public/pipudi.svg";



export default function EventPage() {
  const fluteParallaxData = [
    {
      start:"self",
      duration:600,
      properties: [
        {
          startValue: 0,
          endValue: -90,
          property: "rotate"
        }
      ]
    },
]

const fluteParallaxDataPC = [
  {
    start:"self",
    duration:2000,
    properties: [
      {
        startValue: 0,
        endValue: 100,
        unit:"vh",
        property: "translateY"
      }
    ]
  },
]
  return (
    <>
      <div className="flex flex-col relative overflow-hidden custom-scrollbar bg-customBlue z-0" style={{minHeight: "100vh"}} id="eventPage">
        {/* <div
          alt="texture"
          className="texture w-full h-full fixed top-0 left-0"
        /> */}
        <header className="mix-blend-multiply">
          <div className="nav w-1920" style={{ transform: "translate(0, -70px) rotate(-4.5deg)" }}>
            <Image
              width={1920}
              height={1080}
              className="navBack object-left w-full object-cover h-auto"
              src={eventTopFilm}
             alt={"Top film"}/>
          </div>
        </header>
        <div className="flex flex-col text-customPeach w-full px-12 md:px-28 -mt-24 md:-mt-48 text-lg md:text-xl z-1">
          <h1 className="text-6xl md:text-8xl pageTitle mb-4">Events</h1>
          <p>
            
            Join us at Kreiva-X-Alfaax, a vibrant celebration of culture and literature! Immerse yourself in a whirlwind of creativity and expression as we showcase the best of artistic talent. From strokes of brushes to captivating poetry readings, there's something for everyone. Don't miss out on the diverse range of activities organized by our clubs: Mod5, Shades, Obscura, Pensieve, Encore, Masquerade, Editorial. Mark your calendars for an unforgettable experience!
          </p>
          <br />
          <p>
            Here's the complete list of our events: Flashmob, Nukkad, Jamming, Nrityangana - Duet Dance Competition, Kirdaar - Duo act, Numaish - Nukkad natak, Cinemaghar - Stage play, Crescendo - Solo Music Competition, Nrityangana - Solo Dance Competition, Music Performance, Disney Delight - Art Competition, Pixel Palooza, Pixise - Photography Competition, Open Mic, Kavita Sangram - Poetry Competition.
          </p>
        </div>
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-1 md:gap-20 md:max-w-full gap-4 mx-auto w-3/4 max-w-960 mt-28 hidden md:grid">
          <Image width={200} height={200} src={event1} alt="Image 1" className="w-full h-auto" />
          <Image width={200} height={200} src={event2} alt="Image 2" className="w-full h-auto" />
          <Image width={200} height={200} src={event3} alt="Image 3" className="w-full h-auto" />
          <Image width={200} height={200} src={event4} alt="Image 4" className="w-full h-auto" />
          <Image width={200} height={200} src={event5} alt="Image 5" className="w-full h-auto" />
          <Image width={200} height={200} src={event6} alt="Image 6" className="w-full h-auto" />
        </div>
        <Carousel imageUrls={["event1.jpg","event2.jpg","event3.jpg","event4.jpg","event5.jpg","event6.jpg",]} cnames={["mt-24 z-1"]}/>
        <Plx parallaxData={fluteParallaxData} className="w-full absolute bottom-0 pipudi z-10">
          <Image
            width={300}
            height={300} src={pipudi} alt="pipudi" className="h-96 md:h-40 md:hidden mb-12"/>
        </Plx>

        <Plx parallaxData={fluteParallaxDataPC} className="w-full absolute left-0 top-400 pipudi hidden md:block z-10">
          <Image
            width={300}
            height={300} src={pipudi} alt="pipudi" className="h-96 md:h-40"/>
        </Plx>
        
      </div>
      <header className="h-64 overflow-hidden" style={{backgroundImage: "linear-gradient(#206569 25%, #FFE8A5 50%)"}}>
        <div className="nav w-1920 mix-blend-multiply" style={{ transform: "translate(0, 0) rotate(-4.5deg)" }}>
          <Image
            width={300}
            height={300}
            className="navBack object-left w-full object-cover h-auto"
            src={eventTopFilm}
            alt={"Top film"}
          />
        </div>
      </header>
    </>
  );
}
