import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";


const AmraGhat = () => {
  return (
    <section id="amra-ghat">
        <div
          id="17"
          className="place  pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
        >
          {/* First Box (Starts from top) */}
          <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
            II 3.4
          </p>

          {/* Second Box (Centered by default) */}
          <div className="col-start-5 col-span-5  w-full  ">
            <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
              Amra Ghat
            </h2>
            <p className="paragraph text-mobileTextRegular md:text-textRegular">
              The Mango Grove
            </p>
            {/* description  */}
            <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
              <p className="paragraph mb-space15 md:mb-space30">
                Amra Ghat is the place where Lord Chaitanya performed the
                miracle of the mango tree. Now, there is a small mango grove
                here.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                On this sacred site, Sri Chaitanya planted a single mango seed,
                which immediately grew into a large tree laden with delicious
                mango fruits. This miraculous tree produced fruit all year
                round, defying the natural seasonal cycle.
              </p>
              <p className="paragraph mb-space15 md:mb-space30">
                Devotees held festivals at this place and enjoyed the mangoes
                afterward. After a year, the tree mysteriously disappeared.
              </p>
            </div>
          </div>
        </div>
        {/* images   */}
      <Layout_II_A
      images={["/public/islands/03-godrumdvip/05-amra-ghat/1-amra-ghat.jpg",
      "/public/islands/03-godrumdvip/05-amra-ghat/2-amra-ghat.jpg","/public/islands/03-godrumdvip/05-amra-ghat/3-amra-ghat.jpg"]}
      />
     
    </section>
  );
};

export default AmraGhat;
