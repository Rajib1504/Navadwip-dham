import React from "react";
import usetextAnimation from "../../../../../Hooks/UsetextAnimation";
import LayoutA from "./../../../../Home_galary/LayoutA";

const Belvapaksha = () => {
  const containerRef = usetextAnimation();
  return (
    <section id="belvapaksha">
      <div
        id="13"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 2.4
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Belvapaksha
          </h2>
          <p className=" paragraph text-mobileTextRegular md:text-textRegular">
            The Place of Devotion and Divine Revelation
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Belvapaksha, also known as Belpukuriya, is often compared to
              Belavan forest in Vrindavan.
            </p>
            <p className="paragraph paragraph mb-space15 md:mb-space30">
              Long ago, the brahmanas of this area worshipped Lord Shiva with
              great sincerity for two weeks, offering bel leaves and water.
              Pleased with their devotion, Lord Shiva granted them the highest
              blessing—not material wealth or power, but the priceless treasure
              of pure love for Sri Krishna. From this, the place got its name:
              Belva from the bel leaves and paksha meaning two weeks.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              But the story doesn’t end there. Lord Shiva appeared to one of the
              brahmanas named Nimbaditya and gave him a special instruction.
              Shiva directed him to the outskirts of the village, where a forest
              of bel trees stood. There, he would find his spiritual
              preceptors—the four Kumaras: Sanaka, Sanatana, Sanandana, and
              Sanat.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Following these instructions, Nimbaditya reached the forest and
              saw the four Kumaras deep in meditation. Overcome with devotion,
              he began loudly chanting the Holy Names. The sages, hearing his
              heartfelt prayers, emerged from their meditation, joyfully
              embraced him, and welcomed him as their disciple.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The Kumaras revealed a great truth to Nimbaditya. Just as Lakshmi
              Devi, Lord Brahma, and Lord Rudra had established their own
              spiritual lineages, he had been chosen to carry forward the path
              of pure devotion. They instructed him to bathe in the Ganges and,
              upon his return, initiated him into the sacred Radha-Krishna
              Yugala-mantra.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              In that sacred moment, something extraordinary happened. Pleased
              with his devotion, Sri Sri Radha-Krishna revealed their combined
              form as Sri Chaitanya Mahaprabhu. Chaitanya then disclosed His
              divine identity—the unified form of Radha and Krishna—and made a
              prophecy. He foretold that in a future birth, Nimbaditya would be
              reborn as Keshava Kashmiri, a renowned scholar who would travel
              across Bharat, conquering great pundits in debate. Eventually, his
              journey would bring him to Navadvip, where he would meet Sri
              Chaitanya.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <LayoutA
        images={[
          "/islands/00-general/_MG_2055.jpg",
          "/islands/00-general/_MG_2380.jpg",
          "/islands/00-general/IMG_8722.jpg",
        ]}
      />
    </section>
  );
};

export default Belvapaksha;
