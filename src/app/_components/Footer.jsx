import './footer.css';
import Image from 'next/image'
import footer from '../../../public/footer-bg.svg'

export default function Footer() {
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
    <>
      <div className="body-footer display-center flex-col font-thin overflow-hidden absolute bottom-0 z-20">
        <div className="phone-baseline ">
          <div className="display-center phone-baseline flex-col text-center phone-text-left phone-pr-7 exs-p-2">
            <div className="w-full phone-max-w text-3xl ph-text-xl phone-leading-7 px-2 pb-2r">
              Indian  Institute  of   Information Technology Vadodara
            </div>
            <div className="w-full max-w-xl phone-max-w2 italic text-xs ph-text-sm px-2 pb-7 ">
              Disclaimer: This website is designed and developed by DOT - the design club and handeled by Academics Committee of IIIT Vadodara. All opinions shared through the post are that of the students of Academics Committee and not that of IIIT Vadodara.
            </div>
          </div>
          <div className="display-center phone-baseline flex-row phone-flex-col text-2xl ph-text-lg px-2">
            <div className="display-center">
              <div className="pr-7 phone-pr-7 exs-p-2">Links</div>
              <div className="flex justify-center flex-col phone-flex-row text-base ph-text-base gap-4 phone-gap-3">
                <a href="" goto="galleryPage" onClick={onBtnClick}>Gallery</a><a href="" goto="eventPage" onClick={onBtnClick}>Events</a><a href="">Team</a><a href="">Merch</a><a href="https://tickets.kreiva-x-alfaaz.co/" target="_blank">Tickets</a>
              </div>
            </div>
            <div className="display-center phone-baseline">
              <div className="px-7 exs-p-2">Contacts</div>
              <div className="flex justify-center flex-col text-base ph-text-base gap-4 phone-gap-2">
                <p>Email: <span className="opacity-70">academics_committee@iiitvadodara.ac.in</span></p>
                <p>Phone: <span className="opacity-70">+91-6367019081 +91-9314691164</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bg-container display-center phone-align-center absolute top-0 -z-10 mix-blend-multiply">
          <Image className=""
                 src={footer}
                 width = {2320}
                 height = {2320}
                 alt="loading please wait..."
          />
        </div>
      </div>
    </>
  );
}