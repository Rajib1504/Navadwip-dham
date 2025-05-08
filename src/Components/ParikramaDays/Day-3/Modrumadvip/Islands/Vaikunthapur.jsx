import React from "react";
import Layout_II_B from "../../../../Home_galary/Layout_II_B";

const Vaikunthapur = () => {
  return (
    <section id="vaikunthapur">
      <section
        id="32"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          III 8.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Vaikunthapur
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Highest Transcendental Reality
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Vaikunthapur is a sacred village on the northern outskirts of
              Navadvip, representing the highest transcendental reality—the
              spiritual kingdom of Narayana, which lies beyond the Viraja River.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Here, Bhagavan is eternally present, worshiped in all His splendor
              and surrounded by His three divine energies: Bhu, Lila, and Sri.
              The effulgence of Brahman, which emanates from Bhagavan, is merely
              a reflection of these transcendental realities.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              It is said that after visiting Vaikuntha, Narada Muni realized
              that Bhagavan was also present in the holy land of Navadvip. Drawn
              by this revelation, he came to this sacred place, where Narayana
              appeared before him and granted him divine darshan. As Narada
              worshiped Him, Bhagavan mercifully revealed His form as Sri
              Chaitanya, demonstrating His connection to the pastimes of
              Navadvip.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Narada remained in Vaikunthapur for some time, deeply engaged in
              the worship. His devotion sanctified the area, and since then,
              this place has been known as Vaikunthapur.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
      <Layout_II_B
        images={[
          "/public/islands/00-general/IMAG0713.jpg",
          "/public/islands/08-modrumdvip/1-Vaikunthapur.jpg",
        ]}
      />
    </section>
  );
};

export default Vaikunthapur;
