import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const SrivasAngan = () => {
  return (
    <section id="shrivas-angan">
      <div
        id="4"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.4
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className=" animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Shrivas Angan
          </h2>
          <p className=" paragraph text-mobileTextRegular md:text-textRegular">
            The Sacred Site of Sankirtan
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className=" paragraph  mb-space15 md:mb-space30">
              Shrivas Angan, the home of Shrivas Pandit, is located north of
              Yogapith.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Just as Yogapith was the center of Sri Chaitanya’s childhood and
              boyhood pastimes, Shrivas Angan became the heart of His sankirtana
              pastimes. Historically, this was the residence of Shrivas Pandit
              and his four brothers. For an entire year, Sri Chaitanya and His
              closest associates gathered here nightly for the ecstatic
              congregational chanting of the Holy Names (sankirtan).
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              However, the joyful kirtan disturbed the atheistic residents, who
              complained to the local ruler, Chand Kazi. In response, Chand Kazi
              arrived with his soldiers and broke the devotees’ drum—mridanga—as
              a warning to stop their nocturnal singing. This event led to the
              site being known as Khol Banga Danga—"the place where the drum was
              broken."
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The temple’s central altar enshrines Bhagavan Sri Chaitanya,
              alongside Shrivas Pandit and Gadadhar. The left altar houses Sri
              Sri Radha-Krishna, while the right altar features the
              Pancha-Tattva deities, with a broken mridanga placed at the center
              as a powerful reminder of this historic event.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
        images={[
          "/islands/01-antardvip/04-srivas-angan/1-srivas-angan.jpg",
          "/islands/01-antardvip/04-srivas-angan/2-pancha-tattva.JPG",
          "/public/islands/01-antardvip/04-srivas-angan/3-pancha-tattva-2.JPG",
          "/public/islands/01-antardvip/04-srivas-angan/4-srivas-angan.JPG",
        ]}
      />
    </section>
  );
};

export default SrivasAngan;
