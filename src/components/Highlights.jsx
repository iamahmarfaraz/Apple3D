import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from './VideoCarousel';


gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useEffect(() => {
    // Animate title
    gsap.fromTo(
      '#title',
      { opacity: 0, y: 50 },
      {
        opacity: 0.5,
        y: 0,
        
        scrollTrigger: {
          trigger: '#title',
          start: 'top 100%', // Adjust the start point as needed
        }
      }
    );

    // Animate links
    gsap.fromTo(
      '.link',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
          trigger: '#highlights',
          start: 'top 80%', // Adjust the start point as needed
        }
      }
    );
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;

