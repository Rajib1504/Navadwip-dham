import React from "react";
import LayoutA from "../../../../Home_galary/LayoutA";

const RudraGaudiyaMath = () => {
  return (
    <section id="rudra-gaudiya-math">
      <section
        id="41"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          IV 9.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Rudra Gaudiya Math
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The place of Gaura-Katha and Divine Devotion
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              This place is called Rudradvip because Rudradev continuously
              distributes the nectar of Gaura-katha (Sri Chaitanya’s pastimes)
              here in the company of his associates.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Within Rudradvip lies the village of Shankarapur. Here,
              Shankaracharya, a manifestation of Rudra, once arrived to spread
              the doctrine of unqualified monism. Although externally he
              propagated impersonalist philosophy as per the Bhagavan’s order,
              internally he was a great devotee. However, when he came to
              Navadvip, Sri Chaitanya appeared to him in a dream and reminded
              him, “You are carrying out the Bhagavan’s order, but in this holy
              land, impersonalism will never take root. Here, pure devotion has
              already been firmly established. Those who reject devotion are
              simply bewildered by the material energy—Prayudha Maya and Vriddha
              Shiva, who ensnare them in an atheistic doctrine. Therefore, go
              preach elsewhere and do not disturb the residents of this sacred
              land.”
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Upon receiving this instruction, Shankaracharya immediately left
              Navadvip.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
      <LayoutA
        images={[
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/1-rudra-gaudiya-math.jpg",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/2-rudra-gaudiya-math-mandir.jpg",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/3-shiva-temple-at-rudra-gaudiya-math.jpg",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/4-shiva-temple-at-rudra-gaudiya-math.jpg",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/5-rudra-gaudiya-math-entrance.jpg",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/6-rudra-gaudiya-math-entrance.JPG",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/7-rudra-gaudiya-math-natyamandir.jpg",
          "/public/islands/09-rudradvip/03-rudra-gaudiya-math/8-rudra-gaudiya-math-natyamandir.jpg",
        ]}
      />
    </section>
  );
};

export default RudraGaudiyaMath;
