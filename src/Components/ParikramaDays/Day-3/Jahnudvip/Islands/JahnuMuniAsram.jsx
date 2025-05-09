import React from "react";
import Layout_II_A from "./../../../../Home_galary/Layout_II_A";

const JahnuMuniAsram = () => {
  return (
    <section id="jahnu-muni's-asram">
      <div
        id="31"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          III 7.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Jahnu Muni’s Asram
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Birthplace of Jahnavi
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Jahnu Muni meditated here in his ashram and was blessed by Sri
              Chaitanya to witness His transcendental pastimes in the age of
              Kali.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              When King Bhagiratha brought the Ganges to earth, she flowed
              through Navadvip in great ecstasy, unknowingly washing away Jahnu
              Muni’s utensils. Offended, the sage drank the entire river in a
              single gulp.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Distressed, Bhagiratha prayed to Jahnu Muni with great devotion.
              Pleased, the sage released Ganga from his ear, as if giving her
              new birth. In gratitude, Ganga circled him, dividing the land into
              nine islands and earning the name Jahnavi, the daughter of Jahnu
              Muni.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
        images={[
          "/islands/07-jahnudvip/1-jahnudvip-jahnu-muni-ashram.jpg",
          "/islands/00-general/IMG_8560.jpg",
        ]}
      />
    </section>
  );
};

export default JahnuMuniAsram;
