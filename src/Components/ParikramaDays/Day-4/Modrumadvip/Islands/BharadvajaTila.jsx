import React from "react";
import Layout_II_B from "../../../../Home_galary/Layout_II_B";

const BharadvajaTila = () => {
  return (
    <section id="bharadvaja-tila">
      <section
        id="38"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          IV 8.7
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Bharadvaja Tila
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Sacred Hill of Bharadvaja Muni{" "}
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Saint Bharadvaja once sat atop a hill in deep meditation at this
              sacred site, now known as Bharua Danga. As Ishan Thakur explained
              to Srinivas Thakur, this village is near Chakadha, by the Ganges
              in Navadvip.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              After traveling to numerous holy places, Bharadvaja Muni arrived
              in Navadvip. Enchanted by the unparalleled beauty of this sacred
              land, he immersed himself in worshiping Sri Chaitanya. Pleased by
              the sage’s devotion, Sri Chaitanya mercifully appeared before him.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Overwhelmed with joy, Bharadvaja Muni offered obeisances and
              recited heartfelt devotional prayers. His prayers pleased
              Bhagavan, who granted him a boon. With great humility, Bharadvaja
              expressed his desire to witness Bhagavan’s pastimes. Bhagavan
              mercifully agreed, blessing him and revealing that Bharadvaja
              would be surrounded by many of His eternal associates during His
              earthly pastimes.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
      <Layout_II_B
        images={[
          "/islands/00-general/DSC01384.jpg",
          "/islands/08-modrumdvip/7-Bharadvaja-tila.jpg",
        ]}
      />
    </section>
  );
};

export default BharadvajaTila;
