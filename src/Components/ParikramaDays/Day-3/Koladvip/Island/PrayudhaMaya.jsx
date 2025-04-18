import React from 'react';

const PrayudhaMaya = () => {
      return (
        <section id='Prayudha Maya'>
            
            <div
              id="24"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 5.1
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Prayudha Maya
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                  The Guardian of Navadvip
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                    Prayudha Maya and Vriddha Shiva eternally reside in Antardvip
                    as the guardians of Navadvip. However, due to the shifting
                    course of the Ganges, this sacred site is now worshiped in
                    Koladvip.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Prayudha Maya is distinct from ordinary Maya as she serves
                    Bhagavan and His eternal energies by facilitating His divine
                    pastimes. In this form, her role is to bewilder those who are
                    averse to Bhagavan. Due to this material covering,
                    non-devotees are unable to perceive the glories of this holy
                    abode.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden col-start-1 col-span-3">
                <img
                  src="/assets/images/islands/05-koladvip/01-prauda-maya/1.Prauda Maya.jpg"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
              </div>
              {/* 2nd img  */}
              <div className="hidden col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/05-koladvip/01-prauda-maya/2.IMG_1405-min.JPG"
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
              <div className="hidden col-start-11 col-span-2">
                <img
                  src="/assets/images/islands/05-koladvip/01-prauda-maya/4.IMG_8422.JPG"
                  className="w-[100vw] md:w-auto"
                  alt=""
                />
  {/* 
                <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
              </div>
            </div>
          
          </section>
      );
};

export default PrayudhaMaya;