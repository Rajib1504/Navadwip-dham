import React from "react";

const SriChaitanyaMath = () => {
  return (
    <section id="Sri Chaitanya Math">
    
      <div
        id="9"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.9
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Chandra Shekhara Bhavan (Sri Chaitanya Math)
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The headquarters of Sri Chaitanya’s preaching mission{" "}
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              During the time of Sri Chaitanya, this was the residence of
              Chandra Shekhar Acharya, Sri Chaitanya’s maternal uncle. Chandra
              Shekhar was a great devotee, and his wife was the sister of Sachi
              Devi, Sri Chaitanya's mother.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Sri Chaitanya would organize theatrical performances here, where
              He would play various divine roles—sometimes as Rukmini, other
              times as Maha Lakshmi, the Universal Mother—bringing delight to
              His close associates.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              This place was also chosen by Srila Prabhupad Bhakti Siddhanta
              Saraswati Goswami Thakur, who took an extraordinary vow to chant
              one billion Holy Names. He lived here in a simple hut for nearly
              nine years, observing strict austerities, eating frugally, and
              sleeping on the floor.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Later, this place became the headquarters of Sri Chaitanya’s
              preaching mission, known as Sri Chaitanya Math or Adi Math.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Srila Prabhupad used to call this place Vraj-pattana, the place
              where Vrindavan is manifested. To embody this spirit, he
              established a replica of Govardhan Hill, along with two sacred
              ponds representing Radha-kunda and Shyama-kunda, evoking the mood
              of Vrindavan.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The presiding deities here are Sri Sri Guru-Gauranga Gandharvika
              Giridhari, personally installed by Srila Prabhupad. His samadhi is
              also located here, alongside the samadhi of his revered spiritual
              master, Srila Gaura Kishor Das Babaji Maharaj.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
        {/* 1st img  */}
        <div className="hidden col-start-1 col-span-2">
          <img
            src="/assets/images/islands/01-antardvip/09-adi-math/1.adimath.jpg"
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
            src="/assets/images/islands/01-antardvip/09-adi-math/8.IMG_8710.JPG"
            alt=""
            className="md:mb-space60 md:w-[30rem]"
          />
          <div className="relative group md:block hidden">
            {/* <div className="flex border-b justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack  transition-all">
                    <p className="font-primaryLight md:text-textSmall">
                      Open Full Gallery
                    </p>
                    <img src="/→.svg" alt="" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                  </div> */}
          </div>
        </div>
        {/* 3rd img  */}
        <div className="hidden col-start-10 col-span-3">
          <img
            src="/assets/images/islands/01-antardvip/09-adi-math/4.prabhuoad samadi.JPG"
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

export default SriChaitanyaMath;
