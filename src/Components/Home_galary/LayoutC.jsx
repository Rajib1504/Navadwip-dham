
import { LazyLoadImage } from "react-lazy-load-image-component";

const LayoutC = ({img1,img2,img3}) => {
  return (
    <section
      id="layoutA"
      className="mt-space60 mb-mobilespace192 md:mb-space240 gap-spacelg grid grid-cols-12 "
    >
      {/* img-1  */}
      <div className="col-span-12 order-1 md:col-span-2">
        <LazyLoadImage
          src={img1}
          className="h-80 w-full "
          alt="img1"
          effect="blur"
          threshold={0.3}
        />
      </div>

      {/* img-2  */}
      <div className="order-3 md:order-2 col-span-12 md:col-start-5 md:col-span-4">
        <LazyLoadImage
          src={img2}
          alt="img2"
          effect="blur"
          threshold={0.3}
          className="md:mb-space60 mb-mobilespace47 md:h-[548px] "
        />
        <div
          className="
           group grid grid-cols-4 gap-spacelg  "
        >
          <div className=" col-span-3 relative grid-cols-4 grid font-primaryLight  group transition-all">
            <p className=" col-start-1 col-span-3   sm:col-span-2 font-primaryLight md:text-textSmall text-mobiletextSmall">
              Open Full Gallery
            </p>
            <div className="col-start-4 self-place-end flex items-center justify-end ">
              <LazyLoadImage
                src="../../../public/Images/Arrow/→.svg"
                alt=""
                className=""
              />
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondaryBlack transition-all duration-700 group-hover:w-full "></div>
          </div>
        </div>
      </div>

      {/* img-3  */}
      <div className="order-2 md:order-3 col-span-12 md:col-start-10 md:col-span-3">
        <LazyLoadImage
          src={img3}
          alt="img3"
          effect="blur"
          threshold={0.3}
          className=" w-full "
        />
      </div>
    </section>
  );
};

export default LayoutC;
