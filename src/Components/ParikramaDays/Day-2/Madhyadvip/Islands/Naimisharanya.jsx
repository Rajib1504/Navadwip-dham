import React from "react";

const Naimisharanya = () => {
  return (
    <section id="Naimisharanya">
      <div
        id="20"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full mr-space30 ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Naimisharanya
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The forest where the glories of Sri Chaitanya are celebrated
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              To the south of the village of Marjida, the Gomati River flows
              gracefully, its banks home to the sacred site of Naimisharanya.
              This revered place is renowned for the unique deity of
              Hamsa-vahana—Lord Shiva seated upon a swan, the celestial carrier
              of Brahma.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The history of this site dates back to ancient times. During the
              age of Kali, as its influence grew, many great sages, led by
              Shaunaka Rishi, gathered at Naimisharanya to hear the
              Gaura-Bhagavata from the lips of Suta Goswami. Shiva, eager to
              attend this divine assembly, faced a delay due to his slow
              movement. Desiring a way to reach in time, he appealed to Brahma,
              who granted him his celestial swan. Seated upon it, Shiva swiftly
              arrived at Naimisharanya and participated in the transcendental
              discourse glorifying the pastimes of Sri Chaitanya.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Upon hearing the Gaura-Bhagavata, Shiva was overcome with ecstasy,
              and along with his associates, he began to chant the Holy Name of
              Sri Chaitanya. In a state of rapture, they showered flowers upon
              him, celebrating his devotion.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              A unique tradition of this temple is its annual festival, during
              which the Shiva-linga deity is bathed continuously for three days
              to prevent overheating. This phenomenon is attributed to Shiva’s
              intense desire to see Sri Chaitanya. In ancient times, to cool the
              deity, it was immersed in the sacred waters of the Gomati River.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
        {/* 1st img  */}
        <div className="hidden">
          <img
            src="/assets/images/islands/04-madhyadvip/01-naimisharanya/82760332_30564837bf_c.jpg"
            className="md:w-auto w-[100vw]"
            alt=""
          />
          {/* <p className="md:block hidden md:text-textSmall mt-space30 w-[200px] font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
        </div>
        {/* 2nd img  */}
        <div className=" hidden">
          <img
            src="/assets/images/islands/04-madhyadvip/01-naimisharanya/82760433_f683237268_c.jpg"
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
      </div>
    </section>
  );
};

export default Naimisharanya;
