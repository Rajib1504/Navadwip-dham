import React from "react";
import LayoutA from "../../../../Home_galary/LayoutA";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const RadhaKunda = () => {
  return (
    <section id="radha-kunda">
      
        <section
          id="29"
          className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
        >
          {/* First Box (Starts from top) */}
          <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            III 6.1
          </p>

          {/* Second Box (Centered by default) */}
          <div className="col-start-5 col-span-5  w-full  ">
            <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Radha Kunda
            </h2>
            <p className="paragraph text-mobileTextRegular md:text-textRegular">
              The Pond of Molten Love
            </p>
            {/* description  */}
            <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
              <p className="paragraph mb-space15 md:mb-space30">
                When Nityananda Prabhu arrived at this place with Jiva Goswami
                and other devotees, he became immersed in the mood of Balaram.
                Like a cowherd boy, he suddenly called for a horn to gather the
                cows, overcome with longing for Sri Krishna and His companions.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                When the devotees reminded him that Sri Chaitanya had taken
                sannyasa and departed for Nilachal, Nityananda collapsed in
                sorrow, rolling in the dust with tears streaming down his face.
                For over an hour, he remained in deep ecstasy, appearing as if
                he had lost all desire to live.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                To revive Him, the devotees began chanting the glories of Sri
                Chaitanya. As soon as he heard His beloved Lord’s name,
                Nityananda regained awareness. Filled with emotion, he then
                revealed the sacred nature of this place.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                He explained that Sri Chaitanya comes here every day after
                lunch, chanting the Holy Names and freely distributing His
                boundless love to all, for this place is non-different from
                Radha-kunda in Vrindavan.
              </p>
            </div>
          </div>
        </section>
        {/* images   */}
     <Layout_II_A
     img1={"/public/islands/06-ritudvip/1-ritudvip-radha-kunda.JPG"}
     img2={"/public/islands/00-general/IMG_3468.jpg"}
     />
      
    </section>
  );
};

export default RadhaKunda;
