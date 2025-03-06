import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const AnimateMenu = ({ setIsOpen }) => {
  useEffect(() => {
    AOS.init({
      duration: 250, 
      easing: "ease-out",
      
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className=" overflow-hidden top-0 z-40 bg-primaryBlack w-[100%] box-border   absolute min-h-screen flex justify-between rounded-lg"
    >
      <div className="font-primaryLight grid md:w-[100%] grid-cols-12">
        <div className="md:col-start-5 col-start-1 col-span-12 grid grid-cols-6">
          <a
            href="#topContainer"
        
            onClick={() => setIsOpen(!isOpen)}
            className="md:my-space15 my-spacelg col-start-1 col-span-5 text-heading3 cursor-pointer md:text-heading2 text-success"
          >
            Intro
          </a>
          <a
            href="#DayOne"
        
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer col-start-1 col-span-5 md:my-space15 text-heading3 md:text-heading2 text-success my-spacelg"
          >
            Parikarma
          </a>
          <a href="#Books"
            onClick={() => setIsOpen(!isOpen)}
          
          
            className="col-start-1 col-span-5 cursor-pointer md:text-heading2 text-heading3 text-success md:my-space15 my-spacelg"
          >
            Books
          </a>
      
            <a
              href="mailto:hello@dhama.info?subject=Navadvip"
              onClick={() => setIsOpen(!isOpen)}
              className="col-start-1 cursor-pointer col-span-5 md:text-heading2 text-heading3 md:my-space15 my-spacelg text-success"
            >
              Ask a Question
            </a>
        </div>
        <footer className="col-span-12 md:w-[100vw] grid gird-cols-6 md:text-textSmall text-textRegular text-primaryWhite font-primaryLight">
        <p className="col-span-2">@2025</p>
          <a  onClick={() => setIsOpen(!isOpen)} href="https://www.instagram.com/bsvtrust" target="_blank" className="hidden md:block col-start-5 col-span-9">Instagram</a>
        </footer>
      </div>
    </div>
  );
};

export default AnimateMenu;
