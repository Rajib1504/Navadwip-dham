import React from 'react';

const NarasimhaPalli = () => {
      return (
            <div id='Narashima Pally'>
            <div
              id="18"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                II 3.5
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Narasimha Palli
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                The Abode of the Gods
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                  This sacred place, also known as Deva Palli—the Abode of the Gods—is renowned for its ancient Sri Narasimha Dev Temple, which dates back to Satya-yuga. It is the only temple of its kind in Navadvip, drawing countless devotees who come to worship and seek relief from life's struggles and offenses. The sweet rice offered here is considered especially auspicious.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  According to the scriptures, Sri Narasimha Dev once rested at this site on the banks of the Mandakini River after defeating Hiranyakashipu. Bhagavan had appeared in His half-man, half-lion form to protect His pure devotee, Prahlad Maharaj, and to end the tyrannical reign of Hiranyakashipu, who had become arrogant and oppressive after receiving a boon of near-invincibility from Brahma.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  This site was once a celestial abode, where the denizens of heaven, led by Brahma and accompanied by Ganesha, Surya, and other devas, gathered to serve Bhagavan. Their palaces, crafted by the celestial architect Vishvakarma, were adorned with diamonds and pearls, radiating divine opulence. However, over time, the Mandakini River changed its course, flooding the region and eventually drying up, leaving behind only a small hill and scattered remnants of stones—faint echoes of the lost celestial splendor.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  Today, Narasimha Palli marks the outermost boundary of Navadvip Dham and remains a cherished destination for devotees seeking the blessings and protection of Sri Narasimha Dev.
                  </p>
                  
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="col-start-1 col-span-2">
                <img
                  src="/assets/images/islands/03-godrumdvip/06-nrisimhapali/1.VYM8MS_1640465331030_0.jpg"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
                {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                  Additionally, the unique four-armed deity Adhokshaja Vishnu,
                  which was discovered during the excavation of the temple, is
                  also present here alongside His consorts, Bhu Devi and Lakshmi
                  Devi.
                </p> */}
              </div>
              {/* 2nd img  */}
              <div className=" col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/03-godrumdvip/06-nrisimhapali/2.DSC01408-min.JPG"
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
              <div className="col-start-10 col-span-3">
                <img
                  src="/assets/images/islands/03-godrumdvip/06-nrisimhapali/4.IMG20240318103937-min.jpg"
                  className="w-[100vw] md:w-auto"
                  alt=""
                />
                {/* <div className="relative group md:hidden block mt-spacelg">
                  <div className="flex border-b justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2  border-accentBlack text-primaryBlack transition-all">
                    <p className="font-primaryLight text-mobileTextRegular">
                      Open Full Gallery
                    </p>
                    <img src="/→.svg" alt="" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
      );
};

export default NarasimhaPalli;