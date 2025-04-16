import React from 'react';

const SamudraGarh = () => {
      return (
            <section id='Samudragarh'>
          <div
            id="26"
            className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
              III 5.3
            </p>

            {/* Second Box (Centered by default) */}
            <div className="col-start-5 col-span-5  w-full  ">
              <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Samudra Garh
              </h2>
              <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Palace of the King Samudrasen
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className="paragraph mb-space15 md:mb-space30">
                  This sacred place is considered non-different from Dvaraka and
                  associated with Ganga Sagar. In ancient times, a pious king
                  named Samudrasen ruled this land and became renowned for his
                  devotion to Sri Krishna.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  During this period, Bhima, one of the five Pandavas, arrived
                  to collect tribute on behalf of Maharaj Yudhishthira. Known
                  for his strength, Bhima would challenge any kingdom that
                  refused to pay. However, King Samudrasen, aware of Bhima’s
                  deep devotion to Sri Krishna, saw an opportunity to meet Sri
                  Krishna by engaging Bhima in battle.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  A fierce fight ensued, with the king displaying remarkable
                  strength and determination—so much so that Bhima began to fear
                  defeat and dishonor. Seeking help, he prayed to Sri Krishna.
                  Responding to Bhima’s plea and wishing to pacify Samudrasen’s
                  resolve, Sri Krishna appeared before the king in His original
                  form, adorned with yellow garments and brilliant jewels.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  A fierce fight ensued, with the king displaying remarkable
                  strength and determination—so much so that Bhima began to fear
                  defeat and dishonor. Seeking help, he prayed to Sri Krishna.
                  Responding to Bhima’s plea and wishing to pacify Samudrasen’s
                  resolve, Sri Krishna appeared before the king in His original
                  form, adorned with yellow garments and brilliant jewels.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  Overjoyed, the king revealed his long-cherished desire to see
                  Krishna in His Vrindavan pastimes. However, bound by his vow
                  to remain in Navadvip, he had been unable to do so. He eagerly
                  requested Krishna to reveal the form He would assume in His
                  future incarnation.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  Hearing the king’s heartfelt plea, Sri Krishna first granted
                  him visions of His Vrindavan pastimes, including His divine
                  sports with Srimati Radharani and the gopis in Kumudvan
                  forest. Then, He revealed His radiant form as Sri
                  Chaitanya—immersed in the ecstatic chanting of the Holy Name,
                  surrounded by His loving associates.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  Overwhelmed with bliss, the king offered prayers of
                  glorification. But suddenly, Bhagavan disappeared from his
                  vision, leaving him grief-stricken and tormented by
                  separation.
                </p>
                <p className="paragraph mb-space15 md:mb-space30">
                  Unaware of the divine encounter, Bhima misinterpreted the
                  king’s tears as a sign of fear and launched a full-force
                  attack. In the end, King Samudrasen submitted to Bhima and
                  paid the required tribute, allowing Bhima to fulfill his
                  mission.
                </p>
              </div>
            </div>
          </div>
          {/* images   */}
          <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
            {/* 1st img  */}
            <div className="hidden col-start-1 col-span-3">
              <img
                src="/assets/images/islands/00-general/DSC01293.JPG"
                className="md:w-auto w-[100vw]"
                alt=""
              />
            </div>
            {/* 2nd img  */}
            <div className="hidden col-start-5 col-span-4">
              <img
                src="/assets/images/islands/00-general/DSC01384.JPG"
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
                src="/assets/images/islands/00-general/DSC01621.JPG"
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

export default SamudraGarh;