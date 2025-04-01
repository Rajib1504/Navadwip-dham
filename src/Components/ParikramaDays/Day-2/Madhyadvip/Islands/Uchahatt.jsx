import React from "react";

const Uchahatt = () => {
  return (
    <section id="Uchchahata">
      <div
        id="22"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full mr-space30 ">
          <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Uchahatt
          </h4>
          <p className="text-mobileTextRegular md:text-textRegular">
            The Land of Joyful Chanting
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="mb-space15 md:mb-space30">
              Ucchahatt is a sacred place non-different from Kurukshetra of
              Brahmavarta, the divine land stretching between the Yamuna and the
              Ganga. Within this part of Madhyadvip, all the holy places of
              Brahmavarta are said to be present.
            </p>
            <p className="mb-space15 md:mb-space30">
              The name “Ucchahatt” derives from the joyful market (hatt) of
              glorifications offered by the Gods and Goddesses, led by Indra, in
              honor of Sri Chaitanya and His divine pastimes.
            </p>
            <p className="mb-space15 md:mb-space30">
              It is said that Sri Chaitanya Himself, accompanied by His
              associates, visited this place to blissfully chant the Holy Names.
              Situated on the border of Navadvip, Ucchahatt holds immense
              spiritual potency. The merit of residing in Kurukshetra for a
              hundred years can be attained by staying here for just one day.
              Simply visiting this sacred site bestows the priceless treasure of
              love of God.
            </p>
            <p className="mb-space15 md:mb-space30">
              Even today, fortunate souls may still hear the celestial music and
              prayers offered by the Gods and Goddesses to Sri Chaitanya,
              resonating in the air of this holy land.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
        {/* 1st img  */}
        <div className="col-start-1 col-span-2">
          <img
            src="/assets/images/islands/00-general/DSC00868.JPG"
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
            src="/assets/images/islands/00-general/_MG_2055.JPG"
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
            src="/assets/images/islands/00-general/_MG_2380.JPG"
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

export default Uchahatt;
