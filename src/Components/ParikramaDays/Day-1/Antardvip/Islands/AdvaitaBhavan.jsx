import React from "react";

const AdvaitaBhavan = () => {
  return (
    <section id="Adviata_Bhavan">
      <div id="Advaita Bhavan">
        <div
          id="5"
          className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
        >
          {/* First Box (Starts from top) */}
          <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            I 1.5
          </p>

          {/* Second Box (Centered by default) */}
          <div className="col-start-5 col-span-5  w-full mr-space30 ">
            <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Adviata Bhavan
            </h2>
            <p className="paragraph text-mobileTextRegular md:text-textRegular">
              The Center of Spiritual Discussions
            </p>
            {/* description  */}
            <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
              <p className="paragraph mb-space15 md:mb-space30">
                After relocating from Shantipur to Navadvip, Advaita Bhavan
                became the permanent residence of Advaita Acharya.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                As a revered teacher, he instructed many disciples in the sacred
                scriptures, including the Srimad Bhagavad Gita. Among them was
                Vishvarup, Sri Chaitanya’s elder brother.{" "}
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                During His childhood, Chaitanya often visited Advaita Acharya’s
                home to call His brother for dinner at their mother’s request.
                During these visits, Advaita Acharya first met Chaitanya and was
                deeply moved by His divine presence and extraordinary qualities.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                Advaita Bhavan became a center for spiritual discussions, where
                Advaita Acharya and his associates deeply studied the nature of
                the Absolute Truth.{" "}
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                Here, with unwavering devotion, Advaita Acharya earnestly prayed
                for Bhagavan to descend into this world. He worshipped Lord
                Vishnu in the form of a shaligram, offering flowers and tulasi
                leaves with deep devotion. His prayers were answered with the
                divine appearance of Sri Chaitanya.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* images   */}
        <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
          {/* 1st img  */}
          <div className="">
            <img
              src="/assets/images/islands/01-antardvip/05-advaita-bhavan/1.IMG_8675.JPG"
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
            <img
              src="/assets/images/islands/01-antardvip/05-advaita-bhavan/2.advaita bhavan.jpg"
              alt=""
              className="md:mb-space60  "
            />
            {/* <div className="relative group  hidden">
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
          <div>
            {/* <div className="relative group hidden  mt-spacelg">
                  <div className="flex border-b border-accentBlack justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2    transition-all">
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
    </section>
  );
};

export default AdvaitaBhavan;
