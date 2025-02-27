import React from "react";

const IlandImages = () => {
  return (
    <div className="  ">
      <div className="  lg:flex md:pt-space240 py-space60 pt-space120 md:py-space120 md:mb-[2rem]  justify-between">

      <div className="hidden lg:flex justify-center items-center gap-space15 ">
        <img src="/public/ilandImages/left/IMG_8584.svg" alt="img" />
        <img src="/public/ilandImages/left/Yogapith,_Mayapur 2.svg" alt="img" />
        <img src="/public/ilandImages/left/IMG_8557.svg" alt="img" />
        <img src="/public/ilandImages/left/NMP1-111 1.svg" alt="img" />
      </div>
      {/* text  */}
      <div>
        <h2 className="text-heading4  md:text-heading2 mx-auto lg:ml-space15 font-primaryLight w-32 md:w-72 text-center md:ml-[17rem] mix-blend-difference text-success">Islands of Navadvip</h2>

      </div>
      <div className=" hidden lg:flex gap-space15 justify-center items-center  ">
            <img src="/public/ilandImages/right/1986-01-16 1.svg" alt="" />
            <img src="/public/ilandImages/right/IMG_8425.svg" alt="" />
            <img src="/public/ilandImages/right/IMG_8487.svg" alt="" />
            <img src="/public/ilandImages/right/NMP1-111 1 (1).svg" alt="" />
      </div>
      </div>
    </div>
  );
};

export default IlandImages;
