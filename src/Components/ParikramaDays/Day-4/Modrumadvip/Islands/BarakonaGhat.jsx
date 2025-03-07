import React from 'react';

const BarakonaGhat = () => {
      return (
            <div>
            <div
              id="35"
              className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 8.4
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Barakona Ghat
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                The Sacred Site of Debate and Surrender
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                  Barakona Ghat is a serene and sacred place where Sri Chaitanya would discuss scriptures and teach Sanskrit grammar to His students. It is said to have been built by Vishvakarma, the celestial architect.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  This ghat is also known for a remarkable encounter between Sri Chaitanya and the great scholar Keshava Kashmiri, who arrived with the ambition of defeating all eminent scholars in debate. When he confronted Sri Chaitanya, the Lord humbly listened to his supposedly flawless poem and gently pointed out its faults.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  Defeated and deeply shaken, Keshava Kashmiri returned home in distress. That night, his beloved deity, Saraswati Devi, appeared to him in a dream and revealed that Sri Chaitanya was none other than Bhagavan Himself. She instructed him to surrender at His feet.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  The following morning, filled with remorse and humility, Keshava Kashmiri returned to Sri Chaitanya and took shelter at His lotus feet. With great mercy, Sri Chaitanya accepted him and instructed him to abandon his pride and engage in the worship of Sri Krishna.
                  </p>
                  
                 
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="">
                <img
                  src="/assets/images/islands/00-general/IMG_8715.JPG"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
                <p className="md:block hidden md:text-textSmall mt-space30 w-[200px] font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p>
              </div>
              {/* 2nd img  */}
              <div className=" ">
                <img
                  src="/assets/images/islands/08-modrumdvip/Barakona Ghat.png"
                  alt=""
                  className="md:mb-space60  "
                />
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

export default BarakonaGhat;