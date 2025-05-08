import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const Naimisharanya = () => {
  return (
    <section id="naimisharanya">
      <div
        id="20"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Naimisharanya
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The forest where the glories of Sri Chaitanya are celebrated
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              To the south of the village of Marjida, the Gomati River flows
              gracefully, its banks home to the sacred site of Naimisharanya.
              This revered place is renowned for the unique deity of
              Hamsa-vahana—Lord Shiva seated upon a swan, the celestial carrier
              of Brahma.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The history of this site dates back to ancient times. During the
              age of Kali, as its influence grew, many great sages, led by
              Shaunaka Rishi, gathered at Naimisharanya to hear the
              Gaura-Bhagavata from the lips of Suta Goswami. Shiva, eager to
              attend this divine assembly, faced a delay due to his slow
              movement. Desiring a way to reach in time, he appealed to Brahma,
              who granted him his celestial swan. Seated upon it, Shiva swiftly
              arrived at Naimisharanya and participated in the transcendental
              discourse glorifying the pastimes of Sri Chaitanya.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Upon hearing the Gaura-Bhagavata, Shiva was overcome with ecstasy,
              and along with his associates, he began to chant the Holy Name of
              Sri Chaitanya. In a state of rapture, they showered flowers upon
              him, celebrating his devotion.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              A unique tradition of this temple is its annual festival, during
              which the Shiva-linga deity is bathed continuously for three days
              to prevent overheating. This phenomenon is attributed to Shiva’s
              intense desire to see Sri Chaitanya. In ancient times, to cool the
              deity, it was immersed in the sacred waters of the Gomati River.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
        images={[
          "/public/islands/04-madhyadvip/01-naimisharanya/1-naimisharanya.jpg",
          "/public/islands/04-madhyadvip/01-naimisharanya/2-naimisharanya.jpg",
        ]}
      />
    </section>
  );
};

export default Naimisharanya;
