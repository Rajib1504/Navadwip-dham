import React from 'react';

const SrivasAngan = () => {
      return (
        <section id='Shrivas_Angan'>
            <div id= "Shrivas Angan">
            <div
              id="4"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                I 1.4
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h2 className=" animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Shrivas Angan
                </h2>
                <p className=" paragraph text-mobileTextRegular md:text-textRegular">
                  The Sacred Site of Sankirtan
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className=" paragraph  mb-space15 md:mb-space30">
                    Shrivas Angan, the home of Shrivas Pandit, is located north of
                    Yogapith.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Just as Yogapith was the center of Sri Chaitanya’s childhood
                    and boyhood pastimes, Shrivas Angan became the heart of His
                    sankirtana pastimes. Historically, this was the residence of
                    Shrivas Pandit and his four brothers. For an entire year, Sri
                    Chaitanya and His closest associates gathered here nightly for
                    the ecstatic congregational chanting of the Holy Names
                    (sankirtan).
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    However, the joyful kirtan disturbed the atheistic residents,
                    who complained to the local ruler, Chand Kazi. In response,
                    Chand Kazi arrived with his soldiers and broke the devotees’
                    drum—mridanga—as a warning to stop their nocturnal singing.
                    This event led to the site being known as Khol Banga
                    Danga—"the place where the drum was broken."
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    The temple’s central altar enshrines Bhagavan Sri Chaitanya,
                    alongside Shrivas Pandit and Gadadhar. The left altar houses
                    Sri Sri Radha-Krishna, while the right altar features the
                    Pancha-Tattva deities, with a broken mridanga placed at the
                    center as a powerful reminder of this historic event.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden col-start-1 col-span-2">
                <img
                  src="/assets/images/islands/01-antardvip/04-srivas-angan/1.srivas angan.jpg"
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
                  src="/assets/images/islands/01-antardvip/04-srivas-angan/2.IMG_8680.JPG"
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
                <img src="/assets/images/islands/01-antardvip/04-srivas-angan/3.IMG_8711.JPG" className="w-[100vw] md:w-auto" alt="" />
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

export default SrivasAngan;