import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 600 ? smallHeroVideo : heroVideo,
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 600) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2.5,
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p className="hero-title" id="hero-title">
          iPhone 15 pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            playsInline
            muted
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className="flex translate-y-20 flex-col items-center opacity-0"
        id="cta"
      >
        <a href="#highlights" className="btn">
          Buy Now
        </a>
        <p className="text-xl font-normal">From $199/month or $1999 </p>
      </div>
    </section>
  );
};

export default Hero;
