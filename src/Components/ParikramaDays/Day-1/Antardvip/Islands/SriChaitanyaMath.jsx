import React from "react";
import LayoutA from "../../../../Home_galary/LayoutA";

const SriChaitanyaMath = () => {
  return (
    <section id="sri-chaitanya-math">
    
      <div
        id="9"
        className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          I 1.9
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Chandra Shekhara Bhavan (Sri Chaitanya Math)
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The headquarters of Sri Chaitanya’s preaching mission{" "}
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              During the time of Sri Chaitanya, this was the residence of
              Chandra Shekhar Acharya, Sri Chaitanya’s maternal uncle. Chandra
              Shekhar was a great devotee, and his wife was the sister of Sachi
              Devi, Sri Chaitanya's mother.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Sri Chaitanya would organize theatrical performances here, where
              He would play various divine roles—sometimes as Rukmini, other
              times as Maha Lakshmi, the Universal Mother—bringing delight to
              His close associates.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              This place was also chosen by Srila Prabhupad Bhakti Siddhanta
              Saraswati Goswami Thakur, who took an extraordinary vow to chant
              one billion Holy Names. He lived here in a simple hut for nearly
              nine years, observing strict austerities, eating frugally, and
              sleeping on the floor.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Later, this place became the headquarters of Sri Chaitanya’s
              preaching mission, known as Sri Chaitanya Math or Adi Math.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Srila Prabhupad used to call this place Vraj-pattana, the place
              where Vrindavan is manifested. To embody this spirit, he
              established a replica of Govardhan Hill, along with two sacred
              ponds representing Radha-kunda and Shyama-kunda, evoking the mood
              of Vrindavan.{" "}
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              The presiding deities here are Sri Sri Guru-Gauranga Gandharvika
              Giridhari, personally installed by Srila Prabhupad. His samadhi is
              also located here, alongside the samadhi of his revered spiritual
              master, Srila Gaura Kishor Das Babaji Maharaj.
            </p>
          </div>
        </div>
      </div>
      {/* images   */}
    <LayoutA
    images={["/islands/01-antardvip/09-adi-math/1-guru-gauranga-gandarvika-giridhari.jpg","/public/islands/01-antardvip/09-adi-math/2-adimath.jpg","/public/islands/01-antardvip/09-adi-math/3-prabhupad-samadhi.jpg","/public/islands/01-antardvip/09-adi-math/4-prabhupad-samadhi-murti.jpg","/public/islands/01-antardvip/09-adi-math/5-prabhupad-samadhi-murti.JPG","/public/islands/01-antardvip/09-adi-math/6-gourakishor-samadhi.jpg","/public/islands/01-antardvip/09-adi-math/7-gourakishor-samadhi-murti.jpg","/public/islands/01-antardvip/09-adi-math/8-Radha-Kunda.jpg","/public/islands/01-antardvip/09-adi-math/9-govardhan.jpg"]}
    />
    
    </section>
  );
};

export default SriChaitanyaMath;
