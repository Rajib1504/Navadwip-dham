import React from "react";
import Layout_II_B from "../../../../Home_galary/Layout_II_B";

const NidayaGaht = () => {
  return (
    <section id="nidaya-ghat">
      <section
        id="40"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          IV 9.2
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Nidaya Ghat
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Ghat of Separation
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              From this ghat, Sri Chaitanya crossed the Ganges to journey to
              Katwa, where He accepted the vow of renunciation and became Sri
              Krishna Chaitanya. Before departing, He took the dust from the
              feet of His mother, Sachi Devi, and reverently circumambulated her
              three times.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The name “Nidaya” means “cruel,” signifying the perceived cruelty
              of His decision to leave His loving family and relatives to take
              sannyasa.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
      <Layout_II_B
        images={[
          "/public/islands/09-rudradvip/02-nidaya-ghat/1-nidaya-ghat.jpg",
          "/public/islands/09-rudradvip/02-nidaya-ghat/2-nidaya-ghat.jpg"
        ]}
      />
    </section>
  );
};

export default NidayaGaht;
