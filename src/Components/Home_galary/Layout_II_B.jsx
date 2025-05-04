import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Layout_II_B = ({img1,img2,img3}) => {
      return (
            <section
            id="layout_II_B"
            className="mt-space60 mb-mobilespace192 md:mb-space240 gap-spacelg grid grid-cols-12 "
          >
            {/* img-1  */}
            <div className="col-span-12 order-1 md:col-span-3">
              <LazyLoadImage
                src={img1}
                className="h-auto w-full "
                alt="img1"
                effect="blur"
                threshold={0.3}
                wrapperClassName="min-h-[130px]"
              />
            </div>
      
            {/* img-2  */}
           <div className="order-3 md:order-2 col-span-12 md:col-start-5 md:col-span-8">
        <LazyLoadImage
          src={img2}
          alt="img2"
          effect="blur"
          threshold={0.3}
          className="md:mb-space60 mb-mobilespace47 md:h-[548px] "
          wrapperClassName="min-h-[548px]"
        />
        <div
          className="
           group grid grid-cols-5 md:grid-cols-8 gap-spacelg"
        >
          <div className="col-span-3 flex justify-between items-center relative  font-primaryLight  group transition-all ">
            <p className="  font-primaryLight md:text-textSmall text-mobiletextSmall">
              Open Full Gallery
            </p>
            <div className="flex items-center justify-end ">
              <LazyLoadImage src="../../../Images/Arrow/→.svg" alt="" className="" />
            </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondaryBlack transition-all duration-700 group-hover:w-full "></div>
          </div>
        </div>
      </div>
      
           
          </section>
      );
};

export default Layout_II_B;