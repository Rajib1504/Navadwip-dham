import React from 'react';

const Vidyanagar = () => {
      return (
            <div id='Vidya Nagar'>
            <div
              id="30"
              className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 6.2
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                 Vidyanagar
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                  The Abode of All Wisdom{" "}
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                    Vidyanagar is located on the island of Ritudvip and derives
                    its name from the presence of all forms of knowledge (vidya)
                    that take shelter here, rooted in the Vedas. This sacred place
                    has been associated with the origins of wisdom since ancient
                    times. When Bhagavan appeared as Matsya (the fish
                    incarnation), He brought all the Vedas to this very spot.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    At the time of creation, Maya, the illusory energy that binds
                    all living beings in the material world, also manifests.
                    However, the compassionate sages who take shelter in
                    Vidyanagar, known as a siddha-pith (a perfected spiritual
                    site), illuminate the path to liberation by dispelling the
                    darkness of ignorance through various forms of knowledge.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Vidyanagar is home to sixty-four types of knowledge, all of
                    which can be learned here. Among them are the sciences of
                    medicine (Ayurveda), military arts (Dhanurveda), philosophy,
                    mantras, yoga, and devotional service. Many exalted
                    personalities gained wisdom here:
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Muni Valmiki was inspired here to compose the Ramayana, a
                    transcendental epic.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Dhanvantari imparted the science of Ayurveda.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Vishwamitra and others mastered the science of military
                    strategy, Dhanurveda.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Shaunaka and other sages recited Vedic mantras.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Shiva discussed Tantra here.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Brahma, at the request of the sages, compiled the four Vedas.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Kanada proposed the Vaisheshika philosophy, which focused on
                    atomic theory.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Patanjali formulated the Yoga Sutras.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Jaimini compiled the Mimamsa philosophy, emphasizing karma.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Vedavyasa composed the Puranas.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Narada and four other sages composed the Pancaratra, a
                    scripture on devotional service.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Even the personalized Shrutis (embodied Upanishads) worshipped
                    Sri Chaitanya in this forest. Bhagavan chastised Shruti for
                    their contamination by impersonal knowledge, and they only
                    attained His mercy when He descended as Sri Chaitanya. He
                    attracted them to become His associates through His sweet and
                    transcendental activities.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="">
                <img
                  src="/assets/images/islands/00-general/DSC01792.JPG"
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
                <img src="/assets/images/islands/00-general/DSC01793.JPG" alt="" className="md:mb-space60  " />
                {/* <div className="relative group md:block hidden">
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
              {/* <div>
                <div className="relative group md:hidden block mt-spacelg">
                  <div className="flex border-b border-accentBlack justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2   text-primaryBlack transition-all">
                    <p className="font-primaryLight text-mobileTextRegular ">
                      Open Full Gallery
                    </p>
                    <img src="/→.svg" alt="" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
      );
};

export default Vidyanagar;