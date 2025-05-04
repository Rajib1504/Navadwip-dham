import React from "react";
import LayoutC from "../../../../Home_galary/LayoutC";

const NarasimhaPalli = () => {
  return (
    <section id="narashima-pally">
    
      <div
        id="18"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 3.5
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
           Narasimha Palli
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Abode of the Gods
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              This sacred place, also known as Deva Palli—the Abode of the
              Gods—is renowned for its ancient Sri Narasimha Dev Temple, which
              dates back to Satya-yuga. It is the only temple of its kind in
              Navadvip, drawing countless devotees who come to worship and seek
              relief from life's struggles and offenses. The sweet rice offered
              here is considered especially auspicious.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              According to the scriptures, Sri Narasimha Dev once rested at this
              site on the banks of the Mandakini River after defeating
              Hiranyakashipu. Bhagavan had appeared in His half-man, half-lion
              form to protect His pure devotee, Prahlad Maharaj, and to end the
              tyrannical reign of Hiranyakashipu, who had become arrogant and
              oppressive after receiving a boon of near-invincibility from
              Brahma.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              This site was once a celestial abode, where the denizens of
              heaven, led by Brahma and accompanied by Ganesha, Surya, and other
              devas, gathered to serve Bhagavan. Their palaces, crafted by the
              celestial architect Vishvakarma, were adorned with diamonds and
              pearls, radiating divine opulence. However, over time, the
              Mandakini River changed its course, flooding the region and
              eventually drying up, leaving behind only a small hill and
              scattered remnants of stones—faint echoes of the lost celestial
              splendor.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Today, Narasimha Palli marks the outermost boundary of Navadvip
              Dham and remains a cherished destination for devotees seeking the
              blessings and protection of Sri Narasimha Dev.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
    <LayoutC
    img1={"/public/islands/03-godrumdvip/06-nrisimhapali/1-nrisimhapali.jpg"}
    img2={"/public/islands/03-godrumdvip/06-nrisimhapali/2-nrisimhadeva-at-pali.jpg"}
    img3={"/public/islands/03-godrumdvip/06-nrisimhapali/3-nrisimhadeva-at-pali.jpg"}
    />
  
    </section>
  );
};

export default NarasimhaPalli;
