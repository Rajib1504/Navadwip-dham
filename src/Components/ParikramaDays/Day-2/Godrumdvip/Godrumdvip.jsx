import React from "react";
import SvanandaSukhandaKunja from "./Islands/SvanandaSukhandaKunja";
import SurabhiKunja from "./Islands/SurabhiKunja";
import SuvarnaVihar from "./Islands/SuvarnaVihar";
import AmraGhat from "./Islands/AmraGhat";
import NarasimhaPalli from "./Islands/NarasimhaPalli";
import HariharaKshetra from "./Islands/HariharaKshetra";
import usetextAnimation from "../../../../Hooks/UsetextAnimation";

const Godrumdvip = () => {
  const containerRef = usetextAnimation()
  return (
    <div ref={containerRef} className="pt-space120 md:pt-space300 ">
      <article id="Godrumdvip" className="w-11/12 mx-auto  ">
        <section className="md:grid grid-cols-12 ">
          <p className=" title text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
            03
          </p>
          <h1 className=" title font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
       Godrumdvip
          </h1>
          <h2 className="animateLines font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
            Today, it's called Gadigacha. In this sacred place, the celestial
            cow Surabhi resides beneath a massive banyan tree, making the island
            known as Godrumvip—meaning cow and tree. It is believed that Sri
            Chaitanya fulfills the desires of those who worship Him here.
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
                  <p className="font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                    <span>Kirtanam</span>
                    <span> [chanting]</span>
                  </p>
                </div>
                <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                  <h4 className="text-secondaryBlack font-primaryLight">
                    Embodies
                  </h4>
                  <p className="font-primaryLight text-mobiletextSmall md:text-textRegular   md:block flex flex-col md:flex-row text-right md:text-left">
                    <span>Sri Nandishvar, </span>
                    <span> Mahavanavasi </span>
                  </p>
                </div>
                <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                  <h4 className="text-secondaryBlack font-primaryLight">
                    Visit on
                  </h4>
                  <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                    <span> Day Two</span> <span> of Parikrama</span>
                  </p>
                </div>
              </div>
            </div>
            {/* right   */}
            <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular  font-primaryLight">
              <p className="paragraph ">
                Once, Indra was troubled by the offense he had committed at
                Krishna’s feet in Vrindavan. When he heard that Sri Chaitanya
                had appeared in Navadvip, he feared making the same mistake
                again. Seeing his distress, Surabhi advised him to come to
                Godrumdvip. She assured him that by worshiping Sri Chaitanya
                here, he would be freed from offenses and receive Bhagavan’s
                mercy.
              </p>
              <p className="paragraph mt-space15 md:mt-space30">
                Following her guidance, Indra and Surabhi engaged in devotional
                service. Pleased with their sincerity, Sri Chaitanya appeared
                before them, blessing them with His darshan. He reassured them
                that they would soon join His eternal pastimes, free from
                illusion.
              </p>
            </div>
          </div>
        </div>
        {/* ...................................................................................... */}
        {/* Svananda Sukhada Kunja"  */}
        <SvanandaSukhandaKunja />
        {/* ............................... */}

        {/*  Surabhi Kunja  */}
        <SurabhiKunja />

        {/* ........................... */}

        {/* Suvarna Vihar  */}
        <SuvarnaVihar />

        {/* ............................... */}
        {/* Amra Ghat  */}
        <AmraGhat />

        {/* ............................... */}

        {/* Narasimha Palli */}
        <NarasimhaPalli />

        {/* ............................... */}

        {/* Harihara Kshetra  */}
        <HariharaKshetra />
      </article>
    </div>
  );
};

export default Godrumdvip;
