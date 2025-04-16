import React from 'react';

const VrindavanDasThakurShripat = () => {
      return (
        <section id="Vrindavan Thakur’s Sripat">   
            <div
              id="33"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 8.2
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Vrindavan Das Thakur’s Shripat
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Residence of Vrindavan Das Thakur
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  Modrumadvip is the sacred residence of Vrindavan Das Thakur, the incarnation of Vedavyasa. A disciple of Nityananda Prabhu, he composed Sri Chaitanya-Bhagavata, which narrates the divine pastimes of Sri Chaitanya and Nityananda.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Vrindavan Das worshiped the deities of Nitai-Gauranga and Sri Jagannatha, which are still revered today in the Mamagachi Gaudiya Math, established by Srila Prabhupad Bhaktisiddhanta Saraswati Goswami Thakur. Near his home, Malini Devi, the wife of Shrinivas Pandit, was also born.
                  </p>
                 
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden">
                <img
                  src="/assets/images/islands/08-modrumdvip/02-vrindavan-das-thakur-sripat/1.DSC01811-min.JPG"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
                {/* <p className="md:block hidden md:text-textSmall mt-space30 w-[200px] font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
              </div>
              {/* 2nd img  */}
              <div className="hidden ">
                <img
                  src="/assets/images/islands/08-modrumdvip/02-vrindavan-das-thakur-sripat/2.NV5.jpg"
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

export default VrindavanDasThakurShripat;