import React from "react";
import LayoutB from "../../../../Home_galary/LayoutB";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const BarakonaGhat = () => {
  return (
    <section id="barakona-ghat">
      <section
        id="35"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          IV 8.4
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Barakona Ghat
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Sacred Site of Debate and Surrender
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Barakona Ghat is a serene and sacred place where Sri Chaitanya
              would discuss scriptures and teach Sanskrit grammar to His
              students. It is said to have been built by Vishvakarma, the
              celestial architect.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              This ghat is also known for a remarkable encounter between Sri
              Chaitanya and the great scholar Keshava Kashmiri, who arrived with
              the ambition of defeating all eminent scholars in debate. When he
              confronted Sri Chaitanya, the Lord humbly listened to his
              supposedly flawless poem and gently pointed out its faults.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Defeated and deeply shaken, Keshava Kashmiri returned home in
              distress. That night, his beloved deity, Saraswati Devi, appeared
              to him in a dream and revealed that Sri Chaitanya was none other
              than Bhagavan Himself. She instructed him to surrender at His
              feet.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The following morning, filled with remorse and humility, Keshava
              Kashmiri returned to Sri Chaitanya and took shelter at His lotus
              feet. With great mercy, Sri Chaitanya accepted him and instructed
              him to abandon his pride and engage in the worship of Sri Krishna.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
      <Layout_II_A
      img2={"/public/islands/08-modrumdvip/4-Barakona-ghat.jpg"}
      img1={"/public/islands/00-general/DSC01384.jpg"}
      />
    </section>
  );
};

export default BarakonaGhat;
