import React from "react";
import { RxCross2 } from "react-icons/rx";
import SriChaitanyaGaudiyaMath from "./Islands/SriChaitanyaGaudiyaMath";
import NandanAcharyaBhavan from "./Islands/NandanAcharyaBhavan";
import Yogapith from "./Islands/Yogapith";
import SrivasAngan from "./Islands/SrivasAngan";
import AdvaitaBhavan from "./Islands/AdvaitaBhavan";
import GadadharAngan from "./Islands/GadadharAngan";
import MurariGuptaAngan from "./Islands/MurariGuptaAngan";
import PrithaKunda from "./Islands/PrithaKunda";
import SriChaitanyaMath from "./Islands/SriChaitanyaMath";

const Antardvip = () => {
  return (
    <div className="pt-space120 md:pt-space300 ">
      <article id="Antardvip" className="w-11/12 mx-auto  ">
        <section className="md:grid grid-cols-12 ">
          <p className="text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
            01
          </p>
          <h2  className="font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
          Antardvip
          </h2>
          <h4 className="font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
          At the meeting point of the Yamuna and Ganga rivers lies Antardvip, the sacred island where Sri Chaitanya chose to appear in this world. At its center is Mayapur, and within it, the holy site of Yogapith—His birthplace and the eternal scene of His joyful pastimes.
          </h4>
        </section>

        {/* top text with left right sticky  */}
        <div className="flex  flex-col justify-start mt-space60 mb-space120 md:my-space120 ">
          <div className="md:grid  grid-cols-12">
            {/* left */}
            <div className="relative col-start-1 col-span-2  md:w-auto w-full ">
              <div className="sticky top-[4.5rem]">
                <div className="text-mobiletextSmall md:text-textRegular md:block flex md:border-b-0 border-b border-accentBlack  py-spacelg md:py-0 justify-between ">
                  <h4 className="text-secondaryBlack font-primaryLight">
                    Represents
                  </h4>
                  <p className="font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                    <span>Atma-nivedon</span>
                    <span> [Surrendering]</span>
                  </p>
                </div>
                <div className="text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                  <h4 className="text-secondaryBlack font-primaryLight">
                    Embodies
                  </h4>
                  <p className="font-primaryLight text-mobiletextSmall md:text-textRegular   md:block flex flex-col md:flex-row text-right md:text-left">
                    <span>Gokula Mahavan, </span>
                    <span> Madhuvan</span>
                  </p>
                </div>
                <div className="text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                  <h4 className="text-secondaryBlack font-primaryLight">
                    Visit on
                  </h4>
                  <p className="font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                    <span> Day One</span> <span> of Parikrama</span>
                  </p>
                </div>
              </div>
            </div>
            {/* right   */}
            <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular overflow-y-scroll font-primaryLight">
              <p>
              Long ago, this place was known as Atopur. Five thousand years ago, Brahma came here to worship Sri Chaitanya. He had once tested Krishna in Vrindavan by stealing His calves and friends, but Krishna effortlessly replaced them, humbling Brahma. Realizing his mistake, Brahma prayed for forgiveness and longed to serve Krishna in His future incarnation as Sri Chaitanya.
              </p>
              <p className="mt-space15 md:mt-space30">
              To atone, Brahma performed intense worship in Navadvip. Pleased with his devotion, Sri Chaitanya appeared before him in a radiant golden form. Overcome with humility, Brahma begged for a birth free from pride, where he could always chant the Holy Names.
              </p>
              <p className="mt-space15 md:mt-space30">
              Sri Chaitanya granted his wish, revealing that Brahma would be born as Haridas Thakur. Before disappearing, Bhagavan shared the deepest desire of His heart (antar)—to experience the love of Srimati Radharani. From this revelation, the island came to be known as Antardvip.
              </p>
             
            </div>
          </div>
        </div>
        {/* ...................................................................................... */}
        {/* Sri Chaitanya Gaudiya Math"  */}
       <SriChaitanyaGaudiyaMath/>
        {/* ............................... */}

        {/* Nanda Acaraya Bahavan  */}
       <NandanAcharyaBhavan/>

        {/* ........................... */}
        {/* yogapith  */}
        <Yogapith/>
        {/* ............................... */}
        {/* Srivas Angan  */}
        <SrivasAngan/>
        {/* ............................... */}
        {/* Advaita Bhavan  */}
       <AdvaitaBhavan/>
        {/* ............................... */}
        {/* Gadadhar Angan  */}
      <GadadharAngan/>
        {/* ............................... */}
        {/* Murari gupta Angan  */}
        <MurariGuptaAngan/>
        {/* ............................... */}
        {/* Pritha Kunda  */}
       <PrithaKunda/>
        {/* ............................... */}
        {/* Sri Chaitanya math  */}
        <SriChaitanyaMath/>
        {/* ............................... */}
      </article>
    </div>
  );
};

export default Antardvip;
