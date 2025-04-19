import React from 'react';

const SurabhiKunja = () => {
      return (
        <section id='Surabhi Kunja'>
            
          <div
            id="15"
            className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
              II 3.2
            </p>

            {/* Second Box (Centered by default) */}
            <div className="col-start-5 col-span-5  w-full  ">
              <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
               Surabhi Kunja
            
              </h2>
              <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Place of Indra’s Atonement
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className="paragraph mb-space15 md:mb-space30">
                  After Indra became angry with the residents of Vrindavan for
                  worshiping Govardhan Hill instead of him, he sent torrential
                  rains to devastate the land. However, realizing his mistake,
                  he came to this sacred site on the banks of the Saraswati
                  River, accompanied by the divine cow Surabhi, to seek
                  forgiveness from Sri Krishna. Here, he performed worship as an
                  act of atonement.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  This place is also where Markandeya Rishi performed intense
                  bhajan during the great flood and received the mercy of Sri
                  Chaitanya.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  Today, Surabhi-kunja remains a revered pilgrimage site. A
                  Gaudiya Math temple now stands here, where the deities of Sri
                  Sri Radha-Krishna are worshiped with devotion.
                </p>
              </div>
            </div>
          </div>
          {/* images   */}
          <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
            {/* 1st img  */}
            <div className="hidden">
              <img
                src="/assets/images/islands/03-godrumdvip/02-surabhi-kunja/1.IMG_1286-min.JPG"
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
              <img src="/assets/images/islands/03-godrumdvip/02-surabhi-kunja/2.IMG_1299-min.JPG" alt="" className="md:mb-space60  " />
              <div className="relative group md:block hidden">
                {/* <div className=" w-space240 flex border-b border-accentBlack justify-between items-center  px-4 font-primayRegular text-xl py-2     transition-all">
                  <p className="font-primaryLight md:text-textSmall">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-space240 group-focus:w-space240"></span>
                </div> */}
              </div>
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
    
        </section>
      );
};

export default SurabhiKunja;