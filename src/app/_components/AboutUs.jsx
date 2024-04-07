import './aboutus.css';

export default function AboutUs() {
    return (
        <div className="aboutus absolute min-h-screen max-w-screen-2xl">
            <img src="NavbarReel.png" alt="" className="rotated-image" />
            <img src="component5.svg" alt="" className='trumpetimg' />
            <div className="max-w-4xl mx-auto text-orange-900 px-6 aboutustext">
                <div className="text-6xl font-semibold mb-6">About Us</div>
                <div className="grid grid-cols-10 oldenburg-regular sposnorflex">
                    <div className="col-span-6 flex flex-col gap-6 text-md" >
                        <div>
                            Kreiva is the annual cultural festival of Indian Institute of Information Technology, Vadodara. Kreiva serves as a platform for students to show their talents in performing arts and aesthetic arts, where students can collaborate and team up with other students to bring out the best in them.
                        </div>
                        <div>
                            The Annual Cultural Festival of IIIT Vadodara gets its name from the Esperanto word "Kreiva", meaning "Creativity". Since its inception in 2016 as an intra-institute fest in 2016, it has consistently been a huge platform for individuals to showcase their talents. A spectacular extravaganza, Kreiva is home to expression through art, music, drama, dance and culture.
                        </div>
                        <div>
                            Join us to celebrate creativity, join us, to celebrate Kreiva!
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col items-center text-center gap-3">
                        <div>
                            <div className='text-4xl font-semibold'>Title Sponsor</div>
                            <img src="google.svg" alt="" className='googleimg' />
                        </div>
                        <div className='mb-4'>
                            <div className='text-lg'>Refreshment Partner</div>
                            <img src="RefreshmentPartners.svg" alt="" className='refreshmentsimg' />
                        </div>
                        <div>
                            <div className='text-lg'>Travel Partner</div>
                            <img src="travelpartner.svg" alt="" className='travelimg' />
                        </div>
                    </div>
                </div>
            </div>
            <img src="drums.svg" alt="" className='drumsimg' />
            <img src="piano.svg" alt="" className='pianoimg' />
        </div> 
    );    
}