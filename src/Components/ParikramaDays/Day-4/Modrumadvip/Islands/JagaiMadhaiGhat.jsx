import React from "react";
import Layout_II_A from "../../../../Home_galary/Layout_II_A";

const JagaiMadhaiGhat = () => {
  return (
    <section id="jagai-madhai-ghat">
      <section
        id="37"
        className=" place pt-space60 md:mt-0 mt-space30   gap-spacelg flex flex-col  md:grid grid-cols-12 font-primaryLight"
      >
        {/* First Box (Starts from top) */}
        <p className="animateLines self-start text-mobileTextRegular col-start-1 col-span-1 md:text-textRegular">
          IV 8.6
        </p>

        {/* Second Box (Centered by default) */}
        <div className="col-start-5 col-span-5  w-full  ">
          <h2 className="animateLines text-mobileheading2 md:text-heading2 font-primaryLight mb-spacelg">
            Jagai & Madhai Ghat
          </h2>
          <p className="paragraph text-mobileTextRegular md:text-textRegular">
            The Ghat of Redemption
          </p>
          {/* description  */}
          <div className="my-space60 text-mobileTextRegular md:text-textRegular md:my-space120 ">
            <p className="paragraph mb-space15 md:mb-space30">
              This sacred ghat was restored by the two brothers, Jagai and
              Madhai, whom Sri Chaitanya delivered through the boundless mercy
              of Nityananda Prabhu. It is located about thirty meters from
              Nagariya Ghat.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Although Sri Chaitanya had forgiven Madhai for his past misdeeds,
              he remained deeply remorseful, grieving over the offenses he had
              committed. To purify his heart, Nityananda Prabhu instructed him
              to serve Ganga Devi by cleaning and maintaining the bathing ghat.
              He also advised Madhai to offer obeisances to all pilgrims who
              visited the ghat and humbly seek their forgiveness.
            </p>
            <p className="paragraph mb-space15 md:mb-space30">
              Following these instructions, Madhai undertook severe austerities,
              dedicating himself to restoring and preserving the ghat. Both
              Jagai and Madhai chanted three lakhs (300,000) of the Holy Names
              daily while strictly observing celibacy. Through their unwavering
              devotion and penance, they attained complete purification,
              becoming shining examples of transformation through the mercy of
              Sri Chaitanya and Nityananda.
            </p>
          </div>
        </div>
      </section>
      {/* images   */}
    <Layout_II_A
    images={["/islands/08-modrumdvip/06-jagai-madhai-ghat/1-jagai-madhai-ghat.JPG","/islands/08-modrumdvip/06-jagai-madhai-ghat/2-jagai-madhai-ghat.JPG"]}
    />
    </section>
  );
};

export default JagaiMadhaiGhat;
