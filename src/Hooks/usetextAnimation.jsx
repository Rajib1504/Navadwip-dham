import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const usetextAnimation = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
      if (containerRef.current) {
        const title = gsap.utils.toArray(".title");
        title.forEach((el) => {
          const words = new SplitType(el, { types: "chars" });
          words.chars.forEach(char => {
            // Create wrapper span with class
            const wrapper = document.createElement("span");
            wrapper.classList.add("overflow-hidden","inline-block",
          "h-space60");
          
            // Move the character into the wrapper
            char.parentNode.insertBefore(wrapper, char);
            wrapper.appendChild(char);
          })
          // console.log(words.chars);
          gsap.from(words.chars, {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 50%",
              // scrub: true,
              // markers: true,
            },
          });
        });
      }
    },
    { scope: containerRef }
  );
  // line animation
  useGSAP(
    () => {
      if (containerRef.current) {
        const element = gsap.utils.toArray(".animateLines");
        element.forEach((el, i) => {
          const split = new SplitType(el, { types: "lines" });
          // console.log(split.lines);
          gsap.from(split.lines, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.05,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 50%",
              // scrub: true,
              id: `line-${i}`,
              // markers: true,
            },
          });
        });
      }
    },
    { scope: containerRef }
  );
  useGSAP(
    () => {
      if (containerRef.current) {
        const paragrpah = gsap.utils.toArray(".paragraph");
        // console.log(paragrpah);
        paragrpah.forEach((el, i) => {
          gsap.from(el, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 50%",
              // scrub: true,
              id: `line-${i}`,
              // markers: true,
            },
          });
        });
      }
    },
    { scope: containerRef }
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500); // wating for dom load 

    return () => clearTimeout(timeout);
  }, []);

  return containerRef;
};

export default usetextAnimation;
