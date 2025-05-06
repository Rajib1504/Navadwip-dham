
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
const LayoutB = ({ img1, img2, img3 }) => {
  return (
    <section
      id="layoutA"
      className="mt-space60 mb-mobilespace192 md:mb-space240 gap-spacelg grid grid-cols-12 "
    >
      {/* img-1  */}
      <div className="col-span-12 order-1 md:col-span-3">
        <LazyLoadImage
          src={img1}
          className="h-auto w-full "
          alt="img1"
          effect="blur"
          wrapperClassName="min-h-[130px]"
          threshold={0.3}
        />
      </div>

      {/* img-2  */}
     <div className="order-3 md:order-2 col-span-12 md:col-start-5 md:col-span-5">
        <LazyLoadImage
          src={img2}
          alt="img2"
          effect="blur"
          threshold={0.3}
          wrapperClassName="min-h-[402px]"
          className="md:mb-space60 mb-mobilespace47  w-[580px] "
        />
       <div
          className="
           group grid grid-cols-5 gap-spacelg"
        >
          <div className="col-span-3 flex justify-between items-center relative  font-primaryLight  group transition-all ">
            <p className="  font-primaryLight md:text-textSmall text-mobiletextSmall">
              Open Full Gallery
            </p>
            <div className="flex items-center  ">
              <LazyLoadImage src="../../../Images/Arrow/→.svg" alt="" className="" />
            </div>
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondaryBlack transition-all duration-700 group-hover:w-full "></div>
          </div>
        </div>
      </div>

      {/* img-3  */}
      <div className="order-2 md:order-3 col-span-12 md:col-start-11 md:col-span-2">
        <LazyLoadImage
          src={img3}
          alt="img3"
          effect="blur"
          threshold={0.3}
          wrapperClassName="min-h-[242px]"
          className="md:h-80 w-full "
        />
      </div>
    </section>
  );
};

export default LayoutB;
