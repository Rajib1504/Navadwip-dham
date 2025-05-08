import React from "react";
import Layout_II_B from "../../../../Home_galary/Layout_II_B";

const BrahmanPushkar = () => {
  return (
    <section id="pushkar">
      <div
        id="21"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          II 4.2
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Brahman Pushkar
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Sacred Pond of Devotion
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              In Satya-yuga, there lived a brahman named Jivan Das who had
              renounced his home to embark on a pilgrimage. During his journey,
              he reached Navadvip, where a sage appeared to him in a dream. The
              sage instructed him to stay in Navadvip to attain devotion for
              Bhagavan, emphasizing that this is the ultimate goal of life.
              Following this divine guidance, Jivan Das built a small hut and
              dedicated himself to the path of devotion for the rest of his
              life.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              As he grew older, Jivan Das remembered his deep desire to live in
              Pushkar Tirtha. However, his advanced age made it impossible for
              him to travel there, and this filled him with sadness.sensing his
              distress, the personified Pushkar Tirtha appeared before him in
              the form of a brahman and instructed him to bathe in a pond
              located in front of his house. By doing so, Jivan Das would
              experience the spiritual essence of Pushkar Tirtha.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Following the brahmana’s advice, Jivan Das bathed in the pond and
              was blessed with a divine vision of Pushkar Tirtha. Overcome with
              bliss, he listened as the personified Pushkar explained that all
              the holy places are eternally present in the sacred land of
              Navadvip. The brahman declared, “We all reside here eternally,
              serving this holy place.” He further revealed that Sri Chaitanya
              would appear in Kali-yuga, along with His associates, to bestow
              the bliss of divine love upon all.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The brahman explained that even the most fallen sinner could
              attain love of God by worshiping Sri Chaitanya in Navadvip. He
              urged Jivan Das to continue practicing devotional service in this
              sacred land to receive the special mercy of Sri Chaitanya.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Hearing this, Jivan Das resolved to remain in Navadvip. He engaged
              wholeheartedly in service and worship of Sri Chaitanya. Later, a
              divine voice assured him that by chanting the Holy Names, he would
              participate in Sri Chaitanya’s future pastimes.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_B
        images={[
          "/public/islands/00-general/IMG_8589.jpg",
          "/public/islands/04-madhyadvip/02-brahman-pushkar/3-brahman-pushkar.jpg",
        ]}
      />
    </section>
  );
};

export default BrahmanPushkar;
