import React from "react";
import usetextAnimation from "../../../../../Hooks/UsetextAnimation";
import LayoutB from './../../../../Home_galary/LayoutB';

const SamadhiOfChandKaji = () => {
  const containerRef = usetextAnimation()
  return (
    <section id="samadhi-of-chand-kazi">
    
      <div
        id="12"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 2.3
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Samadhi of Chand Kazi
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Place of Unity and Transformation
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Chand Kazi’s samadhi is considered non-different from Mathura
              because Chand Kazi himself is regarded as Kamsa in Krishna’s
              pastimes.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Back in the day, Chand Kazi was the powerful administrator of
              Navadvip, serving under the rule of Hossain Shah. He wasn’t too
              pleased with the loud kirtans happening every night at Srivas
              Angan. One day, he came there with his soldiers, broke the
              devotees’ mridanga, and ordered them to stop chanting. But that
              only set something much bigger in motion.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Word spread fast, and Sri Chaitanya didn’t take it lightly. He
              rallied the entire town for a massive sankirtan procession.
              Thousands of people flooded the streets, singing and dancing with
              unshakable determination. When they reached Kazi's house, he was
              so shaken that he locked himself inside.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              But Sri Chaitanya, always merciful, called out to him, assuring
              that no harm would come. He even addressed him as “uncle,”
              softening the tension. Kazi finally stepped out and revealed why
              he was so afraid.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The night he had broken the mridanga, he had a terrifying dream. A
              fierce, half-lion, half-man being sat on his chest, warning him
              never to stop the chanting of the Holy Name again—or else. When
              Kazi woke up, the creature’s claw marks were still on his body, a
              chilling reminder that this was no ordinary dream.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              That night changed everything. Realizing Sri Chaitanya’s divine
              power, Chand Kazi surrendered, embracing the Gaudiya philosophy
              along with his entire family.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              His samadhi remains a sacred place to this day, and an ancient
              champaka tree grows on top of it. What’s truly mysterious is that
              even though the trunk is completely hollow, the tree blooms all
              year round.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
     <LayoutB
     img1={"/islands/02-simantadvip/03-chand-kazi-samadhi/1-chand-kazi-samadhi.jpg"}
     img2={"/islands/02-simantadvip/03-chand-kazi-samadhi/3-chand-kazi-samadhi.jpg"}
     img3={"/islands/02-simantadvip/03-chand-kazi-samadhi/4-chand-kazi-samadhi.jpg"}
     />
   
    </section>
  );
};

export default SamadhiOfChandKaji;
