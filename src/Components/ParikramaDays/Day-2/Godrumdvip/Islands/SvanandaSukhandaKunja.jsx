import React from "react";
import LayoutB from "../../../../Home_galary/LayoutB";

const SvanandaSukhandaKunja = () => {
  return (
    <section id="svananda-sukhada-kunja">
      <div
        id="14"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 3.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Svananda Sukhada Kunja
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Grove of Transcendental Joy
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Svananda Sukhada Kunja is a place of extraordinary spiritual
              significance, lying near the banks of the Saraswati (Jalangi)
              River. It was here that Srila Bhakti Vinod Thakur chose to reside,
              and in this sacred retreat, he received many divine revelations.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              One of the most historic moments at this site was the discovery of
              Sri Chaitanya Mahaprabhu’s true birthplace. Alongside Srila
              Jagannath Das Babaji Maharaj, Srila Bhakti Vinod Thakur uncovered
              this long-lost holy site, a moment that changed the course of
              Gaudiya Vaishnavism.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The second-floor room of Svananda Sukhada Kunja still holds the
              presence of Srila Bhakti Vinod Thakur. It was in this very space
              that he wrote numerous books and sections, offering timeless
              wisdom to the world. Among them are Jaiva-dharma, Bhajana-rahasya,
              Krishna-samhita, Navadvipa-dhama-mahatmya, and Harinama-cintamani.
              Additionally, all four of his cherished song
              collections—Sharanagati, Gitavali, Gitamala, and
              Kalyana-kalpataru—were composed here.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              On the first floor, the deities of Sri Gaura-Gadadhara stand as a
              testament to his deep devotion, personally worshipped by him with
              great love and affection.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Just near by lies the bhajan-kutir of Srila Gaura Kishor Das
              Babaji Maharaj, a humble hut where he immersed himself in intense
              devotional practice. It was here that he often met with Srila
              Bhakti Vinod Thakur, their discussions shaping the future of the
              Gaudiya tradition.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Svananda Sukhada Kunja also holds the pushpa-samadhi of Srila
              Bhakti Vinod Thakur, marking his eternal presence in this holy
              place. It was within these very place that Srila Bhakti Siddhanta
              Saraswati Thakur received initiation from Srila Gaura Kishor Das
              Babaji Maharaj.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <LayoutB
        images={[
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/1-svananda-sukhanda-kunja.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/2-svananda-sukhanda-kunja.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/3-bhaktivinod-svananda-sukhanda-kunja.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/4-mandir-svananda-sukhanda-kunja.JPG",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/6-goura-gadadhar-svananda-sukhanda-kunja.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/7-bhakrtivinods-room-svananda-sukhanda-kunja.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/8-BVTs-Gaura-Gadahara.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/9-gaurakishor-svananda-sukhanda-kunja.jpg",
          "/public/islands/03-godrumdvip/01-svananda-sukhanda-kunja/10-bhaktivinod-svananda-sukhanda-kunja.jpg",
        ]}
      />
    </section>
  );
};

export default SvanandaSukhandaKunja;
