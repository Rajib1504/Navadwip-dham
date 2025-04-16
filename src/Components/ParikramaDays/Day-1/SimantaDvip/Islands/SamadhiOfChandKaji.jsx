import React from "react";
import usetextAnimation from "../../../../../Hooks/UsetextAnimation";

const SamadhiOfChandKaji = () => {
  const containerRef = usetextAnimation()
  return (
    <section id="Samadhi of Chand Kazi">
    
      <div
        id="12"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 2.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Samadhi of Chand Kazi
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Place of Unity and Transformation
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Chand Kazi’s samadhi is considered non-different from Mathura
              because Chand Kazi himself is regarded as Kamsa in Krishna’s
              pastimes.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Back in the day, Chand Kazi was the powerful administrator of
              Navadvip, serving under the rule of Hossain Shah. He wasn’t too
              pleased with the loud kirtans happening every night at Srivas
              Angan. One day, he came there with his soldiers, broke the
              devotees’ mridanga, and ordered them to stop chanting. But that
              only set something much bigger in motion.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Word spread fast, and Sri Chaitanya didn’t take it lightly. He
              rallied the entire town for a massive sankirtan procession.
              Thousands of people flooded the streets, singing and dancing with
              unshakable determination. When they reached Kazi's house, he was
              so shaken that he locked himself inside.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              But Sri Chaitanya, always merciful, called out to him, assuring
              that no harm would come. He even addressed him as “uncle,”
              softening the tension. Kazi finally stepped out and revealed why
              he was so afraid.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The night he had broken the mridanga, he had a terrifying dream. A
              fierce, half-lion, half-man being sat on his chest, warning him
              never to stop the chanting of the Holy Name again—or else. When
              Kazi woke up, the creature’s claw marks were still on his body, a
              chilling reminder that this was no ordinary dream.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              That night changed everything. Realizing Sri Chaitanya’s divine
              power, Chand Kazi surrendered, embracing the Gaudiya philosophy
              along with his entire family.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              His samadhi remains a sacred place to this day, and an ancient
              champaka tree grows on top of it. What’s truly mysterious is that
              even though the trunk is completely hollow, the tree blooms all
              year round.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
        {/* 1st img  */}
        <div className="hidden paragraph col-start-1 col-span-2">
          <img
            src="/assets/images/islands/02-simantadvip/03-chand-kazi-samadhi/DSC00931-min.JPG"
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
        <div className="hidden col-start-5 col-span-4">
          <img
            src="/assets/images/islands/02-simantadvip/03-chand-kazi-samadhi/DSC00932-min.JPG"
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
        <div className="hidden col-start-10 col-span-3">
          <img
            src="/assets/images/islands/02-simantadvip/03-chand-kazi-samadhi/IMG20230227100859-min.jpg"
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

export default SamadhiOfChandKaji;
