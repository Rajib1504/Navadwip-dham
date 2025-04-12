import React, { useRef } from 'react';
import NagariyaGhat from './Islands/NagariyaGhat';
import BarakonaGhat from './Islands/BarakonaGhat';
import JagaiMadhaiGhat from './Islands/JagaiMadhaiGhat';
import BharadvajaTila from './Islands/BharadvajaTila';
import usetextAnimation from './../../../../Hooks/usetextAnimation';
const Modrumadvip2 = () => {
  const containerRef = usetextAnimation()
      return (
        <section ref={containerRef} className="pt-space120 md:pt-space300 ">
        <article id="Modrumadvip-2" className="w-11/12 mx-auto  ">
          <section className="md:grid grid-cols-12 ">
            <p className="title text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
              08
            </p>
            <h1  className=" title font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
            Modrumdvip
            </h1>
            <h2 className="animateLines font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
            Modrumdvip, also called Mamagachi, is non-different from the forest of Bhadrivana in Vrindavan and is intertwined with both the pastimes of Ramachandra and Sri Chaitanya.
            </h2>
          </section>
    
          {/* top text with left right sticky  */}
          <div className="flex  flex-col justify-start mt-space60 mb-space120 md:my-space120 ">
            <div className="md:grid  grid-cols-12">
              {/* left */}
              <div className="relative col-start-1 col-span-2  md:w-auto w-full ">
                <div className="sticky top-[4.5rem]">
                  <div className="paragraph text-mobiletextSmall md:text-textRegular md:block flex md:border-b-0 border-b border-accentBlack  py-spacelg md:py-0 justify-between ">
                    <h4 className="text-secondaryBlack font-primaryLight">
                      Represents
                    </h4>
                    <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                      <span>Dasyam</span>
                      <span>[servitorship]
                      </span>
                    </p>
                  </div>
                  <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                    <h4 className="text-secondaryBlack font-primaryLight">
                      Embodies
                    </h4>
                    <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular   md:block flex flex-col md:flex-row text-right md:text-left">
                      <span>Bhandaravan </span>
                      <span>Kamyavan, Ayodhya   </span>
                     
                      
                    </p>
                  </div>
                  <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                    <h4 className="text-secondaryBlack font-primaryLight">
                      Visit on
                    </h4>
                    <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                      <span> Day Four</span> <span> of Parikrama</span>
                    </p>
                  </div>
                </div>
              </div>
              {/* right   */}
              <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular  font-primaryLight">
                <p className='paragraph '>
                The great city of Ayodhya is hiddenly present in Modrumdvip. When Ramachandra was exiled from His kingdom, He, along with Sita Devi and Lakshman, came to this island. They built a simple hut under a majestic banyan tree and resided here for some time.
                </p>
                <p className="paragraph mt-space15 md:mt-space30">
                In Ramachanra’s pastimes, His devoted friend Guhaka, the king of the Nishadas, served Him with unalloyed devotion. By the Bhagavan’s divine arrangement, Guhaka was reborn in Modrumdvip as Sadananda Bhattacharya, a brahman of unwavering devotion to Ramachanra’s.
                </p>
                <p className="paragraph mt-space15 md:mt-space30">
                When Sri Chaitanya appeared in Navadvip, Sadananda Bhattacharya was living in the house of Jagannath Mishra. During the Bhagavan’s appearance as Sri Cjhiatanya, all the devatas descended to witness the divine event. Observing this, Sadananda recognized that the Lord of his heart had appeared in Navadvip.
                </p>
              </div>
            </div>
          </div>
          {/* ...................................................................................... */}

   {/* Barakona Ghat */}
  <BarakonaGhat/>
  
          {/* ........................... */}
          {/* Nagariya Ghat  */}
         <NagariyaGhat/>


          {/* Jagai & Madhai Ghat"  */}
         <JagaiMadhaiGhat/>
          {/* ............................... */}
  
          {/* Bharadvaja Tila */}
        <BharadvajaTila/>


          {/* ............................... */}
        </article>
      </section>
      );
};

export default Modrumadvip2;