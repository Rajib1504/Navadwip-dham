import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import LayoutA from './../../../../Home_galary/LayoutA';

const SriChaitanyaGaudiyaMath = () => {
      return (
        <section id= "sri-chaitanya-gaudiya-math">
            
          <div 
            id="1"
            className=" place pt-space60 md:pt-space60 gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
          >
            {/* First Box (Starts from top) */}
            <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            I 1.1
            </p>

            {/* Second Box (Centered by default) */}
            <div className=" col-start-5 col-span-5  w-full ">
              <h2 className=" animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
               Sri Chaitanya Gaudiya Math
              </h2>
              <p className=" paragraph text-mobileTextRegular md:text-textRegular">
                The Place of Unity and Service
              </p>
              {/* description  */}
              <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                <p className=" paragraph mb-space15 md:mb-space30">
                  Sri Chaitanya Gaudiya Math was founded by Srila Bhakti Dayita
                  Madhav Goswami Maharaj, a distinguished disciple of the
                  world-renowned spiritual master, Srila Prabhupad Bhakti
                  Siddhanta Saraswati Goswami Thakur—the foremost preacher of
                  Sri Chaitanya’s message.{" "}
                </p>
                <p className=" paragraph mb-space15 md:mb-space30">
                  Srila Madhav Maharaj was a saintly personality known for his
                  unwavering devotion to his spiritual master, strict adherence
                  to Vaishnava principles, and tireless dedication to serving
                  the Vaishnavas.
                </p>
                <p className=" paragraph mb-space15 md:mb-space30">
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
        <LayoutA
        img1={'/public/islands/01-antardvip/01-sri-chaitanya-gaudiya-math/1-SCGM.jpg'}
        img2={'/public/islands/01-antardvip/01-sri-chaitanya-gaudiya-math/2-bhakti-dayita-madhava-maharaj.jpg'}
        img3={"/public/islands/01-antardvip/01-sri-chaitanya-gaudiya-math/3-photo_2025-03-04-17-36-28.jpg"}/>
        
        </section>
      );
};

export default SriChaitanyaGaudiyaMath;