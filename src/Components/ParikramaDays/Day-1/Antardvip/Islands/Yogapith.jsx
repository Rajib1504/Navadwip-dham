import React from "react";

const Yogapith = () => {
  return (
    <section id="yogpith">
   
      <div
        id="3"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className=" animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Yogpith
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Birthplace of Sri Chaitanya Mahaprabhu
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className=" paragraph mb-space15 md:mb-space30">
              Upon entering Yogapith, the first sacred site to visit is the
              Pushpa Samadhi of Srila Bhakti Vinod Thakur, located on the right.
              Thanks to his tireless efforts, we now know Sri Chaitanya’s exact
              birthplace. Seeking his blessings is the first step in honoring
              this holy place.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The main temple houses a grand altar divided into three sections:
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Center: Sri Gaura Narayana stands with His two consorts,
              Vishnupriya and Lakshmipriya. This altar also features a rare
              four-armed deity of Adhokshaja Vishnu, discovered during the
              temple’s excavation, worshipped alongside His consorts, Bhu Devi
              and Lakshmi Devi.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Left: The deities of Sri Sri Radha Madhava and Sri Chaitanya.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Right: The Pancha-Tattva deities, along with Lord Jagannath.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              A sacred Neem tree marks the very birthplace of Sri Chaitanya.
              Beside it stands a small shrine depicting Jagannath Mishra and
              Sachi Devi lovingly holding baby Nimai in her arms.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Behind this tree is the temple of Gopeshwar Mahadev. As the
              guardian of the Holy Dham, Lord Shiva reveals its spiritual
              essence to sincere devotees. The Shiva-lingam worshipped here was
              originally discovered near Shiva-doba, adjacent to Vriddha
              Shiva-ghat, and now resides in Yogapith alongside a smaller linga
              of Gopeshwar Mahadev.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The Yogapith complex also features the deities of Lakshmi
              Narasimha and Gaura-Gadadhara, located behind the main temple
              hall. Nearby, the sacred Gaura-kunda further enhances the sanctity
              of this divine place.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
        {/* 1st img  */}
        <div className="hidden col-start-1 col-span-2">
          <img
            src="/assets/images/islands/01-antardvip/03-yogapith/12.DSC01094.JPG"
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
            src="/assets/images/islands/01-antardvip/03-yogapith/10.IMG_1546 (1).JPG"
            alt=""
            className="md:mb-space60 md:w-[30rem]"
          />
          {/* <div className="relative group  hidden">
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
            src="/assets/images/islands/01-antardvip/03-yogapith/1.6053707A-EF1C-4F53-AB11-A0146A77C947-min.JPG"
            className="w-[100vw] md:w-auto"
            alt=""
          />
          {/* <div className="relative group md:hidden hidden mt-spacelg">
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

export default Yogapith;
