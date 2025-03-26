import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Antardvip = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      
      const split = new SplitType(textRef.current, { types: "lines" });
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse", 
        },
      });
  
     
      tl.from(split.lines, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.7,
        ease: "power4.out",
        delay:2
      });
  
    
    }
  }, []);
  
  

  return (
    <div className="pt-space120 md:pt-space300">
      <article id="Antardvip" className="w-11/12 mx-auto">
        <section className="md:grid grid-cols-12">
          <p className="text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
            01
          </p>
          <h2 className="font-primaryLight col-span-12 md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
            Antardvip
          </h2>
          <h4
            ref={textRef}
            className="font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2"
          >
            At the meeting point of the Yamuna and Ganga rivers lies Antardvip,
            the sacred island where Sri Chaitanya chose to appear in this world.
            At its center is Mayapur, and within it, the holy site of
            Yogapith—His birthplace and the eternal scene of His joyful
            pastimes.
          </h4>
        </section>
      </article>
    </div>
  );
};

export default Antardvip;
