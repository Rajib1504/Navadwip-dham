import React from "react";

const BrahmanPushkar = () => {
  return (
    <section id="Pushkar">
      <div
        id="21"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.2
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full mr-space30 ">
          <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Brahman Pushkar
          </h4>
          <p className="text-mobileTextRegular md:text-textRegular">
            The Sacred Pond of Devotion
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="mb-space15 md:mb-space30">
              In Satya-yuga, there lived a brahman named Jivan Das who had
              renounced his home to embark on a pilgrimage. During his journey,
              he reached Navadvip, where a sage appeared to him in a dream. The
              sage instructed him to stay in Navadvip to attain devotion for
              Bhagavan, emphasizing that this is the ultimate goal of life.
              Following this divine guidance, Jivan Das built a small hut and
              dedicated himself to the path of devotion for the rest of his
              life.
            </p>
            <p className="mb-space15 md:mb-space30">
              As he grew older, Jivan Das remembered his deep desire to live in
              Pushkar Tirtha. However, his advanced age made it impossible for
              him to travel there, and this filled him with sadness.sensing his
              distress, the personified Pushkar Tirtha appeared before him in
              the form of a brahman and instructed him to bathe in a pond
              located in front of his house. By doing so, Jivan Das would
              experience the spiritual essence of Pushkar Tirtha.
            </p>
            <p className="mb-space15 md:mb-space30">
              Following the brahmana’s advice, Jivan Das bathed in the pond and
              was blessed with a divine vision of Pushkar Tirtha. Overcome with
              bliss, he listened as the personified Pushkar explained that all
              the holy places are eternally present in the sacred land of
              Navadvip. The brahman declared, “We all reside here eternally,
              serving this holy place.” He further revealed that Sri Chaitanya
              would appear in Kali-yuga, along with His associates, to bestow
              the bliss of divine love upon all.
            </p>
            <p className="mb-space15 md:mb-space30">
              The brahman explained that even the most fallen sinner could
              attain love of God by worshiping Sri Chaitanya in Navadvip. He
              urged Jivan Das to continue practicing devotional service in this
              sacred land to receive the special mercy of Sri Chaitanya.
            </p>
            <p className="mb-space15 md:mb-space30">
              Hearing this, Jivan Das resolved to remain in Navadvip. He engaged
              wholeheartedly in service and worship of Sri Chaitanya. Later, a
              divine voice assured him that by chanting the Holy Names, he would
              participate in Sri Chaitanya’s future pastimes.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-center gap-4 items-start ">
        {/* 1st img  */}
        <div className="col-start-1 col-span-3">
          <img
            src="/assets/images/islands/04-madhyadvip/02-brahman-pushkar/Brahman-Pushkar-min-min.jpg"
            className="md:w-auto w-[100vw]"
            alt=""
          />
        </div>
        {/* 2nd img  */}
        {/* <div className=" col-start-5 col-span-4">
              <img
                src="/assets/images/islands"
                alt=""
                className="md:mb-space60 md:w-[30rem]"
              /> */}
        {/* <div className="relative group md:block hidden">
                <div className="flex border-b justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack  transition-all">
                  <p className="font-primaryLight md:text-textSmall">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                </div>
              </div> */}
        {/* </div> */}
        {/* 3rd img  */}

        {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana
                accompanied by His two consorts, Vishnupriya and Lakshmipriya.
              </p> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default BrahmanPushkar;
