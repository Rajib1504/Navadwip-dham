import React from 'react';

const JayadevasShripat = () => {
      return (
            <div id="Jayadev's Sripat">
            <div
              id="39"
              className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 9.1
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Jayadeva’s Shripat
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                Hut of Jayadeva Goswami
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                  Before moving to Champahati, Jayadeva lived in a hut on the bank of Ballal-dirgika, peacefully residing there with his wife, Padma. It was there that he composed the Dasa-avatara poem.
                  </p>
                  
                </div>
              </div>
            </div>
            {/* images   */}
           <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="col-start-1 col-span-3">
                <img
                  src="/assets/images/islands/09-rudradvip/01-jayadev-sripat/1.IMG_1601-min.JPG"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
               
              </div>
              {/* 2nd img  */}
              <div className=" col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/09-rudradvip/01-jayadev-sripat/2.IMG_1600-min.JPG"
                  alt=""
                  className="md:mb-space60 md:w-[30rem]"
                />
               
              </div>
              {/* 3rd img  */}
              <div className="col-start-11 col-span-2">
                <img
                  src="/assets/images/islands/09-rudradvip/01-jayadev-sripat/3.Jayadeva-Goswami-5.jpg"
                  className="w-[100vw] md:w-auto"
                  alt=""
                />
               
                
                
              </div>
            </div>
  
  
  
          </div>
      );
};

export default JayadevasShripat;