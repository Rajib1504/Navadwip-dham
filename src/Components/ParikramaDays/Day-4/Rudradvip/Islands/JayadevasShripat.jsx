import React from "react";
import LayoutA from "../../../../Home_galary/LayoutA";

const JayadevasShripat = () => {
  return (
    <section id="jayadev's-sripat">
      <section
        id="39"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          IV 9.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Jayadeva’s Shripat
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            Hut of Jayadeva Goswami
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Before moving to Champahati, Jayadeva lived in a hut on the bank
              of Ballal-dirgika, peacefully residing there with his wife, Padma.
              It was there that he composed the Dasa-avatara poem.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
     <LayoutA
     img1={"/public/islands/09-rudradvip/01-Jayadev/1-jayadev.jpg"}
     img2={"/public/islands/09-rudradvip/01-Jayadev/2-jayadev.jpg"}
     img3={"/public/islands/09-rudradvip/01-Jayadev/3-jayadeva-goswami.jpg"}
     />
    </section>
  );
};

export default JayadevasShripat;
