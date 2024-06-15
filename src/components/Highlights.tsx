import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      duration: 1,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      stagger: 0.3,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 flex w-full items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the Highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watchImg" className="ml-2" />
            </p>
            <p className="link">
              Watch the film
              <img src={rightImg} alt="rightImg" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
