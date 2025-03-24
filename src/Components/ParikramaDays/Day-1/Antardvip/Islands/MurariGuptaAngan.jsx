import React from "react";

const MurariGuptaAngan = () => {
  return (
    <section id="Murari_Gupta_Angan">
      <div id="Murari Gupta Angan">
        <div
          id="7"
          className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
        >
          {/* First Box (Starts from top) */}
          <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            I 1.7
          </p>

          {/* Second Box (Centered by default) */}
          <div className="col-start-5 col-span-5  w-full mr-space30 ">
            <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Murari Gupta Angan
            </h4>
            <p className="text-mobileTextRegular md:text-textRegular">
              Residence of Murari Gupta
            </p>
            {/* description  */}
            <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
              <p className="mb-space15 md:mb-space30">
                Murari Gupta’s residence is located on the eastern side of
                Yogapith, where the deities of Sri Sita, Rama, Lakshmana, and
                Hanuman are worshipped.
              </p>
              <p className="mb-space15 md:mb-space30">
                A great scholar and a devoted follower of Lord Ramachandra,
                Murari Gupta was also a renowned Ayurvedic physician. While he
                treated physical ailments, his teachings and exemplary conduct
                had the unique ability to heal the hearts of those around him.
              </p>
              <p className="mb-space15 md:mb-space30">
                In his youth, Murari Gupta studied alongside Sri Chaitanya at
                the school of Ganga Das Pandit, where he was deeply impressed by
                Sri Chaitanya’s vast knowledge and sharp intellect. Their
                discussions often turned into lively debates on various topics.
                Over time, Murari Gupta became one of Sri Chaitanya’s closest
                associates.
              </p>
            </div>
          </div>
        </div>
        {/* images   */}
        <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
          {/* 1st img  */}
          <div className="col-start-1 col-span-2">
            <img
              src="/assets/images/islands/01-antardvip/07-murari-gupta-angan/1.photo_4_2025-01-20_20-10-29.jpg"
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
              src="/assets/images/islands/01-antardvip/07-murari-gupta-angan/2.IMG_8363.JPG"
              alt=""
              className="md:mb-space60 md:w-[30rem]"
            />
            {/* <div className="relative group md:block hidden">
                  <div className="flex border-b justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack text-primaryBlack transition-all">
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
              src="/assets/images/islands/01-antardvip/07-murari-gupta-angan/3.murari-gupta-house.JPG"
              className="w-[100vw] md:w-auto"
              alt=""
            />
            {/* <div className="relative group md:hidden block mt-spacelg">
                  <div className="flex border-b justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2  border-accentBlack text-primaryBlack transition-all">
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

export default MurariGuptaAngan;
