import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const Panchaveni = () => {
  return (
    <section id="panchaveni">
      <div
        id="23"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.4
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Panchaveni{" "}
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Gateway to Liberation
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Panchaveni, meaning “five rivers,” is the confluence of five
              sacred streams: three branches of the Ganga—Bhagirathi, Mandakini,
              and Alakananda—along with the Yamuna and the unmanifested
              Saraswati. This sacred site is also referred to as Maha-Prayag by
              saintly persons and sages.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              In ancient times, Brahma and great saintly personalities performed
              millions of fire sacrifices at this very spot. According to
              Navadvip-Bhava-Taranga, the waters of Panchaveni hold unparalleled
              sanctity, as Sri Chaitanya and His associates bathed here,
              purifying the waters by absorbing the immense sins of the world.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              It is said that anyone who bathes in Panchaveni will be liberated
              from the cycle of birth and death, never again returning to the
              material world. Even great scholars such as Vedavyasa affirm that
              no place is more sacred than Panchaveni.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
        images={[
          "/islands/04-madhyadvip/04-panchaveni/1-panchaveni.jpg",
          "/islands/04-madhyadvip/04-panchaveni/2-panchaveni.jpg",
        ]}
      />
    </section>
  );
};

export default Panchaveni;
