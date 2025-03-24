import React from 'react';

const DayThree = () => {
      return (
        <section  className=" w-full md:py-space300 py-space120  bg-primaryBlack">
        <div className="w-11/12 flex flex-col   mx-auto">
          <div id='Day_Three' className="md:grid md:grid-cols-12">
            <div id='Day Three' className=" mb-spacelg  col-start-4 col-span-6 ">
              <p className="text-success font-primaryLight mb-spacelg pb-space60 md:mb-space120 text-center text-textRegular">
                Parikama
              </p>
              <h1 className="font-primaryLight text-mobileheading1  md:text-heading1 text-success text-center">
                Day Three
              </h1>
            </div>
            <div className="my-space60 md:my-space120 col-start-5 col-span-4 flex justify-center w-full items-center">
              <img
                src="/logo-map (3).svg"
                alt=""
                className="w-[242px] md:w-auto"
              />
            </div>
            <div className="mb-space30 md:mb-space120 col-start-5 col-span-4  md:w-auto w-fit  lg:mx-auto text-success font-primaryLight text-mobileheading2 md:text-heading2  text-left">
              <h3 className=" tracking-wider ">
              Koladvip, Ritudvip,Modrumdvip <br /> & Jahnudvip 
              </h3>
            </div>
            {/* next continer  */}
            <div className="mt-spacelg mb:mt-0 col-start-7 col-span-4 ">
              <div className="md:w-[500px]  lg:mx-auto">
                <p className="mb-spacelg text-primaryWhite font-primaryLight text-mobileTextRegular tracking-wider">
                  Visiting Places
                  <sup className="ml-spacelg text-textSmall">(11)</sup>
                </p>
                <h6 className=" text-mobileTextRegular font-primaryLight md:text-heading4 tracking-wider text-success">
                Prayudha Maya → Devananda Gaudiya Math → Samudra Garh → Ganga Sagar → Champahatti → Radha Kunda → Vidyanagar → Jahnu Muni’s Asram → Vaikunthapur → Vrindavan Das Thakur’s Shripat → Mahatpur
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
};

export default DayThree;