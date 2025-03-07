import React from 'react';

const HariharaKshetra = () => {
      return (
            <div>
            <div
              id="19"
              className="  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                II 3.6
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full mr-space30 ">
                <h4 className="text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Harihara Kshetra
                </h4>
                <p className="text-mobileTextRegular md:text-textRegular">
                  The Abode of the Gods
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="mb-space15 md:mb-space30">
                    Harihara Kshetra is home to the presiding Deity Sri Harihara,
                    a unique form where Vishnu and Shiva are manifest in a single
                    deity. To His left stands Lakshmi Devi, and to His right,
                    Parvati Devi. A separate Deity of Lord Shiva is also worshiped
                    here. This sacred temple is situated on the eastern bank of
                    the Alakananda River, also known as Maha-Varanasi.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Harihara Kshetra is considered even more auspicious than
                    Kashi, the traditional holy city where Shaivites (followers of
                    Shiva) and Shaktas (followers of Durga) gather in pursuit of
                    liberation.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    Unlike the seekers at Kashi, who often engage in impersonal
                    meditation and austerities, the devotees of Harihara Kshetra
                    are immersed in ecstatic kirtan, chanting the Holy Names of
                    Sri Chaitanya.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    It is said that those who leave their bodies here receive a
                    special blessing—at the moment of death, Shiva himself
                    whispers the names of Sri Chaitanya in their ears, ensuring
                    their liberation and passage to the transcendental abode of
                    Bhagavan.
                  </p>
                  <p className="mb-space15 md:mb-space30">
                    This sacred land offers fearless refuge to all who take
                    shelter in its spiritual potency. Nityananda Prabhu once
                    visited this place, dancing in divine bliss and glorifying its
                    sanctity. During His visit, Shiva, unseen by most, humbly
                    bowed his head in obeisance to Nityananda Prabhu.
                  </p>
                  <p className="mb-space15 md:mb-space30">
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
            <div className=" md:pb-space120 flex md:grid grid-cols-12 flex-col justify-between gap-4 items-start ">
              {/* 1st img  */}
              <div className="col-start-1 col-span-2">
                <img
                  src="/assets/images/islands/03-godrumdvip/07-harihara/1.Image 04.03.2025 at 16.34.JPG"
                  className="md:w-auto w-[100vw]"
                  alt=""
                />
                {/* <p className="md:block hidden mt-space30 w-[200px] md:text-textSmall font-primaryLight">
                  The central altar of the main temple with Sri Gaura Narayana
                  accompanied by His two consorts, Vishnupriya and Lakshmipriya.
                  Additionally, the unique four-armed deity Adhokshaja Vishnu,
                  which was discovered during the excavation of the temple, is
                  also present here alongside His consorts, Bhu Devi and Lakshmi
                  Devi.
                </p> */}
              </div>
              {/* 2nd img  */}
              <div className=" col-start-5 col-span-4">
                <img
                  src="/assets/images/islands/03-godrumdvip/07-harihara/2.harihara_kshetra.jpg"
                  alt=""
                  className="md:mb-space60 md:w-[30rem]"
                />
              
              </div>
              {/* 3rd img  */}
              <div className="col-start-10 col-span-3">
                <img src="/assets/images/islands/03-godrumdvip/07-harihara/4.IMG20240318141117-min.jpg" className="w-[100vw] md:w-auto" alt="" />
               
              </div>
            </div>
          </div>
      );
};

export default HariharaKshetra;