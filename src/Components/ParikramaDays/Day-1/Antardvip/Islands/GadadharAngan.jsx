import React from "react";
import Layout_II_B from "../../../../Home_galary/Layout_II_B";

const GadadharAngan = () => {
  return (
    <section id="gadadhar-angan">
      <div
        id="6"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className=" animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.6
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Gadadhar Angan
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            Residence of Gadadhara Pandit{" "}
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              The residence of Gadadhar Pandit is located near Advaita Bhavan.
              He was born to Madhav Mishra and Ratnavati, who hailed from the
              Chattamata district in present-day Bangladesh.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              From a young age, Gadadhar Pandit was closely connected with Sri
              Chaitanya. Even as a child, he was known for his serene nature and
              humble disposition.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              On one occasion, Sri Chaitanya asked Gadadhar Pandit about the
              nature of liberation (moksha). Although Gadadhar gave the correct
              answer, Sri Chaitanya continued to challenge him in debate.
              Feeling overwhelmed by this, Gadadhar Pandit distanced himself
              from Chaitanya’s association.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Later, Gadadhar Pandit moved to Puri to stay near Sri Chaitanya.
              He is revered as the incarnation of Srimati Radharani. With Sri
              Chaitanya’s blessings, he received initiation from Pundarik
              Vidyanidhi, a great devotee of Sri Krishna Bhagavan.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              In the final years of his life, Gadadhar Pandit took the vow of
              kshetra sannyasa, a form of renunciation that bound him to remain
              in Puri. He devoted himself to the worship of his beloved deity,
              Tota-Gopinath.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Sri Chaitanya would frequently visit Gadadhar Pandit to listen to
              his soulful and melodic recitations of the Srimad Bhagavatam.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_B
        img1={"/islands/01-antardvip/06-gadadhar-angan/2-goura-gadadhar.jpg"}
        img2={"/islands/01-antardvip/06-gadadhar-angan/1-gadhar-angan.jpg"}

      />
    </section>
  );
};

export default GadadharAngan;
