const IlandImages = () => {
  return (
    <div className="border-2 border-blue-500 min-h-screen w-full place-items-center place-content-center">
      <div className="  flex-col flex md:flex-row justify-center items-center mx-auto w-full   md:justify-between">
        <div className="hidden lg:flex justify-center items-center gap-space15 ">
          <img src="/Images/Iland images/IMG_8584.svg" alt="img" />
          <img src="/Images/Iland images/Yogapith,_Mayapur 2.svg" alt="img" />
          <img src="/Images/Iland images/IMG_8557.svg" alt="img" />
          <img src="/Images/Iland images/NMP1-111 1.svg" alt="img" />
        </div>
        {/* text  */}

        <h2 className="text-mobileheading2 md:text-heading2 font-primaryLight w-48 md:w-72 text-center text-primaryBlack">
          Islands of Navadvip
        </h2>

        <div className=" hidden lg:flex gap-space15 justify-center items-center  ">
          <img src="/Images/Iland images/1986-01-16 1.svg" alt="" />
          <img src="/Images/Iland images/IMG_8425.svg" alt="" />
          <img src="/Images/Iland images/IMG_8487.svg" alt="" />
          <img src="/Images/Iland images/NMP1-111 1 (1).svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IlandImages;
