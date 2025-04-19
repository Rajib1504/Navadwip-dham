import React from "react";

const DevanandaGaudiyaMath = () => {
  return (
    <section id="Devananda Gaudiya Math">
        <div
          id="25"
          className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
        >
          {/* First Box (Starts from top) */}
          <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            III 5.2
          </p>

          {/* Second Box (Centered by default) */}
          <div className="col-start-5 col-span-5  w-full  ">
            <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Devananda Gaudiya Math
            </h2>
            <p className="paragraph text-mobileTextRegular md:text-textRegular">
              To the north and west of Koladvip lies a region comparable to
              Bahulavan, the pastime place of the divine couple in Vrindavan.
            </p>
            {/* description  */}
            <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
              <p className="paragraph mb-space15 md:mb-space30">
                In this sacred area, Srila Bhakti Prajnana Keshav Goswami
                Maharaj established the Devananda Gaudiya Math to fulfill the
                cherished desire of his spiritual master, Srila Prabhupad Bhakti
                Siddhanta Saraswati Thakur.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                The temple’s main altar is divided into three sections. The
                first section houses the murti of Srila Prabhupad, the second
                enshrines the deities of Sri Sri Radha-Vinod, and the third
                contains the deity of Lord Varahadeva.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                Srila Prabhupad had expressed a desire for the installation of
                Kola Deva at this location, and this was realized through the
                dedicated efforts of Srila Keshav Maharaj.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                The temple’s nine towers symbolize the nine types of devotional
                service. Additionally, its samadhi mandir is situated near the
                main hall, directly in front of the temple.
              </p>
            </div>
          </div>
        </div>
        {/* images   */}
        <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
          {/* 1st img  */}
          <div className="hidden col-start-1 col-span-3">
            <img
              src="/assets/images/islands/05-koladvip/02-devananda-gaudiya-math/2.IMG_8364.JPG"
              className="md:w-auto w-[100vw]"
              alt=""
            />
          </div>
          {/* 2nd img  */}
          <div className="hidden col-start-5 col-span-4">
            <img
              src="/assets/images/islands/05-koladvip/02-devananda-gaudiya-math/3.IMG_8430.JPG"
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
              src="/assets/images/islands/05-koladvip/02-devananda-gaudiya-math/5.IMG20230301060723-min.jpg"
              className="w-[100vw] md:w-auto"
              alt=""
            />

            {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
          </div>
        </div>
      
    </section>
  );
};

export default DevanandaGaudiyaMath;
