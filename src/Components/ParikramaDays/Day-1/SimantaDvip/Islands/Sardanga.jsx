import React from "react";
import usetextAnimation from "../../../../../Hooks/UsetextAnimation";
import Layout_II_A from "./../../../../Home_galary/Layout_II_A";

const Sardanga = () => {
  const containerRef = usetextAnimation();
  return (
    <section id="sardanga">
      <div
        id="10"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 2.1
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Sardanga
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            Temple of Lord Jagannath
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              Srila Bhaktivinod Thakur shares an incredible story from the 17th
              century about the hidden pastimes of Lord Jagannath in Navadvip.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Back then, a ruthless king named Raktabahu roamed Bharata,
              destroying temples wherever he went. One day, he set his sights on
              Jagannath Puri, planning to desecrate the sacred shrine. The
              devotees, terrified for their beloved Lord, prayed for protection.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              That night, Lord Jagannath appeared in a dream to the head priest,
              reassuring him that everything was unfolding according to His
              divine will. He instructed them to secretly move the Deities
              through the jungle to Bengal, avoiding the main roads.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The Sabaras, a tribe of devoted worshippers of Lord Jagannath,
              took on this sacred mission. Carrying the Deities through dense
              forests, they eventually reached Simantadvip, also called
              Saradanga.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              There, Lord Jagannath again appeared in a dream and expressed His
              desire to stay in that very place. Overjoyed, the Sabaras built a
              simple temple and continued their worship for many years. Though
              the original Deities and temple have since vanished, the Sabara
              village still stands, a silent witness to this divine pastime.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Centuries later, during the time of Sri Chaitanya, there lived a
              great devotee named Jagadish Ganguli. He regularly traveled to
              Jagannath Puri for the annual Ratha Yatra festival, where he was
              blessed with the association of Sri Chaitanya. However, due to
              illness, Jagadish lost his sight and was no longer able to visit
              Puri. Saddened by this misfortune, he prayed intensely to Lord
              Jagannath.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              One night, Lord Jagannath appeared to Jagadish in a dream and
              instructed him to bathe in the Ganges the following morning. The
              Lord assured him that a floating log would touch his body during
              the bath, restoring his vision. Jagadisa was also told to take the
              log to a leprous carpenter and have him carve a deity of Lord
              Jagannath.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              As foretold, Jagadish regained his sight when the log touched him
              during his bath. However, the carpenter initially refused to carve
              the deity due to the painful wounds on his hands caused by
              leprosy. Upon learning that he would be cured upon completing the
              work, the carpenter agreed to undertake the task. Although carving
              the deity caused him great discomfort, his disease miraculously
              vanished as soon as the work was completed.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Following Lord Jagannatha’s instructions, the same carpenter later
              carved the Deities of Balarama and Subhadra. The three Deities
              were installed and worshipped with great devotion.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Over time, however, the descendants of Jagadish Ganguli committed
              grave offenses during the worship of the Deities. As a result, the
              Lord cursed them with a disease, leading to the decline of their
              family and the eventual desolation of their village. The temple
              was abandoned and lost in the jungle.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Many years later, a young man named Jamini from a nearby village
              had a divine dream in which Lord Jagannath instructed him to
              resume His worship. Guided by the dream, Jamini and the villagers
              cleared the jungle and rediscovered the Deities, safe and
              untouched, hidden within an anthill.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              By the Lord’s mercy, worship was reestablished, and to this day,
              the Deities are beautifully served according to the strict
              standards introduced
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              by His Divine Grace Srila A.C. Bhaktivedanta Swami Prabhupad, the
              founder of the ISKCON mission.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
      <Layout_II_A
        images={[
          "/islands/02-simantadvip/01-satdanga-jagannath/4-satdanhga-jagannath.jpg",
          "/islands/02-simantadvip/01-satdanga-jagannath/2-baladev-subhadra-jagannath-satdanhga.JPG",
          "/public/islands/02-simantadvip/01-satdanga-jagannath/1-satdanhga-mahadev.jpg",
          "/public/islands/02-simantadvip/01-satdanga-jagannath/3-satdanhga-jagannath-natymandir.JPG",
          "/public/islands/02-simantadvip/01-satdanga-jagannath/5-baladev-subhadra-jagannath-satdanhga.JPG",
        ]}
      />
    </section>
  );
};

export default Sardanga;
