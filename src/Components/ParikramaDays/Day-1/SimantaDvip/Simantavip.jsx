import Belvapaksha from "./Islands/Belvapaksha";
import SamadhiOfChandKaji from "./Islands/SamadhiOfChandKaji";
import Sardanga from "./Islands/Sardanga";
import SridharAngan from "./Islands/SridharAngan";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Simantavip = () => {
  const containerRef = useRef();
  // const letterRef = useRef();
  // letter animation
  useGSAP(
    () => {
      if (containerRef.current) {
        const title = gsap.utils.toArray(".title");
        title.forEach((el) => {
          const words = new SplitType(el, { types: "chars" });
          gsap.from(words.chars, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.02,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 75%",
              end: "top 80%",
              scrub: true,
              // markers: true,
            },
          });
        });
      }
    },
    { scope: containerRef }
  );
  // line animation
  useGSAP(
    () => {
      if (containerRef.current) {
        const element = gsap.utils.toArray(".animateLines");
        element.forEach((el, i) => {
          const split = new SplitType(el, { types: "lines" });
          // console.log(split.lines)
          gsap.from(split.lines, {
            opacity: 0,
            y: 30,
            duration: 0.04,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 90%",
              scrub: true,
              id: `line-${i}`,
              // markers: true,
            },
          });
        });
      }
    },
    { scope: containerRef }
  );
  useGSAP(()=>{
    if(containerRef.current){
      const paragrpah = gsap.utils.toArray(".paragraph")
      paragrpah.forEach((el,i)=>{
        gsap.from(el,{
          opacity: 0,
            y: 30,
            duration: 0.04,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 80%",
              scrub: true,
              id: `line-${i}`,
              // markers: true,
            },
        })
      })
    }

  },{scope: containerRef})

  return (
    <div ref={containerRef} className="pt-space120 md:pt-space300 ">
    <article id="Simantadvip" className="w-11/12 mx-auto  ">
      <section className="md:grid grid-cols-12 ">
        <p className="text-center col-span-12 mb-space60 md:mb-space120 font-primaryLight text-mobileTextRegular">
          02
        </p>
        <h2  className=" title font-primaryLight  col-span-12  md:text-heading1 text-mobileheading1 text-center mb-space60 md:mb-space120">
        Simantadvip
        </h2>
        <h4 className=" animateLines font-primaryLight col-start-1 col-span-10 md:text-heading2 text-mobileheading2 ">
        The island of Simantadvip, now known as Simuliya, was once surrounded by the Ganges. Its name comes from a story of deep devotion.
        </h4>
      </section>

      {/* top text with left right sticky  */}
      <div className="flex  flex-col justify-start mt-space60 mb-space120 md:my-space120 ">
        <div className="md:grid  grid-cols-12">
          {/* left */}
          <div className="relative col-start-1 col-span-2  md:w-auto w-full ">
            <div className="sticky top-[4.5rem]">
              <div className=" animateLines text-mobiletextSmall md:text-textRegular md:block flex md:border-b-0 border-b border-accentBlack  py-spacelg md:py-0 justify-between ">
                <h4 className="animateLines text-secondaryBlack font-primaryLight">
                  Represents
                </h4>
                <p className=" animateLines font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Shravanam</span>
                  <span> [hearing]</span>
                </p>
              </div>
              <div className=" animateLines text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 border-b  py-spacelg md:pb-0 border-accentBlack flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Embodies
                </h4>
                <p className="font-primaryLight text-mobiletextSmall md:text-textRegular animateLines  md:block flex flex-col md:flex-row text-right md:text-left">
                  <span>Mathura, </span>
                  <span> Talavan</span>
                </p>
              </div>
              <div className=" animateLines text-mobiletextSmall md:text-textRegular  md:block md:border-b-0 md:mb-0  border-b  border-accentBlack py-spacelg md:pb-0 flex justify-between items-center">
                <h4 className="text-secondaryBlack font-primaryLight">
                  Visit on
                </h4>
                <p className="animateLines font-primaryLight text-mobiletextSmall md:text-textRegular md:block flex flex-col md:flex-row text-right md:text-left ">
                  <span> Day One</span> <span> of Parikrama</span>
                </p>
              </div>
            </div>
          </div>
          {/* right   */}
          <div className=" self-center md:mt-0  mt-space60  col-start-5 col-span-5 text-mobileTextRegular md:text-textRegular  font-primaryLight">
            <p className="animateLines">
            Long ago, Parvati, the wife of Shiva, came here with a troubled heart. She prayed and meditated, hoping to see the Supreme Lord. At last, her wish was granted—Sri Chaitanya appeared before her, shining like gold. Overcome with joy, she bowed at His feet and placed their dust on the parting of her hair, called simanta. And so, this island became known as Simantadvip.
            </p>
            <p className=" paragraph mt-space15 md:mt-space30">
            But why was Parvati so eager to see Sri Chaitanya? The answer lies with Shiva. In ancient times, he danced and chanted in great ecstasy. When Parvati asked the reason, he revealed a secret: one day, Sri Chaitanya would come to Navadvip, spreading divine love through the chanting of the Holy Names. Just hearing this, Shiva was overwhelmed with bliss and longed to go there himself.
            </p>
            <p className=" paragraph mt-space15 md:mt-space30">
            Inspired, Parvati set out for Navadvip, determined to receive Bhagavan’s mercy. Her devotion was rewarded, and when she finally saw Sri Chaitanya, her heart overflowed. She placed the dust of His feet on her simanta, and from that moment, the island bore the name Simantadvip.
            </p>
          </div>
        </div>
      </div>
        {/* ...................................................................................... */}
        {/*   Sardanga"  */}
      <Sardanga/>
        {/* ............................... */}

        {/* Sridhar Angan */}
      <SridharAngan/>

        {/* ........................... */}
        {/* Samadhi of Chand Kazi  */}
        <SamadhiOfChandKaji/>

        {/* ............................... */}

        {/* Belvapaksha*/}
       <Belvapaksha/>
      </article>
    </div>
  );
};

export default Simantavip;
