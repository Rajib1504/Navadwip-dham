import React, { useRef } from "react";
import RadhaKunda from "./Islands/RadhaKunda";
import Vidyanagar from "./Islands/Vidyanagar";
import usetextAnimation from "../../../../Hooks/UsetextAnimation";


const Ritudvip = () => {
  const containerRef =usetextAnimation()
  return (
    
    <section ref={containerRef} className="w-11/12 mx-auto pt-space120 md:pt-space240  ">
      <section className="md:grid grid-cols-12 ">
        <p className="title text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
          06
        </p>
        <h1 id="Ritudvip" className=" title font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
        Ritudvip
        </h1>
        <h2 className="animateLines font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
        On this island, also known as Ratupur, the six seasons manifest in their personified forms to meditate on the pastimes of Sri Chaitanya and seek His blessings.
        </h2>
      </section>

      {/* top text with left right sticky  */}
      <div className="flex  flex-col justify-start mt-space60 mb-space120 md:my-space120 ">
        <div className="md:grid  grid-cols-12">
          {/* left */}
          <div className="relative col-start-1 col-span-2  md:w-auto w-full ">
            <div className="sticky top-[4.5rem]">
              <div className="paragraph text-mobiletextSmall md:text-textRegular md:block flex md:border-b-0 border-b border-accentBlack  py-spacelg md:py-0 justify-between ">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Represents
                </h4>
                <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Archanam</span>
                  <span>[worshiping]</span>
                </p>
              </div>
              <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Embodies
                </h4>
                <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular   md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Radha-kunda,</span>
                  <span>Shyama-kunda </span>
                  
                  
                </p>
              </div>
              <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Visit on
                </h4>
                <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                  <span> Day Three</span> <span> of Parikrama</span>
                </p>
              </div>
            </div>
          </div>
          {/* right   */}
          <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular  font-primaryLight">
            <p className="paragraph ">
            Sri Chaitanya visits this place daily, chanting the Holy Names and distributing His love, making it non-different from Radha-kunda in Vrindavan. It is also home to sixty-four types of knowledge, including Ayurveda, philosophy, and yoga. During the great flood, Bhagavan, in the form of Matsyadev (the fish incarnation), brought all the Vedas here, establishing it as a seat of all knowledge.
            </p>
          </div>
        </div>
      </div>
        {/* ...................................................................................... */}
        {/* Radha Kunda"  */}
       <RadhaKunda/>
        {/* ............................... */}

        {/*Vidyanagar  */}
      <Vidyanagar/>

        {/* ........................... */}
      
      </section>
   
  );
};

export default Ritudvip;
