import React from "react";
import LayoutA from "../../../../Home_galary/LayoutA";

const PrayudhaMaya = () => {
  return (
    <section id="prayudha-maya">
      <div
        id="24"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          III 5.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Prayudha Maya
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Guardian of Navadvip
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Prayudha Maya and Vriddha Shiva eternally reside in Antardvip as
              the guardians of Navadvip. However, due to the shifting course of
              the Ganges, this sacred site is now worshiped in Koladvip.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Prayudha Maya is distinct from ordinary Maya as she serves
              Bhagavan and His eternal energies by facilitating His divine
              pastimes. In this form, her role is to bewilder those who are
              averse to Bhagavan. Due to this material covering, non-devotees
              are unable to perceive the glories of this holy abode.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <LayoutA
        img1={[
          "/public/islands/05-koladvip/01-prauda-maya/1-prauda-maya.jpg",
          "/public/islands/05-koladvip/01-prauda-maya/2-prauda-maya-mandir.jpg",
          "/public/islands/05-koladvip/01-prauda-maya/4-prauda-maya-murti.jpg",
          "/public/islands/05-koladvip/01-prauda-maya/3-prauda-maya.jpg",
          "/public/islands/05-koladvip/01-prauda-maya/5-prauda-maya-temple.JPG",
          "/public/islands/05-koladvip/01-prauda-maya/6-prauda-maya.jpg",
        ]}
      />
    </section>
  );
};

export default PrayudhaMaya;
