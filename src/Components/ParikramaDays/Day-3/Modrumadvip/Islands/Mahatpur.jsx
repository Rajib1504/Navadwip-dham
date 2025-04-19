import React from 'react';

const Mahatpur = () => {
      return (
            <section id='Mahatpur'>
            <section
              id="34"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 8.3
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Mahatpur
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Land of Saints and Divine Revelations
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  Mahatpur, also known as Matapur, is compared to the Kamyavan forest in Vrindavan. This sacred place takes its name from the many saints (mahatmas) who have lived here, sanctifying the land with their presence.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  One day, the five Pandavas—Yudhishthira, Bhima, Arjuna, Nakula, and Sahadev—along with Draupadi, visited this village near Ekachakra. According to Ishan Thakur’s account to Shrinivas Acharya, their visit was to slay a demon and free the local villagers from his tyranny.
                  </p>
                  <p className="mb-space15 md:mb-space30">
             .
                  </p>
                
                  <p className="paragraph mb-space15 md:mb-space30">
                  During their stay, Yudhishthira Maharaj had a divine dream in which Balaram revealed the glories of Navadvip. In this vision, Balaram explained that in the age of Kali, Sri Krishna would appear in Navadvip as Sri Chaitanya to perform His transcendental pastimes. He also revealed that he himself would take birth in the village of Ekachakra to participate in these divine pastimes.
                  </p>
                 
                </div>
              </div>
            </section>
            {/* images   */}
            <section className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden">
                <img
                  src="/assets/images/islands/08-modrumdvip/Mahatpur.jpg"
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
                  src="/assets/images/islands/00-general/P3194410.JPG"
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
            </section>
          
  
  
  
  
  
  
  
          </section>
      );
};

export default Mahatpur;