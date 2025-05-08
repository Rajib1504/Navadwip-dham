import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const SuvarnaVihar = () => {
  return (
    <section id="suvarna-vihar">
      <div
        id="16"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 3.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Suvarna Vihar
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Palace of the King Suvarnasen
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Suvarna Vihar is located on the southern bank of the Saraswati
              River. In Satya-yuga, a king named Suvarnasen resided here. Though
              dutiful in his royal responsibilities, he was deeply absorbed in
              material enjoyment. Seeing this, Narada Muni visited him and, out
              of compassion, revealed transcendental wisdom.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Narada Muni addressed the king:
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              “O King! Why are you wasting your life chasing wealth and fleeting
              pleasures? The body, wives, children, palace, and so-called riches
              are all temporary. At the end of life, your body will turn to
              ashes, and your relatives will return to their homes, leaving you
              behind. The true purpose of human life is not found in such
              transitory pursuits but in attaining spiritual bliss and returning
              to the eternal abode, where there is no distress, fear, or lust.”
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              “Liberation through knowledge and renunciation is not the highest
              goal. The truly wise dedicate themselves to devotional service to
              Sri Krishna Bhagavan—the all-attractive Absolute Truth. Pure
              devotion is the real treasure for the wandering soul. We are all
              minute parts of the Absolute, and our highest duty is to serve
              this Center eternally. Yet, under the influence of illusion, we
              become entangled in material activities, bound by their fruits,
              and subjected to endless suffering.”
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              “Any activity performed without devotion only deepens our
              attachments to this world. Even practices like yoga or the pursuit
              of impersonal knowledge cannot free one from this bondage. True
              liberation comes only under the guidance of saintly persons, whose
              association strengthens faith and inspires one to take the path of
              devotional service to Sri Krishna. Through sincere devotional
              practice, the heart becomes purified of material contamination,
              leading to steadiness in spiritual life. This steadiness develops
              into taste, which matures into deep attachment to the Lord and
              finally culminates in pure devotion.”
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              steadiness in spiritual life. This steadiness develops into taste,
              which matures into deep attachment to the Lord and finally
              culminates in pure devotion.”
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              “The nine processes of devotional service—hearing the Lord’s
              glories, chanting, remembering, serving, worshiping, offering
              obeisances, acting as a humble servant, making friendship with the
              Lord, and fully surrendering—are transformative when practiced
              under the guidance of a pure devotee. Such devotion enables the
              soul to attain Prema—divine love of God.”
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              “O King, you are immensely fortunate to have taken birth in this
              sacred land of Navadvip. Therefore, take shelter of saintly
              persons and engage in devotional service. Worship Sri Chaitanya,
              for His mercy swiftly dissolves offenses. While worship of Sri
              Krishna is exalted, it does not yield results as swiftly as the
              worship of Sri Chaitanya."
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Hearing these instructions, King Suvarnasen was deeply moved. He
              humbly prayed to the devotees for Sri Chaitanya's mercy. Over
              time, all his material desires vanished. One night, the king had a
              divine dream in which he saw Sri Chaitanya and His associates
              joyfully chanting the Holy Names. In the dream, Sri Chaitanya
              assured him that he would become one of His associates in the
              future.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              As foretold, Suvarnasen later appeared in Sri Chaitanya’s pastimes
              as Buddhimatta Khan, who arranged the marriage ceremony of Sri
              Chaitanya and Vishnupriya Devi.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
        images={[
          "/public/islands/03-godrumdvip/04-suvarna-vihar/1-suvarna-vihar.jpg",
          "/public/islands/03-godrumdvip/04-suvarna-vihar/3-suvarna-sena-palace.jpg",
          "/public/islands/03-godrumdvip/04-suvarna-vihar/2-suvarna-vihar-deities.jpg",
          "/public/islands/03-godrumdvip/04-suvarna-vihar/4-suvarna-sena-palace.jpg",
          "/public/islands/03-godrumdvip/04-suvarna-vihar/5-suvarna-vihar-entrance.jpg",
        ]}
      />
    </section>
  );
};

export default SuvarnaVihar;
