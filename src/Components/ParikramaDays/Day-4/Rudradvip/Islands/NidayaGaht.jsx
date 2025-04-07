import React from 'react';

const NidayaGaht = () => {
      return (
        <section id='Nidaya_Ghat'>
            <div id='Nidaya Ghat'>
            <div
              id="40"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 9.2
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Nidaya Ghat
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Ghat of Separation
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  From this ghat, Sri Chaitanya crossed the Ganges to journey to Katwa, where He accepted the vow of renunciation and became Sri Krishna Chaitanya. Before departing, He took the dust from the feet of His mother, Sachi Devi, and reverently circumambulated her three times.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  The name “Nidaya” means “cruel,” signifying the perceived cruelty of His decision to leave His loving family and relatives to take sannyasa.
                  </p>
                  
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden">
                <img
                  src="/assets/images/islands/09-rudradvip/02-nidaya-ghat/Nidaya Ghat.jpg"
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
                  src="/assets/images/islands/09-rudradvip/02-nidaya-ghat/2021-10-22.jpg"
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
             /
            </div>
          
  
  
  
  
  
  
  
          </div>
          </section>
      );
};

export default NidayaGaht;