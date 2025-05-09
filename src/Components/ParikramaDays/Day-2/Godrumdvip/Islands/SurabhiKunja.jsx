import React from "react";
import LayoutB from "../../../../Home_galary/LayoutB";

const SurabhiKunja = () => {
  return (
    <section id="surabhi-kunja">
      <div
        id="15"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 3.2
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Surabhi Kunja
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Place of Indra’s Atonement
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              After Indra became angry with the residents of Vrindavan for
              worshiping Govardhan Hill instead of him, he sent torrential rains
              to devastate the land. However, realizing his mistake, he came to
              this sacred site on the banks of the Saraswati River, accompanied
              by the divine cow Surabhi, to seek forgiveness from Sri Krishna.
              Here, he performed worship as an act of atonement.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              This place is also where Markandeya Rishi performed intense bhajan
              during the great flood and received the mercy of Sri Chaitanya.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Today, Surabhi-kunja remains a revered pilgrimage site. A Gaudiya
              Math temple now stands here, where the deities of Sri Sri
              Radha-Krishna are worshiped with devotion.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <LayoutB
        images={[
          "/islands/03-godrumdvip/02-surabhi-kunja/1-surabhi-kunja.jpg",
          "/islands/03-godrumdvip/02-surabhi-kunja/2-surabhi-kunja-mandir.jpg",
          "/islands/03-godrumdvip/02-surabhi-kunja/3-surabhi-kunja.jpg",
        ]}
      />
    </section>
  );
};

export default SurabhiKunja;
