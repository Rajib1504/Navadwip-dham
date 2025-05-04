import React from "react";
import LayoutC from "../../../../Home_galary/LayoutC";

const MurariGuptaAngan = () => {
  return (
    <section id="murari-gupta-angan">
      <div
        id="7"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.7
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg animateLines ">
            Murari Gupta Angan
          </h2>
          <p className=" animateLines text-mobileTextRegular md:text-textRegular">
            Residence of Murari Gupta
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Murari Gupta’s residence is located on the eastern side of
              Yogapith, where the deities of Sri Sita, Rama, Lakshmana, and
              Hanuman are worshipped.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              A great scholar and a devoted follower of Lord Ramachandra, Murari
              Gupta was also a renowned Ayurvedic physician. While he treated
              physical ailments, his teachings and exemplary conduct had the
              unique ability to heal the hearts of those around him.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              In his youth, Murari Gupta studied alongside Sri Chaitanya at the
              school of Ganga Das Pandit, where he was deeply impressed by Sri
              Chaitanya’s vast knowledge and sharp intellect. Their discussions
              often turned into lively debates on various topics. Over time,
              Murari Gupta became one of Sri Chaitanya’s closest associates.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <LayoutC
        img1={"/public/islands/01-antardvip/07-murari-gupta-angan/1-murari-gupta.jpg"}
        img2={"/public/islands/01-antardvip/07-murari-gupta-angan/4-murari-gupta-garden.jpg"}
        img3={"/public/islands/01-antardvip/07-murari-gupta-angan/3-murari-gupta-temple.JPG"}
      />
    </section>
  );
};

export default MurariGuptaAngan;
