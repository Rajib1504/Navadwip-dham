import React from "react";

const LayoutA = () => {
  return (
    <section id="layoutA" className="my-space120 gap-spacelg grid grid-cols-12 border-2 border-red-600">
      {/* img-1  */}
      
        <img
          src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
          className="w-full col-span-2"
          alt=""
        />
       
   
      {/* img-2  */}
      <div className="col-start-5 col-span-4">
          <img
            src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
            alt=""
            className="md:mb-space60    "
          />
          <div className="relative group mt-spacelg ">
                  <div className="flex items-center justify-between w-space240 border-b border-accentBlack  font-primayRegular   transition-all">
                    <p className="font-primaryLight md:text-textSmall">
                      Open Full Gallery
                    </p>
                    <div>
                    <img src="../../../public/Images/Arrow/→.svg" alt="" />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primaryBlack transition-all duration-700 group-hover:w-space240 group-focus:w-space240"></span>
                    </div>
                  </div>
                </div>
        </div>

        {/* img-3  */}
       
          <img
            src="https://www.wearegecko.co.uk/media/50316/mountain-3.jpg"
            alt=""
            className=" col-start-11 col-span-2"
          />
          
    </section>
  );
};

export default LayoutA;
