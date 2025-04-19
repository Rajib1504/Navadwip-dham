import React from "react";

const Books = () => {
  return (
    <section id="Books" className=" py-space120 md:py-space240 font-primaryLight bg-primaryBlack">
      <div className="w-full mx-auto">
        <div>
          <p className="mb-space60 text-mobileTextRegular md:mb-space120 text-center text-success">Books</p>
          <h5 className="text-center text-mobileheading2 tracking-wide font-primaryLight md:text-heading2 text-[35px] w-full md:ml-space30 text-success">
            Deepen your experience of Navadvip <br className="hidden md:block"/> by exploring these
            carefully selected books.
          </h5>
        </div>
        {/* books images  */}
        <section className="w-full mt-space120 md:mt-space240  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-spacelg">
          <a href="https://www.amazon.com/Life-Chaitanya-Mahaprabhu-Lilamrita-Teachings/dp/B0BRWMYD1R" target="_blank" className="bg-accentWhite w-full flex  py-space60  flex-col rounded-md items-center ">
            <img src="/Images/Books/The Life of Chaitanya Mahaprabhu.svg" alt="" className="pb-space30 backdrop-blur-md" />
            <h6 className="text-center  text-mobiletextSmall font-primaryLight text-success">
              The Life of <br /> Chaitanya Mahaprabhu
            </h6>
          </a>

          <a href="https://www.amazon.com/-/es/Chaitanya-Associates-Swami-Tirtha-Maharaja/dp/1647226767" target="_blank" className="bg-accentWhite w-full flex flex-col items-center rounded-md py-space60">
            <img
              src="/Images/Books/sri chaitanya.svg"
              alt=""
              className="pb-space30 backdrop-blur-md"
            />
            <h6 className="text-center font-primaryLight text-mobiletextSmall text-success">
              Sri Chaitanya <br /> and His Associates
            </h6>
          </a>

          <a href="https://www.amazon.com/Navadvipa-dhama-mahatmya-Bhaktivedanta-Narayana-Gosvami-Maharaja/dp/1935428098" target="_blank" className="bg-accentWhite w-full rounded-md flex flex-col items-center py-space60  ">
            <img
              src="/Images/Books/sri navadvipa dhama.svg"
              alt=""
              className="pb-space30 backdrop-blur-md"
            />
            <h6 className="text-center font-primaryLight text-mobiletextSmall text-success">
              The Excellence <br /> of Navadvip
            </h6>
          </a>
        </section>
      </div>
    </section>
  );
};

export default Books;
