import React from 'react';

const GangaSagar = () => {
      return (
        <section id='Ganga_Sagar'>
            <div id='Ganga Sagar'>
            <div
              id="27"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 5.4
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Ganga Sagar
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                  Where the Ganga Meets the Ocean
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                    Ganga Sagar is the sacred confluence where the Ganga River
                    meets the ocean. According to ancient accounts, a dialogue
                    once took place between the personified Ganga and the ocean.
                    The ocean praised Ganga for her unparalleled fortune, as Sri
                    Chaitanya Bhagavan himself had bathed in her waters.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    In response, Ganga expressed her sorrow, lamenting that Sri
                    Chaitanya would soon leave her and journey to Nilachal
                    (Jagannath Puri), situated on the ocean’s shore. Hearing this,
                    the ocean reassured Ganga, explaining that Sri Chaitanya never
                    truly leaves His eternal abode, Navadvip Dham, even if it
                    appears so to the external eye. The ocean then revealed his
                    deep longing to remain near Ganga and continuously serve
                    Navadvip.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    To this day, it is said that the ocean remains at this sacred
                    confluence, absorbed in meditation on Sri Chaitanya's divine
                    pastimes.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="">
                <img
                  src="/assets/images/islands/05-koladvip/04-ganga-sagar/ganga-sagar.jpg"
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
                <img src="/assets/images/islands/00-general/DSC01792.JPG" alt="" className="md:mb-space60  " />
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
          </section>
      );
};

export default GangaSagar;