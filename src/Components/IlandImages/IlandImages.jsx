const IlandImages = () => {
  return (
    <div className="min-h-screen border-2 border-red-300 w-full mx-auto place-content-center md:place-items-center">
      <div className="  flex-col flex md:flex-row justify-center items-center  w-full   md:justify-between">
        <div className="hidden lg:flex justify-center items-center gap-space15 ">
          <img src="/Images/Iland images/IMG_8584.webp" alt="img" />
          <img src="/Images/Iland images/Yogapith,_Mayapur 2.webp" alt="img" />
          <img src="/Images/Iland images/IMG_8557.webp" alt="img" />
          <img src="/public/Images/Iland images/NMP1-111 1 (4).webp" alt="img" />
        </div>
        {/* text  */}

        <h2 className="text-mobileheading2 md:text-heading2 font-primaryLight  text-center text-primaryBlack">
          Islands of <br />Navadvip
        </h2>

        <div className=" hidden lg:flex gap-space15 justify-center items-center   ">
          <img src="/Images/Iland images/1986-01-16 1.webp" alt="" />
          <img src="/Images/Iland images/IMG_8425.webp" alt="" />
          <img src="/Images/Iland images/IMG_8487.webp" alt="" />
          <img src="/Images/Iland images/NMP1-111 1 (1).webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IlandImages;
