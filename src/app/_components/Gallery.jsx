import './gallery.css';
import Footer from './Footer.jsx'
import Image from 'next/image'

export default function Gallery() {
    return (
        <>
            <div className="body-gallery flex items-center phone-baseline relative flex-col overflow-hidden">
                <h1 className="text-red-700 text-8xl py-8 px-10 ph-text-5xl tracking-tighter translate-y-14 -ms-translate-y-6">Gallery</h1>
                <div className="gallery-display flex flex-wrap justify-center max-w-5xl max-h-3xl py-10 gap-20 overflow-scroll scroll-smooth">
                    <div className="gallery-card -translate-y-7 -md-translate-y-7 -rotate-2">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card rotate-2">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card -translate-y-8 -md-translate-y-8 rotate-2">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card -translate-y-7 -md-translate-y-7 rotate-7">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card rotate-3">
                        <img src="#" alt="random"/>
                    </div>
                    <div className="gallery-card -translate-y-8 -md-translate-y-8 -rotate-6">
                        <img src="#" alt="random"/>
                    </div>
                </div>
                <Footer />
                <Image className="music-element absolute -rotate-6 z-30"
                    src="/music-gR.svg"
                    width = {180}
                    height = {180}
                    alt="music"
                />
                <Image className="gitar-element absolute z-30"
                    src="/gitar-fL.svg"
                    width = {340}
                    height = {340}
                    alt="gitar"
                />
                <Image className="baloon-element absolute z-30"
                    src="/gitar-baloon-fR.svg"
                    width = {310}
                    height = {310}
                    alt="gitar with baloon"
                />
            </div>
        </>
    );
}