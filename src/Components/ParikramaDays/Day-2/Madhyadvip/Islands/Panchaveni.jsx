import React from "react";

const Panchaveni = () => {
  return (
    <section id="Panchaveni">
      <div
        id="23"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.4
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Panchaveni{" "}
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Gateway to Liberation
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Panchaveni, meaning “five rivers,” is the confluence of five
              sacred streams: three branches of the Ganga—Bhagirathi, Mandakini,
              and Alakananda—along with the Yamuna and the unmanifested
              Saraswati. This sacred site is also referred to as Maha-Prayag by
              saintly persons and sages.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              In ancient times, Brahma and great saintly personalities performed
              millions of fire sacrifices at this very spot. According to
              Navadvip-Bhava-Taranga, the waters of Panchaveni hold unparalleled
              sanctity, as Sri Chaitanya and His associates bathed here,
              purifying the waters by absorbing the immense sins of the world.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              It is said that anyone who bathes in Panchaveni will be liberated
              from the cycle of birth and death, never again returning to the
              material world. Even great scholars such as Vedavyasa affirm that
              no place is more sacred than Panchaveni.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
        {/* 1st img  */}
        <div className="hidden col-start-1 col-span-2">
          <img
            src="/assets/images/islands/04-madhyadvip/04-panchaveni/Pancaveni.jpg"
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
            src="/assets/images/islands/04-madhyadvip/04-panchaveni/panchaveni.jpg"
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
            src="/assets/images/islands/00-general/DSC00867.JPG"
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
    </section>
  );
};

export default Panchaveni;
