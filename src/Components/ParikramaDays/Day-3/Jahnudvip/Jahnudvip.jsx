import React, { useRef } from "react";
import JahnuMuniAsram from "./Islands/JahnuMuniAsram";
import usetextAnimation from "../../../../Hooks/UsetextAnimation";

const Jahnudvip = () => {
  const containerRef = usetextAnimation()
  return (
    <section ref={containerRef} className="pt-space120 md:pt-space300 ">
    <article id="Jahnudvip" className="w-11/12 mx-auto  ">
      <section className="md:grid grid-cols-12 ">
        <p className="text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
          07
        </p>
        <h1  className=" title font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
        Jahnudvip
        </h1>
        <h2 className=" animateLines font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
        This sacred island, north of Vidyanagar, is non-different from Bhadravan forest in Vraja and is named after the great sage Jahnu Muni, who meditated here.
        </h2>
      </section>

      {/* top text with left right sticky  */}
      <div className="flex  flex-col justify-start mt-space60 mb-space120 md:my-space120 ">
        <div className="md:grid  grid-cols-12">
          {/* left */}
          <div className="relative col-start-1 col-span-2  md:w-auto w-full ">
            <div className="sticky top-[4.5rem]">
              <div className="paragraph text-mobiletextSmall md:text-textRegular md:block flex md:border-b-0 border-b border-accentBlack  py-spacelg md:py-0 justify-between ">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Represents
                </h4>
                <p className="font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Vandanam</span>
                  <span>[praying]</span>
                </p>
              </div>
              <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Embodies
                </h4>
                <p className="font-primaryLight text-mobiletextSmall md:text-textRegular   md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Bhadavan </span>
                  
                  
                </p>
              </div>
              <div className="paragraph text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Visit on
                </h4>
                <p className="paragraph font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                  <span> Day Three</span> <span> of Parikrama</span>
                </p>
              </div>
            </div>
          </div>
          {/* right   */}
          <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular  font-primaryLight">
            <p className="paragraph ">
            Ganga, in her ecstasy, unknowingly swept away Jahnu Muni’s ashram utensils, leading the sage to drink the entire river. After King Bhagiratha’s sincere prayers, Jahnu Muni released Ganga, who, in gratitude, divided the land into nine islands, forming Navadvip. 
            </p>
          
           
          </div>
        </div>
      </div>
        {/* ...................................................................................... */}
        {/* Jahnu Muni’s Asram  */}
       <JahnuMuniAsram/>
        {/* ............................... */}

        {/* ............................... */}
      </article>
    </section>
  );
};

export default Jahnudvip;
