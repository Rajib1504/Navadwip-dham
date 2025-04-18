import React from 'react';

const RudraGaudiyaMath = () => {
      return (
        <section id='Rudra Gaudiya Math'>
            
            <section
              id="41"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 9.3
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Rudra Gaudiya Math
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The place of Gaura-Katha and Divine Devotion
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  This place is called Rudradvip because Rudradev continuously distributes the nectar of Gaura-katha (Sri Chaitanya’s pastimes) here in the company of his associates.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Within Rudradvip lies the village of Shankarapur. Here, Shankaracharya, a manifestation of Rudra, once arrived to spread the doctrine of unqualified monism. Although externally he propagated impersonalist philosophy as per the Bhagavan’s order, internally he was a great devotee. However, when he came to Navadvip, Sri Chaitanya appeared to him in a dream and reminded him, “You are carrying out the Bhagavan’s order, but in this holy land, impersonalism will never take root. Here, pure devotion has already been firmly established. Those who reject devotion are simply bewildered by the material energy—Prayudha Maya and Vriddha Shiva, who ensnare them in an atheistic doctrine. Therefore, go preach elsewhere and do not disturb the residents of this sacred land.”
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Upon receiving this instruction, Shankaracharya immediately left Navadvip.
                  </p>
                 
                </div>
              </div>
            </section>
            {/* images   */}
            <section className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden col-start-1 col-span-2">
                <img
                  src="/assets/images/islands/09-rudradvip/03-rudra-gaudiya-math/1.IMG_1630-min-min.JPG"
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
              <div className="hidden col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/09-rudradvip/03-rudra-gaudiya-math/2.IMG_1629-min-min.JPG"
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
              <div className="hidden col-start-10 col-span-3">
                <img
                  src="/assets/images/islands/09-rudradvip/03-rudra-gaudiya-math/4.IMG20240320073215-min-min.jpg"
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
            </section>
        
          </section>
      );
};

export default RudraGaudiyaMath;