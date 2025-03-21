import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const SriChaitanyaGaudiyaMath = () => {
      return (
            <div  id= "Sri Chaitanya Gaudiya Math">
          <div 
            id="1"
            className=" place md:pt-space60 gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            I 1.1
            </p>

            {/* Second Box (Centered by default) */}
            <div className="col-start-5 col-span-5  w-full ">
              <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Sri Chaitanya Gaudiya Math
              </h4>
              <p className="text-mobileTextRegular md:text-textRegular">
                The Place of Unity and Service
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className="mb-space15 md:mb-space30">
                  Sri Chaitanya Gaudiya Math was founded by Srila Bhakti Dayita
                  Madhav Goswami Maharaj, a distinguished disciple of the
                  world-renowned spiritual master, Srila Prabhupad Bhakti
                  Siddhanta Saraswati Goswami Thakur—the foremost preacher of
                  Sri Chaitanya’s message.{" "}
                </p>
                <p className="mb-space15 md:mb-space30">
                  Srila Madhav Maharaj was a saintly personality known for his
                  unwavering devotion to his spiritual master, strict adherence
                  to Vaishnava principles, and tireless dedication to serving
                  the Vaishnavas.
                </p>
                <p className="mb-space15 md:mb-space30">
                  Srila Prabhupad recognized his boundless enthusiasm and
                  praised him as “volcanic energy.” After Srila Prabhupad’s
                  departure, Srila Madhav Maharaj played a crucial role in
                  uniting his godbrothers to continue spreading Sri Chaitanya’s
                  teachings.
                </p>
              </div>
            </div>
          </div>
          {/* images   */}
          <div className=" bg-none md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
            {/* 1st img  */}
            <div className="col-start-1 col-span-3">
              <img
                src="/assets/images/islands/01-antardvip/01-sri-chaitanya-gaudiya-math/1.SCGM.jpg"
                className="md:w-auto w-[100vw]"
                alt=""
              />
            </div>
            {/* 2nd img  */}
            <div
              // onClick={() => document.getElementById("my_modal_3").showModal()}
              className=" col-start-5 col-span-4"
            >
              <img
                src="/assets/images/islands/01-antardvip/01-sri-chaitanya-gaudiya-math/2.dayita madhava maharaj.JPG"
                alt=""
                className="md:mb-space60 md:w-[30rem]"
              />
              <div className=" relative group  hidden">
                <div className="flex border-b justify-between items-center  px-4 font-primayRegular text-xl py-2  border-accentBlack text-primaryBlack transition-all">
                  <p className="font-primaryLight md:text-textSmall">
                    Open Full Gallery
                  </p>
                  <img src="/→.svg" alt="" />
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all  duration-700 group-hover:w-full group-focus:w-full"></span>
                </div>
              </div>
            </div>

            {/* model  
            <dialog id="my_modal_3" className="modal hidden mt-space15 font-primaryLight">
              <div className="modal-box m-0 p-0 w-11/12 max-w-none h-full bg-primaryBlack grid grid-cols-12">
                
                 
                  <button className="col-start-12 dialog my-space15 col-span-1 text-left justify-end ">   <RxCross2 className="text-heading4 text-primaryWhite border-2 border-primaryWhite rounded-full" />
                  </button>
                <section className="col-start-1 col-span-12 border-2 border-red-400 grid grid-cols-12">
                <h1 className=" text-heading2 col-start-1 col-span-3 text-left mt-space15">01</h1>
                <div className="col-start-5 col-span-8">
                  <img src="/NMP1-111 1 (3).svg" alt="" />
                </div>
                <p className=" col-span-3 col-start-1 text-mobiletextSmall md:text-textSmall mb-space60 ">
                Description for the photo. Hearing this revelation, Parvati Devi was also inspired to travel to Navadvipa. She arrived with great eagerness to offer obeisances to the Supreme Lord in His divine form as Sri Chaitanya Mhaprabhu and performed austerities to obtain His mercy.
                </p>

                </section>
              </div>
            </dialog> */}

            {/* 3rd img  */}
            <div className="col-start-11 col-span-2">
              <img
                src="/assets/images/islands/01-antardvip/01-sri-chaitanya-gaudiya-math/8.2020-03-01-040-min-min.jpg"
                className="w-[100vw] md:w-auto"
                alt=""
              />

              {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana
                accompanied by His two consorts, Vishnupriya and Lakshmipriya.
              </p> */}
            </div>
          </div>
        </div>
      );
};

export default SriChaitanyaGaudiyaMath;