import React from 'react';
import LayoutA from '../../../../Home_galary/LayoutA';

const NagariyaGhat = () => {
      return (
        <section id='nagariya-ghat'>
            
            <section
              id="36"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                IV 8.5
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                Nagariya Ghat
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Playful Pastimes of Nimai
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  Just ten meters from Barakona Ghat lies Nagariya Ghat—a special place in the pastimes of Sri Chaitanya. As a child, known as Nimai, He would often play mischievous games and engage in sports here.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  One notable event occurred when Mother Shachi, while bathing at this ghat, saw Vishnupriya and decided that she would be the perfect wife for her son.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Sri Chaitanya’s playful nature frequently revealed itself at this spot. He would splash water on the brahmins as they bathed, leaving them frustrated and prompting complaints to His father, Jagannath Mishra. Hearing their grievances, Jagannath Mishra would rush to the ghat with a stick, ready to discipline Nimai. However, aware of His father’s arrival, Nimai would cleverly run home beforehand and act innocent. He would sit with ink-stained fingers and clothes, pretending to have been studying diligently all along. Seeing this, His father would be convinced, and Nimai would escape punishment.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Another significant event at Nagariya Ghat took place on the day of the Kazi’s defeat. Leading a massive procession of devotees holding lighted torches and chanting the Holy Names, Sri Chaitanya stopped at this ghat before continuing to the Kazi’s residence in Simulia.
                  </p>
                  
                </div>
              </div>
            </section>
            {/* images   */}
          <LayoutA
          img1={"/public/islands/00-general/DSC00867.jpg"}
          img2={"/public/islands/00-general/DSC01293.jpg"}
          img3={"/public/islands/00-general/DSC00868.jpg"}
          />
          
          </section>
      );
};

export default NagariyaGhat;