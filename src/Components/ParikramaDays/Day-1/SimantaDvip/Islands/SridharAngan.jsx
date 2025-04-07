import React from 'react';
import usetextAnimation from '../../../../../Hooks/UsetextAnimation';

const SridharAngan = () => {
  const containerRef = usetextAnimation()
      return (
        <section id='Sridhar_Angan'>
            <div id='Sridhar Angan'>
            <div
              id="11"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                I 2.2
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  <a href="#Sridhar Angan">Sridhar Angan</a>
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                  House of Kalavecha Sridhar
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                    Just southwest of the Jagannath temple, on the border between
                    Simantadvipa and Antardvipa, lies a special place—Sridhar
                    Angan. It sits by the Jalangi (Saraswati) River and holds
                    memories of one of Sri Chaitanya’s dearest devotees, Kalavecha
                    Sridhar.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Kalavecha Sridhar led a simple life in a dilapidated hut,
                    earning a living by selling banana leaves and vegetables. Half
                    of his meager earnings went directly to worshiping Ganga Devi.
                    Sri Chaitanya often visited to bargain with Sridhar, demanding
                    vegetables at half price, teasing and testing the patience of
                    His devotee.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    This place became even more special after Sri Chaitanya
                    defeated Chand Kazi. On His way back, He stopped here to rest,
                    making it a Vishram-sthali, a “resting place,” just like the
                    one in Mathura. It’s said that right here, Sri Chaitanya drank
                    water from Sridhar’s cracked iron pot—a moment that shows how
                    much He cherished His devotee’s love over wealth or grandeur.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Like many sacred spots in Navadvip, Sridhar Angan is adorned
                    with beautiful ponds (kundas). It is believed that
                    Vishvakarma, the celestial architect, created these ponds,
                    knowing that Sri Chaitanya and His devotees would chant the
                    Holy Name here day and night. He wanted to ensure that
                    Chaitanya and all His associates always had cool, refreshing
                    water.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    This place is also considered non-different from Talavan, one
                    of Vrindavan’s twelve forests. Just as Lord Balaram killed the
                    demon Dhenukasura in Talavan, it is said that here in
                    Navadvip, He killed the demon Mayasura, further adding to the
                    sacredness of Sridhar Angan.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
            <div className=" md:pb-space120 flex md:flex-row flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="hidden">
                <img
                  src="/assets/images/islands/02-simantadvip/02-sridhar-angan/Sridhar Angan.jpg"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
                {/* <p className="md:block hidden md:text-textSmall mt-space30 w-[200px] font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                </p> */}
              </div>
           
            </div>
          </div>
          </section> 
      );
};

export default SridharAngan;