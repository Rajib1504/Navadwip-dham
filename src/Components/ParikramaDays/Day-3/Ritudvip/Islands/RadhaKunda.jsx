import React from "react";

const RadhaKunda = () => {
  return (
    <section id="Radha_Kunda">
      <div id="Radha Kunda">
        <div
          id="29"
          className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
        >
          {/* First Box (Starts from top) */}
          <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            III 6.1
          </p>

          {/* Second Box (Centered by default) */}
          <div className="col-start-5 col-span-5  w-full mr-space30 ">
            <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Radha Kunda
            </h4>
            <p className="text-mobileTextRegular md:text-textRegular">
              The Pond of Molten Love
            </p>
            {/* description  */}
            <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
              <p className="mb-space15 md:mb-space30">
                When Nityananda Prabhu arrived at this place with Jiva Goswami
                and other devotees, he became immersed in the mood of Balaram.
                Like a cowherd boy, he suddenly called for a horn to gather the
                cows, overcome with longing for Sri Krishna and His companions.
              </p>
              <p className="mb-space15 md:mb-space30">
                When the devotees reminded him that Sri Chaitanya had taken
                sannyasa and departed for Nilachal, Nityananda collapsed in
                sorrow, rolling in the dust with tears streaming down his face.
                For over an hour, he remained in deep ecstasy, appearing as if
                he had lost all desire to live.
              </p>
              <p className="mb-space15 md:mb-space30">
                To revive Him, the devotees began chanting the glories of Sri
                Chaitanya. As soon as he heard His beloved Lord’s name,
                Nityananda regained awareness. Filled with emotion, he then
                revealed the sacred nature of this place.
              </p>
              <p className="mb-space15 md:mb-space30">
                He explained that Sri Chaitanya comes here every day after
                lunch, chanting the Holy Names and freely distributing His
                boundless love to all, for this place is non-different from
                Radha-kunda in Vrindavan.
              </p>
            </div>
          </div>
        </div>
        {/* images   */}
        <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
          {/* 1st img  */}
          <div className="col-start-1 col-span-3">
            <img
              src="/assets/images/islands/06-ritudvip/Ritudvip radha kund.JPG"
              className="md:w-auto w-[100vw]"
              alt=""
            />
          </div>
          {/* 2nd img  */}
          {/* <div className=" col-start-5 col-span-4">
              <img
                src="/assets/images/islands/00-general"
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
          {/* <div className="col-start-11 col-span-2">
              <img
                src="/assets/images/islands"
                className="w-[100vw] md:w-auto"
                alt=""
              /> */}

          {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana
                accompanied by His two consorts, Vishnupriya and Lakshmipriya.
              </p> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default RadhaKunda;
