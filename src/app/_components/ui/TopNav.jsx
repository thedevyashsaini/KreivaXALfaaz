import React from "react";
import "./TopNav.css";

export default function TopNav() {
  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop,
      behavior: "smooth",
    });
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  };

  return (
    <header id="header" className="z-10">
      <div className="nav mix-blend-normal w-1920">
        <img
          className="navBack object-left w-full object-cover h-auto"
          src="NavbarReel.png"
        />
        <div
          className="navMenu flex justify-start absolute -rotate-3 -mt-10"
          style={{}}
        >
          <ul className="navMenuList ml-162 -mt-30 -translate-y-90">
            <a
              href="fa"
              className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52"
              goto="galleryPage"
              onClick={onBtnClick}
            >
              Gallery
            </a>
            <a
              href="fas"
              className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52"
              goto="eventPage"
              onClick={onBtnClick}
            >
              Events
            </a>
            <a
              href="fa"
              className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52"
            >
              Team
            </a>
            <a
              href="fa"
              className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52"
            >
              Merch
            </a>
            <a
              href="fa"
              className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52"
            >
              Tickets
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
