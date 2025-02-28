import React from "react";

const DayOne = () => {
  return (
    <div className="pt-space300 pb-space300 border-2 border-white  bg-primaryBlack">
      <div className="w-11/12 mx-auto border-2 border-red-900">
        <div className="ml-40">
          <p className="text-success font-primaryLight mb-space120 text-center text-heading4">
            Parikama
          </p>
          <h1 className="font-primaryLight text-heading text-success text-center">
            Day One
          </h1>
        </div>
        <div className="my-space120 flex justify-center ml-44">
          <img src="/public/Day Images/dayOne.svg" alt="" className="" />
        </div>
        <div className="mb-space120 border-2 w-fit mx-auto border-red-600 text-success font-primaryLight text-heading2  text-left">
          <h3 className=" tracking-wider ">
            Antardvip <br />& Simantadvi
          </h3>
        </div>
        {/* next continer  */}
        <div className=" border-2 border-red-400 pl-space300">
            <div className="w-[500px] border-2 border-red-400 mx-auto">
          <p className="mb-spacelg text-primaryWhite font-primaryLight text-heading4 tracking-wider">
            Visiting Places<span className="ml-spacelg">( 13</span> <span className="">)</span>
          </p>
          <h6 className="font-primaryLight text-heading4 tracking-wider text-success">
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

export default DayOne;
