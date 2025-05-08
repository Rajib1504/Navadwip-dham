import React from 'react';
import Layout_II_A from '../../../../Home_galary/Layout_II_A';

const Chapahati = () => {
      return (
            <section id='champahati'>
            <section
              id="28"
              className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
            >
              {/* First Box (Starts from top) */}
              <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
                III 5.5
              </p>
  
              {/* Second Box (Centered by default) */}
              <div className="col-start-5 col-span-5  w-full  ">
                <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
                  Champahatti
                </h2>
                <p className="paragraph text-mobileTextRegular md:text-textRegular">
                  The Garden of Champaka Blossoms
                </p>
                {/* description  */}
                <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
                  <p className="paragraph mb-space15 md:mb-space30">
                    Champahatti, located in the northern part of Koladvip within
                    the village of Champahatta in Navadvip, represents Khadiravan
                    Forest in Vrindavan, where Krishna and Balarama would rest
                    together.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    In a conversation between Shrinivas Acharya and Ishan Thakur,
                    Ishan recounted the story of a great devotee of Sri Krishna—an
                    elderly brahman who lived in Satya-yuga. This brahman
                    worshiped Bhagavan with champaka flowers, offering them with
                    deep devotion while meditating on the golden form that
                    Bhagavan would assume in the future. Though his heart was
                    filled with devotion, he was also sorrowful, knowing he would
                    not personally witness this golden form.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    Moved by the brahman’s pure devotion, Sri Krishna Bhagavan
                    appeared before him in His effulgent golden form as Sri
                    Chaitanya, radiating the beauty of champaka flowers. Bhagavan
                    informed the brahman that in the age of Kali, He would descend
                    in this golden form to distribute the unconditional love of
                    Godhead and inspire all to chant the Holy Names. He also
                    assured the brahman that he would take birth again to witness
                    these divine pastimes.
                  </p>
  
                  <p className="paragraph mb-space15 md:mb-space30">
                    Overwhelmed with ecstasy, the brahman glorified the champaka
                    flowers for their great fortune. From that moment, the place
                    became known as Champakhatta. In his next life, this brahman
                    was known as Dvija Vaninath, the younger brother of Gadadhar
                    Pandit.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    At this sacred location, Sri Chaitanya, surrounded by His
                    associates, once performed congregational chanting of the Holy
                    Name during a festival at His home. Today, a temple stands
                    here, housing the deities of Sri Sri Gaura-Gadadhara, which
                    Dvija Vaninath personally worshiped over 500 years ago.
                    Devotees from the Gaudiya Math, established by Srila
                    Prabhupad, continue to serve these deities today.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    According to Nityananda Prabhu’s explanations to Sri Jiva
                    Goswami, this area was once home to a beautiful garden of
                    champaka flowers, part of Khadiravan Forest. The gopi
                    Champakalata would gather flowers from here to make garlands,
                    which she offered to Sri Sri Radha-Krishna.
                  </p>
                  <p className="paragraph mb-space15 md:mb-space30">
                    In the age of Kali, this garden became a place where local
                    gardeners collected champaka flowers and sold them, leading to
                    the establishment of a bustling market, or “hatta.” As a
                    result, the area became known as Champakhatta, later
                    simplified to Champahatti.
                  </p>
                </div>
              </div>
            </section>
            {/* images   */}
          <Layout_II_A
          img1={"/public/islands/05-koladvip/05-champahatti/2-champahatti.jpg"}
          
          img2={"/public/islands/05-koladvip/05-champahatti/3-gaura-gadadhar-champahatti.jpg"}
          />
          </section>
      );
};

export default Chapahati;