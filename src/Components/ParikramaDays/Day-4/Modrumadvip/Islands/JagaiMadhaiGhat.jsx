import React from 'react';

const JagaiMadhaiGhat = () => {
      return (
        <section id='Jagai_Madhai_Ghat'>
            <div id='Jagai-Madhai Ghat'>
            <div
              id="37"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 8.6
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Jagai & Madhai Ghat
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Ghat of Redemption
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  This sacred ghat was restored by the two brothers, Jagai and Madhai, whom Sri Chaitanya delivered through the boundless mercy of Nityananda Prabhu. It is located about thirty meters from Nagariya Ghat.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Although Sri Chaitanya had forgiven Madhai for his past misdeeds, he remained deeply remorseful, grieving over the offenses he had committed. To purify his heart, Nityananda Prabhu instructed him to serve Ganga Devi by cleaning and maintaining the bathing ghat. He also advised Madhai to offer obeisances to all pilgrims who visited the ghat and humbly seek their forgiveness.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Following these instructions, Madhai undertook severe austerities, dedicating himself to restoring and preserving the ghat. Both Jagai and Madhai chanted three lakhs (300,000) of the Holy Names daily while strictly observing celibacy. Through their unwavering devotion and penance, they attained complete purification, becoming shining examples of transformation through the mercy of Sri Chaitanya and Nityananda.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
           <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden col-start-1 col-span-3">
                <img
                  src="/assets/images/islands/08-modrumdvip/07-jagai-madhai-ghat/3.IMG_8524.JPG"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
               
              </div>
              {/* 2nd img  */}
              <div className="hidden col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/08-modrumdvip/07-jagai-madhai-ghat/IMG_8529.JPG"
                  alt=""
                  className="md:mb-space60 md:w-[30rem]"
                />
                
              </div>
              {/* 3rd img  */}
              <div className="hidden col-start-11 col-span-2">
                <img
                  src="/assets/images/islands/00-general/IMG_8589.JPG"
                  className="w-[100vw] md:w-auto"
                  alt=""
                />
               
                {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                The central altar of the main temple with Sri Gaura Narayana accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
                
              </div>
            </div>
  
  
  
          </div>
          </section>
      );
};

export default JagaiMadhaiGhat;