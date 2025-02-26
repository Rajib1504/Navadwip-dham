import React from "react";

const IlandImages = () => {
  return (
    <div className="  ">
      <div className="flex pt-space240 py-space120 mb-[3rem] justify-between">

      <div className="flex justify-center items-center gap-space15 border-2 border-blue-500">
        <img src="/public/ilandImages/left/IMG_8584.svg" alt="img" />
        <img src="/public/ilandImages/left/Yogapith,_Mayapur 2.svg" alt="img" />
        <img src="/public/ilandImages/left/IMG_8557.svg" alt="img" />
        <img src="/public/ilandImages/left/NMP1-111 1.svg" alt="img" />
      </div>
      {/* text  */}
      <div>
        <h2 className="text-heading2 font-primaryLight w-72 text-center border-2 border-red-500">Islands of Navadvip</h2>

      </div>
      <div className="flex gap-space15 justify-center items-center  border-2 border-blue-500">
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
