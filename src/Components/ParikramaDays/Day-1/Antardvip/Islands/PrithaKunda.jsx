import React from 'react';

const PrithaKunda = () => {
      return (
            <div id="Pritha-kunda">
          <div
            id="8"
            className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
              I 1.8
            </p>

            {/* Second Box (Centered by default) */}
            <div className="col-start-5 col-span-5  w-full mr-space30 ">
              <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Prithu-kunda
              </h4>
              <p className="text-mobileTextRegular md:text-textRegular">
                Lake of the King Prithu
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className="mb-space15 md:mb-space30">
                  Prithu-kunda—a sacred spot on the way to Chaitanya Math—brims
                  with both historical and spiritual significance.
                </p>
                <p className="mb-space15 md:mb-space30">
                  In ancient times, during Satya-yuga, Prithu Maharaj, a
                  powerful ruler and an incarnation of Sri Krishna’s energies,
                  traveled the land, bringing prosperity to his people. Not just
                  a righteous king, he was a guardian of dharma, crowned by
                  great sages and brahmanas. When there was a famine and the
                  earth became unfertile, Prithu Maharaj, through his divine
                  power, restored fertility to the land, ensuring the welfare of
                  all living beings.
                </p>
                <p className="mb-space15 md:mb-space30">
                  Upon arriving in Navadvip, he discovered a radiant light
                  emanating from a particular spot. Recognizing the sacredness
                  of the place, he decided to dig a lake, which became known as
                  Prithu-kunda. Its pure and revitalizing waters became a
                  cherished blessing for generations.
                </p>
                <p className="mb-space15 md:mb-space30">
                  Centuries later, King Lakshman Sena, seeking to honor his
                  ancestors, expanded the lake and renamed it Ballal Dighi, in
                  tribute to his father, Ballal Sena. While the lake no longer
                  remains, the ruins of King Ballal Sena’s ancient palace still
                  stand—silent, yet powerful, testaments to the deep history and
                  sanctity of this place.{" "}
                </p>
                <p className="mb-space15 md:mb-space30">
                  Prithu Maharaj exemplifies the limb of devotion known as
                  archanam (worshiping). He dedicated all his wealth to the
                  service of Bhagavan, demonstrating the ideal of selfless
                  devotion.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* images   */}
          <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
            {/* 1st img  */}
            <div className="">
              <img
                src="/assets/images/islands/01-antardvip/08-prithu-kunda/IMG_8695.JPG"
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
              <img src="/assets/images/islands/01-antardvip/08-prithu-kunda/prithu-kunda.jpg" alt="" className="md:mb-space60  " />
              {/* <div className="relative group  hidden">
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
            <div>
              {/* <div className="relative group hidden  mt-spacelg">
                <div className="flex border-b border-accentBlack justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2   text-primaryBlack transition-all">
                  <p className="font-primaryLight text-mobileTextRegular ">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-[263px] group-focus:w-[263px]"></span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      );
};

export default PrithaKunda;