import React from 'react';

const NagariyaGhat = () => {
      return (
        <section id='Nagariya_Ghat'>
            <div id='Nagariya Ghat'>
            <div
              id="36"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 8.5
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Nagariya Ghat
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                The Playful Pastimes of Nimai
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                  Just ten meters from Barakona Ghat lies Nagariya Ghat—a special place in the pastimes of Sri Chaitanya. As a child, known as Nimai, He would often play mischievous games and engage in sports here.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  One notable event occurred when Mother Shachi, while bathing at this ghat, saw Vishnupriya and decided that she would be the perfect wife for her son.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  Sri Chaitanya’s playful nature frequently revealed itself at this spot. He would splash water on the brahmins as they bathed, leaving them frustrated and prompting complaints to His father, Jagannath Mishra. Hearing their grievances, Jagannath Mishra would rush to the ghat with a stick, ready to discipline Nimai. However, aware of His father’s arrival, Nimai would cleverly run home beforehand and act innocent. He would sit with ink-stained fingers and clothes, pretending to have been studying diligently all along. Seeing this, His father would be convinced, and Nimai would escape punishment.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  Another significant event at Nagariya Ghat took place on the day of the Kazi’s defeat. Leading a massive procession of devotees holding lighted torches and chanting the Holy Names, Sri Chaitanya stopped at this ghat before continuing to the Kazi’s residence in Simulia.
                  </p>
                  
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="col-start-1 col-span-2">
                <img
                  src="/assets/images/islands/08-modrumdvip/Nagariya Ghat-min.JPG"
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
                  src="/assets/images/islands/00-general/IMG_8607.JPG"
                  alt=""
                  className="md:mb-space60 md:w-[30rem]"
                />
                {/* <div className="relative group md:block hidden">
                  <div className="flex border-b justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack  transition-all">
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
                  src="/assets/images/islands/00-general/IMG_8589.JPG"
                  className="w-[100vw] md:w-auto"
                  alt=""
                />
                {/* <div className="relative group md:hidden block mt-spacelg">
                  <div className="flex border-b justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2  border-accentBlack  transition-all">
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
          </section>
      );
};

export default NagariyaGhat;