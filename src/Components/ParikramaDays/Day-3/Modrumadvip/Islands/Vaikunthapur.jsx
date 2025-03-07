import React from 'react';

const Vaikunthapur = () => {
      return (
            <div>
            <div
              id="32"
              className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 8.1
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Vaikunthapur
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                The Highest Transcendental Reality
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                  Vaikunthapur is a sacred village on the northern outskirts of Navadvip, representing the highest transcendental reality—the spiritual kingdom of Narayana, which lies beyond the Viraja River.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  Here, Bhagavan is eternally present, worshiped in all His splendor and surrounded by His three divine energies: Bhu, Lila, and Sri. The effulgence of Brahman, which emanates from Bhagavan, is merely a reflection of these transcendental realities.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                  It is said that after visiting Vaikuntha, Narada Muni realized that Bhagavan was also present in the holy land of Navadvip. Drawn by this revelation, he came to this sacred place, where Narayana appeared before him and granted him divine darshan. As Narada worshiped Him, Bhagavan mercifully revealed His form as Sri Chaitanya, demonstrating His connection to the pastimes of Navadvip.

                  </p>
                  <p className="mb-space15 md:mb-space30">
                  Narada remained in Vaikunthapur for some time, deeply engaged in the worship. His devotion sanctified the area, and since then, this place has been known as Vaikunthapur.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
           <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="col-start-1 col-span-3">
                <img
                  src="/assets/images/islands/08-modrumdvip/Vaikunthapur.jpg"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
               
              </div>
              {/* 2nd img  */}
              <div className=" col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/00-general/IMAG0704.jpg"
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
                  src="/assets/images/islands/00-general/IMG_8525.JPG"
                  className="w-[100vw] md:w-auto"
                  alt=""
                />
               
                {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
                
              </div>
            </div>
  
  
  
          </div>
      );
};

export default Vaikunthapur;