import React from 'react';

const BharadvajaTila = () => {
      return (
        <section id='Bharadvaja_Tila'>
            <div id='Bharadvaja Tila'>
            <div
              id="38"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 8.7
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h2 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Bharadvaja Tila
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Sacred Hill of Bharadvaja Muni                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  Saint Bharadvaja once sat atop a hill in deep meditation at this sacred site, now known as Bharua Danga. As Ishan Thakur explained to Srinivas Thakur, this village is near Chakadha, by the Ganges in Navadvip.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  After traveling to numerous holy places, Bharadvaja Muni arrived in Navadvip. Enchanted by the unparalleled beauty of this sacred land, he immersed himself in worshiping Sri Chaitanya. Pleased by the sage’s devotion, Sri Chaitanya mercifully appeared before him.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Overwhelmed with joy, Bharadvaja Muni offered obeisances and recited heartfelt devotional prayers. His prayers pleased Bhagavan, who granted him a boon. With great humility, Bharadvaja expressed his desire to witness Bhagavan’s pastimes. Bhagavan mercifully agreed, blessing him and revealing that Bharadvaja would be surrounded by many of His eternal associates during His earthly pastimes.
                  </p>
                  
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden">
                <img
                  src="/assets/images/islands/00-general/IMG_8589.JPG"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
                {/* <p className="md:block hidden md:text-textSmall mt-space30 w-[200px] font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
              </div>
              {/* 2nd img  */}
              <div className="hidden ">
                <img
                  src="/assets/images/islands/00-general/IMG_8589.JPG"
                  alt=""
                  className="md:mb-space60  "
                />
                {/* <div className="relative group md:block hidden">
                  <div className=" w-space240 flex border-b border-accentBlack justify-between items-center  px-4 font-primayRegular text-xl py-2     transition-all">
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
                  <div className="flex border-b border-accentBlack justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2    transition-all">
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
          </section>
      );
};

export default BharadvajaTila;