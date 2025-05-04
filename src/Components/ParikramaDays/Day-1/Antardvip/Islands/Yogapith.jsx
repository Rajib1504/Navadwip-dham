import React from "react";
import LayoutB from "../../../../Home_galary/LayoutB";

const Yogapith = () => {
  return (
    <section id="yogpith">
   
      <div
        id="3"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className=" animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Yogpith
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Birthplace of Sri Chaitanya Mahaprabhu
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className=" paragraph mb-space15 md:mb-space30">
              Upon entering Yogapith, the first sacred site to visit is the
              Pushpa Samadhi of Srila Bhakti Vinod Thakur, located on the right.
              Thanks to his tireless efforts, we now know Sri Chaitanya’s exact
              birthplace. Seeking his blessings is the first step in honoring
              this holy place.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The main temple houses a grand altar divided into three sections:
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Center: Sri Gaura Narayana stands with His two consorts,
              Vishnupriya and Lakshmipriya. This altar also features a rare
              four-armed deity of Adhokshaja Vishnu, discovered during the
              temple’s excavation, worshipped alongside His consorts, Bhu Devi
              and Lakshmi Devi.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Left: The deities of Sri Sri Radha Madhava and Sri Chaitanya.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Right: The Pancha-Tattva deities, along with Lord Jagannath.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              A sacred Neem tree marks the very birthplace of Sri Chaitanya.
              Beside it stands a small shrine depicting Jagannath Mishra and
              Sachi Devi lovingly holding baby Nimai in her arms.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Behind this tree is the temple of Gopeshwar Mahadev. As the
              guardian of the Holy Dham, Lord Shiva reveals its spiritual
              essence to sincere devotees. The Shiva-lingam worshipped here was
              originally discovered near Shiva-doba, adjacent to Vriddha
              Shiva-ghat, and now resides in Yogapith alongside a smaller linga
              of Gopeshwar Mahadev.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The Yogapith complex also features the deities of Lakshmi
              Narasimha and Gaura-Gadadhara, located behind the main temple
              hall. Nearby, the sacred Gaura-kunda further enhances the sanctity
              of this divine place.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
    <LayoutB
    img1={"/islands/01-antardvip/03-yogapith/2-ypgapith-3-mandirs.jpg"}
    img2={"/islands/01-antardvip/03-yogapith/1-yogapith.jpg"}
    img3={"/islands/01-antardvip/03-yogapith/3-shacimata-and-jagannath-mishra.jpg"}
    />
  
    </section>
  );
};

export default Yogapith;
