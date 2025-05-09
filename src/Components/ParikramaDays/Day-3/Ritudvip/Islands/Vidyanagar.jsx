import React from "react";
import LayoutA from "../../../../Home_galary/LayoutA";

const Vidyanagar = () => {
  return (
    <section id="vidya-nagar">
      <section
        id="30"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          III 6.2
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Vidya Nagar
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Abode of All Wisdom{" "}
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Vidyanagar is located on the island of Ritudvip and derives its
              name from the presence of all forms of knowledge (vidya) that take
              shelter here, rooted in the Vedas. This sacred place has been
              associated with the origins of wisdom since ancient times. When
              Bhagavan appeared as Matsya (the fish incarnation), He brought all
              the Vedas to this very spot.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              At the time of creation, Maya, the illusory energy that binds all
              living beings in the material world, also manifests. However, the
              compassionate sages who take shelter in Vidyanagar, known as a
              siddha-pith (a perfected spiritual site), illuminate the path to
              liberation by dispelling the darkness of ignorance through various
              forms of knowledge.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Vidyanagar is home to sixty-four types of knowledge, all of which
              can be learned here. Among them are the sciences of medicine
              (Ayurveda), military arts (Dhanurveda), philosophy, mantras, yoga,
              and devotional service. Many exalted personalities gained wisdom
              here:
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Muni Valmiki was inspired here to compose the Ramayana, a
              transcendental epic.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Dhanvantari imparted the science of Ayurveda.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Vishwamitra and others mastered the science of military strategy,
              Dhanurveda.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Shaunaka and other sages recited Vedic mantras.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Shiva discussed Tantra here.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Brahma, at the request of the sages, compiled the four Vedas.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Kanada proposed the Vaisheshika philosophy, which focused on
              atomic theory.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Patanjali formulated the Yoga Sutras.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Jaimini compiled the Mimamsa philosophy, emphasizing karma.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Vedavyasa composed the Puranas.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Narada and four other sages composed the Pancaratra, a scripture
              on devotional service.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Even the personalized Shrutis (embodied Upanishads) worshipped Sri
              Chaitanya in this forest. Bhagavan chastised Shruti for their
              contamination by impersonal knowledge, and they only attained His
              mercy when He descended as Sri Chaitanya. He attracted them to
              become His associates through His sweet and transcendental
              activities.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
    <LayoutA
    images={["/islands/00-general/DSC01792.jpg","/islands/00-general/DSC01793.jpg","/islands/00-general/DSC01621.jpg"]}
    />
    </section>
  );
};

export default Vidyanagar;
