import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import usetextAnimation from "../../Hooks/UsetextAnimation";

gsap.registerPlugin(ScrollTrigger);

const IlandImages = () => {
  const imgcontainerRef = useRef();
const containerRef = usetextAnimation()
  useGSAP(() => {
    const leftImgs = gsap.utils.toArray(".left-images img");
    const rightImgs = gsap.utils.toArray(".right-images img");

    leftImgs.forEach((img, i) => {
      gsap.to(img, {
        y: i % 2 === 0 ? -50 : 50,
        ease: "none",
        scrollTrigger: {
          trigger: imgcontainerRef.current,
          start: "top center",
          end: "center top",
          scrub: true,
        },
      });
    });

    rightImgs.forEach((img, i) => {
      gsap.to(img, {
        y: i % 2 === 0 ? 50 : -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div
      ref={imgcontainerRef}
      className="min-h-dvh w-full mx-auto  justify-center items-center flex overflow-hidden"
    >
      <div ref={containerRef} className="flex-col flex md:flex-row justify-center items-center w-full md:justify-between relative">

        {/* Left images */}
        <div className="hidden  lg:flex justify-center items-center gap-4 left-images">
          <img src="/Images/Iland images/IMG_8584.webp" alt="img" />
          <img src="/Images/Iland images/Yogapith,_Mayapur 2.webp" alt="img" />
          <img src="/Images/Iland images/IMG_8557.webp" alt="img" />
          <img src="/Images/Iland images/NMP1-111 1 (4).webp" alt="img" />
        </div>

        {/* Center Text */}
        <h2 className="animateLines  text-mobileheading2 md:text-heading2 font-primaryLight text-center text-primaryBlack 
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          Islands of <br /> Navadvip
        </h2>

        {/* Right images */}
        <div className="hidden lg:flex gap-4 justify-center items-center right-images">
          <img src="/Images/Iland images/1986-01-16 1.webp" alt="img" />
          <img src="/Images/Iland images/IMG_8425.webp" alt="img" />
          <img src="/Images/Iland images/IMG_8487.webp" alt="img" />
          <img src="/Images/Iland images/NMP1-111 1 (1).webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default IlandImages;
