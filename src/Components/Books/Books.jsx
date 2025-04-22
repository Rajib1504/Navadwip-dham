import React from "react";

const Books = () => {
  return (
    <section id="Books" className=" py-space120 md:py-space240 font-primaryLight bg-primaryBlack">
      <div className="w-full mx-auto">
        <div>
          <p className="mb-space60 w-11/12 mx-auto text-mobileTextRegular md:mb-space120 text-center text-success">Books</p>
          <h5 className="text-center text-mobileheading2 tracking-wide font-primaryLight md:text-heading2 w-11/12 mx-auto text-[35px] sm:w-full md:ml-space30 text-success">
            Deepen your experience of Navadvip <br className="hidden md:block"/> by exploring these
            carefully selected books.
          </h5>
        </div>
        {/* books images  */}
        <section className="w-11/12 mx-auto mt-space120 md:mt-space240  grid grid-cols-1  sm:grid-cols-12 gap-[16px]">
          <a href="https://www.amazon.com/Life-Chaitanya-Mahaprabhu-Lilamrita-Teachings/dp/B0BRWMYD1R" target="_blank" className="bg-accentWhite w-full flex  py-space60 h-[587.74px] col-span-12 md:col-start-1 ring-1 ring-success/20 transition-all duration-500 hover:ring-success/50 md:col-span-4 flex-col rounded-md items-center ">
            <img src="/Images/Books/Chaitanay mahaprabhu.webp" alt="" className="mb-space30 backdrop-blur-md shadow-box  max-w-full h-[300px]" />
            <h6 className="text-center  text-mobiletextSmall md:text-textSmall font-primaryLight text-success">
              The Life of <br /> Chaitanya Mahaprabhu
            </h6>
          </a>

          <a href="https://www.amazon.com/-/es/Chaitanya-Associates-Swami-Tirtha-Maharaja/dp/1647226767" target="_blank" className="bg-accentWhite ring-1 ring-success/20 transition-all duration-500 hover:ring-success/50 w-full col-span-12 md:col-start-5 md:col-span-4 flex flex-col items-center rounded-md py-space60 h-[587.74px] ">
            <img
              src="/Images/Books/sri chaitanya and his associatates.webp"
              alt=""
              className="mb-space30 backdrop-blur-md shadow-box  max-w-full h-[300px]"
            />
            <h6 className="text-center font-primaryLight md:text-textSmall text-mobiletextSmall text-success">
              Sri Chaitanya <br /> and His Associates
            </h6>
          </a>

          <a href="https://www.amazon.com/Navadvipa-dhama-mahatmya-Bhaktivedanta-Narayana-Gosvami-Maharaja/dp/1935428098" target="_blank" className="bg-accentWhite ring-1 ring-success/20 transition-all duration-500 hover:ring-success/50 col-span-12 md:col-start-9 w-full rounded-md flex flex-col items-center h-[587.74px] py-space60 md:col-span-4  ">
            <img
              src="/Images/Books/Sri navadvip Dham.jpg"
              alt=""
              className="mb-space30 backdrop-blur-md  max-w-full h-[300px] shadow-box"
            />
            <h6 className="text-center font-primaryLight md:text-textSmall text-mobiletextSmall text-success">
              The Excellence <br /> of Navadvip
            </h6>
          </a>
        </section>
      </div>
    </section>
  );
};

export default Books;
