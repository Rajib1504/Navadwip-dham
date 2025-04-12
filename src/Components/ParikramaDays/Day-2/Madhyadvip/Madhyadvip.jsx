import React, { useRef } from "react";
import Naimisharanya from "./Islands/Naimisharanya";
import BrahmanPushkar from "./Islands/BrahmanPushkar";
import Uchahatt from "./Islands/Uchahatt";
import Panchaveni from "./Islands/Panchaveni";
import usetextAnimation from './../../../../Hooks/usetextAnimation';

const Madhyadvip = () => {
  const containerRef = usetextAnimation()
  return (
    <div ref={containerRef}className="pt-space120 md:pt-space300 ">
    <article id="Madhyadvip" className="w-11/12 mx-auto  ">
      <section className="md:grid grid-cols-12 ">
        <p className="title text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
          04
        </p>
        <h1  className="title font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
        Madhyadvip
        </h1>
        <h2 className=" animateLines font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
        Madhyadvip, now called Majida. Its history dates back to Satya-yuga when the seven great sages (Sapta Rishis) learned from their father, Brahma, about the future appearance of Sri Chaitanya. Eager to receive His mercy, they asked how to attain it.
        </h2>
      </section>

      {/* top text with left right sticky  */}
      <div className="flex  flex-col justify-start mt-space60 mb-space120 md:my-space120 ">
        <div className="md:grid  grid-cols-12">
          {/* left */}
          <div className="relative col-start-1 col-span-2  md:w-auto w-full ">
            <div className="sticky top-[4.5rem]">
              <div className=" paragraph text-mobiletextSmall md:text-textRegular md:block flex md:border-b-0 border-b border-accentBlack  py-spacelg md:py-0 justify-between ">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Represents
                </h4>
                <p className="font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Smaranam</span>
                  <span> [remembering]</span>
                </p>
              </div>
              <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Embodies
                </h4>
                <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular   md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Puskar Tirtha,   </span>
                  <span>Kurukshetra  </span>
                </p>
              </div>
              <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Visit on
                </h4>
                <p className="font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                  <span> Day Two</span> <span> of Parikrama</span>
                </p>
              </div>
            </div>
          </div>
          {/* right   */}
          <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular  font-primaryLight">
            <p className="paragraph ">
            Brahma advised them to go to Navadvip, explaining that devotion to this holy land leads one to the transcendental realm of Vrindavan. Following his guidance, the sages came to Madhyadvip and engaged in intense worship, fasting completely and chanting the Holy Names.
            </p>
            <p className="paragraph mt-space15 md:mt-space30">
            One day at noon, Sri Chaitanya appeared before them with His eternal associates. Overwhelmed by His divine beauty, the sages bowed in awe. Because Bhagavan granted them His darshan at midday, the island became known as Madhyadvip—madhya meaning “middle.”
            </p>
            <p className="paragraph mt-space15 md:mt-space30">
            Sri Chaitanya instructed them to give up fruitive work and speculative knowledge, which blocked the path of pure devotion. He blessed them with the practice of unalloyed devotional service and revealed mysteries of His upcoming appearance, allowing them to witness His future pastimes.
            </p>
            <p className="paragraph mt-space15 md:mt-space30">
            With renewed devotion, the sages left for Kumarahatt to continue their worship. Even today, the seven hills where they meditated remain a sacred landmark, and the constellation of the Seven Sages shines in the night sky. It is said that one who stays in Madhyadvip, even without strict rules, can receive Sri Chaitanya’s mercy.
            </p>
          </div>
        </div>
      </div>
        {/* ...................................................................................... */}

        {/* Naimisharanya  */}
      <Naimisharanya/>

        {/* ............................... */}
        {/* Brahman Pushkar"  */}
        <BrahmanPushkar/>
        {/* ........................... */}
        
        {/* Uchahatt  */}
        <Uchahatt/>

        {/* ............................... */}
        {/* Panchaveni  */}
        <Panchaveni/>

        {/* ............................... */}


      </article>
    </div>
  );
};

export default Madhyadvip;
