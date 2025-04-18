import React from "react";
import usetextAnimation from "../../../Hooks/UsetextAnimation";

const DayOne = () => {
  const containerRef= usetextAnimation()
  return (
    <section ref={containerRef} id="Day One"  className=" w-full md:py-space240 py-space120  bg-primaryBlack">
      <div className="w-11/12 flex flex-col   mx-auto">
        <div  className="md:grid md:grid-cols-12">
          <div  className=" mb-spacelg  col-start-4 col-span-6 ">
            <p className="paragraph text-success font-primaryLight mb-space60 md:mb-space120 text-center text-textRegular">
              Parikama
            </p>
            <h1  className="title font-primaryLight text-mobileheading1  md:text-heading1 text-success text-center">
             Day One
            </h1>
          </div>
          <div className="my-space60 md:my-space120 col-start-5 col-span-4 flex justify-center w-full items-center">
            <img
              src="/Images/Maps/dayOne.svg"
              alt=""
              className="w-[242px] md:w-auto"
            />
          </div>
          <div className="mb-space30 md:mb-space120 col-start-5 col-span-4  md:w-auto w-fit  lg:mx-auto text-success font-primaryLight text-mobileheading2 md:text-heading2  text-left">
            <h3 className="animateLines  tracking-wider ">
              Antardvip <br />& Simantadvip
            </h3>
          </div>
          {/* next continer  */}
          <div className="mt-spacelg mb:mt-0 col-start-7 col-span-4 ">
            <div className="md:w-[500px]  lg:mx-auto">
              <p className="paragraph mb-spacelg text-primaryWhite font-primaryLight text-mobileTextRegular tracking-wider">
                Visiting Places
                <sup className="ml-spacelg text-textSmall">(13)</sup>
              </p>
              <h6 className="paragraph  text-mobileTextRegular font-primaryLight md:text-heading4 tracking-wider text-success">
                Sri Chaitanya Gaudiya Math → Nandan Acharya Bhavan → Yogapith →
                Shrivas Angan → Advaita Bhavan → Gadadhar Angan → Murari Gupta
                Angan → Prithu Kunda → Sri Chaitanya Math → Shardanga → Sridhar
                Angan → Samadhi of Chand Kazi → Belvapaksha
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DayOne;
