import React from 'react';

const DayThree = () => {
      return (
            <div className=" w-full  md:py-space300 py-space120  bg-primaryBlack">
            <div className="w-11/12 mx-auto">
              <div className="lg:ml-40 mb-spacelg">
                <p className="text-success font-primaryLight mb-space60 md:mb-space120 text-center text-heading4">
                  Parikama
                </p>
                <h1 className="font-primaryLight text-heading3  md:text-heading text-success text-center">
                  Day One
                </h1>
              </div>
              <div className="my-space60 md:my-space120 flex justify-center lg:ml-44">
                <img src="/public/Day Images/dayOne.svg" alt="" className="w-[242px] md:w-auto" />
              </div>
              <div className="mb-space30 md:mb-space120  w-fit lg:mx-auto text-success font-primaryLight text-heading3 md:text-heading2  text-left">
                <h3 className=" tracking-wider ">
                  Antardvip <br />& Simantadvip
                </h3>
              </div>
              {/* next continer  */}
              <div className="mt-spacelg mb:mt-0  lg:pl-space300">
                  <div className="md:w-[500px]  lg:mx-auto">
                <p className="mb-spacelg text-primaryWhite font-primaryLight text-heading4 tracking-wider">
                  Visiting Places<sup className="ml-spacelg text-textSmall">(13)</sup> 
                </p>
                <h6 className="font-primaryLight md:text-heading4 tracking-wider text-success">
                  Sri Chaitanya Gaudiya Math → Nandan Acharya Bhavan → Yogapith →
                  Shrivas Angan → Advaita Bhavan → Gadadhar Angan → Murari Gupta Angan
                  → Prithu Kunda → Sri Chaitanya Math → Shardanga → Sridhar Angan →
                  Samadhi of Chand Kazi → Belvapaksha
                </h6>
                </div>
              </div>
            </div>
          </div>
      );
};

export default DayThree;