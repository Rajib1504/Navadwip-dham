import React from 'react';

const GadadharAngan = () => {
      return (
            <div>
            <div
              id="6"
              className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                I 1.6
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-6  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Gadadhar Angan
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                  Residence of Gadadhara Pandit{" "}
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                    The residence of Gadadhar Pandit is located near Advaita
                    Bhavan. He was born to Madhav Mishra and Ratnavati, who hailed
                    from the Chattamata district in present-day Bangladesh.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    From a young age, Gadadhar Pandit was closely connected with
                    Sri Chaitanya. Even as a child, he was known for his serene
                    nature and humble disposition.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    On one occasion, Sri Chaitanya asked Gadadhar Pandit about the
                    nature of liberation (moksha). Although Gadadhar gave the
                    correct answer, Sri Chaitanya continued to challenge him in
                    debate. Feeling overwhelmed by this, Gadadhar Pandit distanced
                    himself from Chaitanya’s association.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Later, Gadadhar Pandit moved to Puri to stay near Sri
                    Chaitanya. He is revered as the incarnation of Srimati
                    Radharani. With Sri Chaitanya’s blessings, he received
                    initiation from Pundarik Vidyanidhi, a great devotee of Sri
                    Krishna Bhagavan.{" "}
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    In the final years of his life, Gadadhar Pandit took the vow
                    of kshetra sannyasa, a form of renunciation that bound him to
                    remain in Puri. He devoted himself to the worship of his
                    beloved deity, Tota-Gopinath.{" "}
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Sri Chaitanya would frequently visit Gadadhar Pandit to listen
                    to his soulful and melodic recitations of the Srimad
                    Bhagavatam.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="col-start-1 col-span-2">
                <img
                  src="/assets/images/islands/01-antardvip/06-gadadhar-angan/1.gadhar angan.jpg"
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
                  src="/assets/images/islands/01-antardvip/06-gadadhar-angan/2.IMG_8677.JPG"
                  alt=""
                  className="md:mb-space60 md:w-[30rem]"
                />
                {/* <div className="relative group md:block hidden">
                  <div className="flex border-b-2 justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack text-primaryBlack transition-all">
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
                <img src="/assets/images/islands/01-antardvip/06-gadadhar-angan/3.gadadhar angan.jpg" className="w-[100vw] md:w-auto" alt="" />
                {/* <div className="relative group md:hidden block mt-spacelg">
                  <div className="flex border-b-2 justify-between gap-spacelg w-[263px] items-center  px-4 font-primayRegular py-2  border-accentBlack text-primaryBlack transition-all">
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
      );
};

export default GadadharAngan;