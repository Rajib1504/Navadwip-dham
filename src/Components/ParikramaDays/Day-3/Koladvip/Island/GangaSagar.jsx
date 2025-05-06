import React from 'react';

import Layout_II_A from '../../../../Home_galary/Layout_II_A';

const GangaSagar = () => {
      return (
        <section id='ganga-sagar'>
            
            <div
              id="27"
              className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 5.4
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Ganga Sagar
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                  Where the Ganga Meets the Ocean
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                    Ganga Sagar is the sacred confluence where the Ganga River
                    meets the ocean. According to ancient accounts, a dialogue
                    once took place between the personified Ganga and the ocean.
                    The ocean praised Ganga for her unparalleled fortune, as Sri
                    Chaitanya Bhagavan himself had bathed in her waters.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    In response, Ganga expressed her sorrow, lamenting that Sri
                    Chaitanya would soon leave her and journey to Nilachal
                    (Jagannath Puri), situated on the ocean’s shore. Hearing this,
                    the ocean reassured Ganga, explaining that Sri Chaitanya never
                    truly leaves His eternal abode, Navadvip Dham, even if it
                    appears so to the external eye. The ocean then revealed his
                    deep longing to remain near Ganga and continuously serve
                    Navadvip.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    To this day, it is said that the ocean remains at this sacred
                    confluence, absorbed in meditation on Sri Chaitanya's divine
                    pastimes.
                  </p>
                </div>
              </div>
            </div>
            {/* images   */}
           <Layout_II_A
           img1={'/public/islands/05-koladvip/04-ganga-sagar/1-ganga-sagar.jpg'}
           img2={'/public/islands/00-general/IMG_8582.jpg'}
           />
          
          </section>
      );
};

export default GangaSagar;