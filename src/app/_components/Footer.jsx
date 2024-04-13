import './footer.css';
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className="body-footer display-center flex-col font-thin overflow-hidden absolute bottom-0 z-20">
                <div className="phone-baseline ">
                    <div className="display-center phone-baseline flex-col text-center phone-text-left phone-pr-7 exs-p-2">
                        <div className="w-full phone-max-w text-3xl ph-text-xl phone-leading-7 px-2 pb-2r">
                        Indian  Institute  of   Information Technology Vadodara
                        </div>
                        <div className="w-full max-w-xl phone-max-w2 italic text-xs ph-text-sm px-2 pb-7 ">
                        Disclaimer: This website is built and handled by the cultural committee of IIIT Vadodara. All opinions shared through the post are that of the students of Cultural Committee and not that of IIIT Vadodara.
                        </div>
                    </div>
                    <div className="display-center phone-baseline flex-row phone-flex-col text-2xl ph-text-lg px-2">
                        <div className="display-center">
                            <div className="pr-7 phone-pr-7 exs-p-2">Links</div>
                            <div className="flex justify-center flex-col phone-flex-row text-base ph-text-base gap-4 phone-gap-3">
                                <a href="">Home</a><a href="">Event</a><a href="">Members</a><a href="">Institute Site</a>
                            </div>
                        </div>
                        <div className="display-center phone-baseline">
                            <div className="px-7 exs-p-2">Contacts</div>
                            <div className="flex justify-center flex-col text-base ph-text-base gap-4 phone-gap-2">
                                <p>Email: <span className="opacity-70">cultural_sec@iiitvadodara.ac.in</span></p>
                                <p>Phone: <span className="opacity-70">+91-7821905696 +91-8209270352 +91-9009429181</span></p>
                                <p className=" w-full max-w-md">Address: <span className="opacity-70">c/o Block No.9, Government Engineering College Campus, Sector-28, Gandhinagar, Gujarat - 382028</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bg-container display-center phone-align-center absolute top-0 -z-10 mix-blend-multiply">
                    <Image className=""
                        src="./footer-bg.svg"
                        width = {2320}
                        height = {2320}
                        alt="loading please wait..."
                    />
                <div
                    alt="texture"
                    className="texture absolute bottom-0 -z-10 mix-blend-multiply"
                    style={{width: "100%", height: "100%"}}
                />
                </div>
            </div>
        </>
    );
}