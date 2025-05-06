import React from 'react';
import Layout_II_B from '../../../../Home_galary/Layout_II_B';
import LayoutB from '../../../../Home_galary/LayoutB';

const VrindavanDasThakurShripat = () => {
      return (
        <section id="vrindavan-thakur’s-sripat">   
            <div
              id="33"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 8.2
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Vrindavan Das Thakur’s Shripat
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                The Residence of Vrindavan Das Thakur
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                  Modrumadvip is the sacred residence of Vrindavan Das Thakur, the incarnation of Vedavyasa. A disciple of Nityananda Prabhu, he composed Sri Chaitanya-Bhagavata, which narrates the divine pastimes of Sri Chaitanya and Nityananda.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                  Vrindavan Das worshiped the deities of Nitai-Gauranga and Sri Jagannatha, which are still revered today in the Mamagachi Gaudiya Math, established by Srila Prabhupad Bhaktisiddhanta Saraswati Goswami Thakur. Near his home, Malini Devi, the wife of Shrinivas Pandit, was also born.
                  </p>
                 
                </div>
              </div>
            </div>
            {/* images   */}
           <LayoutB
           img3={"/public/islands/08-modrumdvip/02-vrindavan-das-thakur-sripat/1-vrindavan-das-thakur-sripat.jpg"}
           img1={"/public/islands/08-modrumdvip/02-vrindavan-das-thakur-sripat/2-vrindavan-das-thakur-sripat-deity.jpg"}
           img2={"/public/islands/08-modrumdvip/02-vrindavan-das-thakur-sripat/3-vrindavan-das-thakur-sripat.jpg"}
           
           />
          
  
  
  
  
  
  
  
        
          </section>
      );
};

export default VrindavanDasThakurShripat;