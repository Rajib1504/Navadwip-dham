import React from 'react';

const Belvapaksha = () => {
      return (
            <div id='Belvapaksha'>
          <div
            id="13"
            className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
              I 1.13
            </p>

            {/* Second Box (Centered by default) */}
            <div className="col-start-5 col-span-5  w-full mr-space30 ">
              <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Belvapaksha
              </h4>
              <p className="text-mobileTextRegular md:text-textRegular">
              The Place of Devotion and Divine Revelation
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className="mb-space15 md:mb-space30">
                Belvapaksha, also known as Belpukuriya, is often compared to Belavan forest in Vrindavan. 
                </p>
                <p className="mb-space15 md:mb-space30">
                Long ago, the brahmanas of this area worshipped Lord Shiva with great sincerity for two weeks, offering bel leaves and water. Pleased with their devotion, Lord Shiva granted them the highest blessing—not material wealth or power, but the priceless treasure of pure love for Sri Krishna. From this, the place got its name: Belva from the bel leaves and paksha meaning two weeks.
                </p>
                <p className="mb-space15 md:mb-space30">
                But the story doesn’t end there. Lord Shiva appeared to one of the brahmanas named Nimbaditya and gave him a special instruction. Shiva directed him to the outskirts of the village, where a forest of bel trees stood. There, he would find his spiritual preceptors—the four Kumaras: Sanaka, Sanatana, Sanandana, and Sanat.
                </p>
                <p className="mb-space15 md:mb-space30">
                Following these instructions, Nimbaditya reached the forest and saw the four Kumaras deep in meditation. Overcome with devotion, he began loudly chanting the Holy Names. The sages, hearing his heartfelt prayers, emerged from their meditation, joyfully embraced him, and welcomed him as their disciple.

                </p>
                <p className="mb-space15 md:mb-space30">
                The Kumaras revealed a great truth to Nimbaditya. Just as Lakshmi Devi, Lord Brahma, and Lord Rudra had established their own spiritual lineages, he had been chosen to carry forward the path of pure devotion. They instructed him to bathe in the Ganges and, upon his return, initiated him into the sacred Radha-Krishna Yugala-mantra.
                </p>
                <p className="mb-space15 md:mb-space30">
                In that sacred moment, something extraordinary happened. Pleased with his devotion, Sri Sri Radha-Krishna revealed their combined form as Sri Chaitanya Mahaprabhu. Chaitanya then disclosed His divine identity—the unified form of Radha and Krishna—and made a prophecy. He foretold that in a future birth, Nimbaditya would be reborn as Keshava Kashmiri, a renowned scholar who would travel across Bharat, conquering great pundits in debate. Eventually, his journey would bring him to Navadvip, where he would meet Sri Chaitanya.
                </p>
              </div>
            </div>
          </div>
          {/* images   */}
          <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
            {/* 1st img  */}
            <div className="">
              <img
                src="/assets/images/islands/02-simantadvip/04-belpukur/1.IMG_8732.JPG"
                className="md:w-auto w-[100vw]"
                alt=""
              />
              {/* <p className="md:block hidden md:text-textSmall mt-space30 w-[200px] font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana
                accompanied by His two consorts, Vishnupriya and Lakshmipriya.
              </p> */}
            </div>
            {/* 2nd img  */}
            <div className=" ">
              <img src="/assets/images/islands/02-simantadvip/04-belpukur/2.163040243_277267814019790_3537408500026510899_n.jpg" alt="" className="md:mb-space60  " />
              {/* <div className="relative group md:block hidden">
                <div className=" w-space240 flex border-b border-accentBlack justify-between items-center  px-4 font-primayRegular text-xl py-2    text-primaryBlack transition-all">
                  <p className="font-primaryLight md:text-textSmall">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-space240 group-focus:w-space240"></span>
                </div>
              </div> */}
            </div>
            {/* array for gallery  */}
            {/* <div>
              <div className="relative group md:hidden block mt-spacelg">
                <div className="flex border-b border-accentBlack justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2   text-primaryBlack transition-all">
                  <p className="font-primaryLight text-mobileTextRegular ">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      );
};

export default Belvapaksha;