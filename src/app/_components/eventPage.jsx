"use client";
import React from "react";
import Plx from "react-plx";
import "./eventPage.css";
import "./ui/TopNav.css";
import Carousel from "./ui/slider";

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
      <div className="flex flex-col relative overflow-x-hidden custom-scrollbar bg-customBlue z-0" style={{minHeight: "100vh"}}>
        <div
          alt="texture"
          className="texture w-full h-full fixed top-0 left-0"
        />
        <header className="mix-blend-multiply">
          <div className="nav w-1920" style={{ transform: "translate(0, -70px) rotate(-4.5deg)" }}>
            <img
              className="navBack object-left w-full object-cover h-auto"
              src="EventTopFilm.svg"
            />
          </div>
        </header>
        <div className="flex flex-col text-customPeach w-full px-12 md:px-28 -mt-24 md:-mt-48 text-lg md:text-xl z-1">
          <h1 className="text-6xl md:text-8xl pageTitle mb-4">Events</h1>
          <p>
            Kreiva is the annual cultural festival of Indian Institute of
            Information Technology, Vadodara. Kreiva serves as a platform for
            students to show their talents in performing arts and aesthetic
            arts, where students can collaborate and team up with other students
            to bring out the best in them.The Annual Cultural Festival of IIIT
            Vadodara gets its name from the Esperanto word "Kreiva", meaning
            "Creativity".
          </p>
          <br />
          <p>
            Since its inception in 2016 as an intra-institute fest in 2016, it
            has consistently been a huge platform for individuals to showcase
            their talents. A spectacular extravaganza, Kreiva is home to
            expression through art, music, drama, dance and culture.
          </p>
          <br />
          <p>Join us to celebrate creativity, join us, to celebrate Kreiva!</p>
        </div>
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 z-1 md:gap-20 md:max-w-full gap-4 mx-auto w-3/4 max-w-960 mt-28 hidden md:grid">
          <img src="Group 15.svg" alt="Image 1" className="w-full h-auto" />
          <img src="Group 16.svg" alt="Image 2" className="w-full h-auto" />
          <img src="Group 17.svg" alt="Image 3" className="w-full h-auto" />
          <img src="Group 18.svg" alt="Image 4" className="w-full h-auto" />
          <img src="Group 19.svg" alt="Image 5" className="w-full h-auto" />
          <img src="Group 20.svg" alt="Image 6" className="w-full h-auto" />
        </div>
        <Carousel imageUrls={["a","b","c","d","e","f"]} cnames={["mt-24 z-1"]}/>
        <Plx parallaxData={fluteParallaxData} className="w-full absolute bottom-0  z-10">
          <img src="pipudi.svg" alt="pipudi" className="h-96 md:h-40 md:hidden"/>
        </Plx>

        <Plx parallaxData={fluteParallaxDataPC} className="w-full absolute left-0 top-400 hidden md:block z-10">
          <img src="pipudi.svg" alt="pipudi" className="h-96 md:h-40"/>
        </Plx>
        
      </div>
    </>
  );
}
