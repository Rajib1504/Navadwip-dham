import React from 'react';
import LayoutA from '../../../../Home_galary/LayoutA';

const HariharaKshetra = () => {
      return (
        <section id='harihara-ksetra'>
            
            <div
              id="19"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                II 3.6
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Harihara Kshetra
                
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                  The Abode of the Gods
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                    Harihara Kshetra is home to the presiding Deity Sri Harihara,
                    a unique form where Vishnu and Shiva are manifest in a single
                    deity. To His left stands Lakshmi Devi, and to His right,
                    Parvati Devi. A separate Deity of Lord Shiva is also worshiped
                    here. This sacred temple is situated on the eastern bank of
                    the Alakananda River, also known as Maha-Varanasi.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Harihara Kshetra is considered even more auspicious than
                    Kashi, the traditional holy city where Shaivites (followers of
                    Shiva) and Shaktas (followers of Durga) gather in pursuit of
                    liberation.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Unlike the seekers at Kashi, who often engage in impersonal
                    meditation and austerities, the devotees of Harihara Kshetra
                    are immersed in ecstatic kirtan, chanting the Holy Names of
                    Sri Chaitanya.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    It is said that those who leave their bodies here receive a
                    special blessing—at the moment of death, Shiva himself
                    whispers the names of Sri Chaitanya in their ears, ensuring
                    their liberation and passage to the transcendental abode of
                    Bhagavan.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    This sacred land offers fearless refuge to all who take
                    shelter in its spiritual potency. Nityananda Prabhu once
                    visited this place, dancing in divine bliss and glorifying its
                    sanctity. During His visit, Shiva, unseen by most, humbly
                    bowed his head in obeisance to Nityananda Prabhu.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Harihara Kshetra stands as a living testament to Shiva’s
                    devotion to Sri Chaitanya. Revered as the greatest Vaishnava,
                    Shiva eternally resides here with Parvati Devi, chanting the
                    Holy Names of Sri Chaitanya and bestowing his blessings upon
                    all who seek Sri Chaitanya’s mercy.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
           <LayoutA
           img1={"/public/islands/03-godrumdvip/07-harihara/1-harihara.JPG"}
           img2={"/public/islands/03-godrumdvip/07-harihara/2-harihara-murti.jpg"}
           img3={"/public/islands/03-godrumdvip/07-harihara/3-harihara-murti.jpg"}
           />
          
          </section>
      );
};

export default HariharaKshetra;