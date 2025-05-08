import React from "react";
import LayoutB from "../../../../Home_galary/LayoutB";

const Uchahatt = () => {
  return (
    <section id="uchchahata">
      <div
        id="22"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Uchahatt
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Land of Joyful Chanting
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Ucchahatt is a sacred place non-different from Kurukshetra of
              Brahmavarta, the divine land stretching between the Yamuna and the
              Ganga. Within this part of Madhyadvip, all the holy places of
              Brahmavarta are said to be present.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The name “Ucchahatt” derives from the joyful market (hatt) of
              glorifications offered by the Gods and Goddesses, led by Indra, in
              honor of Sri Chaitanya and His divine pastimes.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              It is said that Sri Chaitanya Himself, accompanied by His
              associates, visited this place to blissfully chant the Holy Names.
              Situated on the border of Navadvip, Ucchahatt holds immense
              spiritual potency. The merit of residing in Kurukshetra for a
              hundred years can be attained by staying here for just one day.
              Simply visiting this sacred site bestows the priceless treasure of
              love of God.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Even today, fortunate souls may still hear the celestial music and
              prayers offered by the Gods and Goddesses to Sri Chaitanya,
              resonating in the air of this holy land.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <LayoutB
        images={[
          "/public/islands/00-general/IMG_8565.jpg",
          "/public/islands/00-general/IMG_8582.jpg",
          "/public/islands/00-general/IMG_8583.jpg",
        ]}
      />
    </section>
  );
};

export default Uchahatt;
