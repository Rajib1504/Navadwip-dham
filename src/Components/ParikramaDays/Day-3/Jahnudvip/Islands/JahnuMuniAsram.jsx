import React from 'react';

const JahnuMuniAsram = () => {
      return (
        <section id="Jahnu_Muni's_Asram">
            <div id="Jahnu Muni's Asram">
          <div
            id="31"
            className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
              III 7.1
            </p>

            {/* Second Box (Centered by default) */}
            <div className="col-start-5 col-span-5  w-full mr-space30 ">
              <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Jahnu Muni’s Asram
              </h4>
              <p className="text-mobileTextRegular md:text-textRegular">
                The Birthplace of Jahnavi
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className="mb-space15 md:mb-space30">
                  Jahnu Muni meditated here in his ashram and was blessed by Sri
                  Chaitanya to witness His transcendental pastimes in the age of
                  Kali.
                </p>
                <p className="mb-space15 md:mb-space30">
                  When King Bhagiratha brought the Ganges to earth, she flowed
                  through Navadvip in great ecstasy, unknowingly washing away
                  Jahnu Muni’s utensils. Offended, the sage drank the entire
                  river in a single gulp.
                </p>
                <p className="mb-space15 md:mb-space30">
                  Distressed, Bhagiratha prayed to Jahnu Muni with great
                  devotion. Pleased, the sage released Ganga from his ear, as if
                  giving her new birth. In gratitude, Ganga circled him,
                  dividing the land into nine islands and earning the name
                  Jahnavi, the daughter of Jahnu Muni.
                </p>
              </div>
            </div>
          </div>
          {/* images   */}
          <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
            {/* 1st img  */}
            <div className="col-start-1 col-span-3">
              <img
                src="/assets/images/islands/07-jahnudvip/Jahnudvip Jahnu Muni Ashram.jpg"
                className="md:w-auto w-[100vw]"
                alt=""
              />
            </div>
            {/* 2nd img  */}
            <div className=" col-start-5 col-span-4">
              <img
                src="/assets/images/islands/00-general/DSCF1633.JPG"
                alt=""
                className="md:mb-space60 md:w-[30rem]"
              />
              {/* <div className="relative group md:block hidden">
                <div className="flex border-b justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack text-primaryBlack transition-all">
                  <p className="font-primaryLight md:text-textSmall">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                </div>
              </div> */}
            </div>
            {/* 3rd img  */}
            <div className="col-start-11 col-span-2">
              <img
                src="/assets/images/islands/00-general/DSCF1635.JPG"
                className="w-[100vw] md:w-auto"
                alt=""
              />

              {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana
                accompanied by His two consorts, Vishnupriya and Lakshmipriya.
              </p> */}
            </div>
          </div>
        </div>
        </section>
      );
};

export default JahnuMuniAsram;