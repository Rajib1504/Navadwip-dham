import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const PrithaKunda = () => {
  return (
    <section id="pritha-kunda">
      <div
        id="8"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.8
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Pritha-kunda
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            Lake of the King Prithu
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Prithu-kunda—a sacred spot on the way to Chaitanya Math—brims with
              both historical and spiritual significance.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              In ancient times, during Satya-yuga, Prithu Maharaj, a powerful
              ruler and an incarnation of Sri Krishna’s energies, traveled the
              land, bringing prosperity to his people. Not just a righteous
              king, he was a guardian of dharma, crowned by great sages and
              brahmanas. When there was a famine and the earth became unfertile,
              Prithu Maharaj, through his divine power, restored fertility to
              the land, ensuring the welfare of all living beings.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Upon arriving in Navadvip, he discovered a radiant light emanating
              from a particular spot. Recognizing the sacredness of the place,
              he decided to dig a lake, which became known as Prithu-kunda. Its
              pure and revitalizing waters became a cherished blessing for
              generations.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Centuries later, King Lakshman Sena, seeking to honor his
              ancestors, expanded the lake and renamed it Ballal Dighi, in
              tribute to his father, Ballal Sena. While the lake no longer
              remains, the ruins of King Ballal Sena’s ancient palace still
              stand—silent, yet powerful, testaments to the deep history and
              sanctity of this place.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Prithu Maharaj exemplifies the limb of devotion known as archanam
              (worshiping). He dedicated all his wealth to the service of
              Bhagavan, demonstrating the ideal of selfless devotion.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
      images={["/islands/01-antardvip/08-prithu-kunda/1-prithu-kunda.jpg",
      "/islands/01-antardvip/08-prithu-kunda/2-prithu-kunda.jpg"]}/>
    </section>
  );
};

export default PrithaKunda;
