import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const AnimateMenu = ({ setIsOpen }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out",
      once: true, 
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className=" border-2 border-red-400 bg-primaryBlack w-[100vw] absolute min-h-screen  rounded-lg"
    >
      <div className="font-primaryLight grid md:w-[100vw] grid-cols-12">
        <div className="md:col-start-5 col-start-1 col-span-12 grid grid-cols-6">
          <Link
            to="topContainer"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
            className="md:my-space15 my-spacelg col-start-1 col-span-5 text-heading3 cursor-pointer md:text-heading2 text-success"
          >
            Intro
          </Link>
          <Link
            to="DayOne"
            smooth={true}
            duration={800}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer col-start-1 col-span-5 md:my-space15 text-heading3 md:text-heading2 text-success my-spacelg"
          >
            Parikarma
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="Books"
            smooth={true}
            duration={800}
            className="col-start-1 col-span-5 cursor-pointer md:text-heading2 text-heading3 text-success md:my-space15 my-spacelg"
          >
            Books
          </Link>
      
            <a
              href="mailto:example@email.com?subject=Hello&body=I have some questions!"
              onClick={() => setIsOpen(false)}
              className="col-start-1 cursor-pointer col-span-5 md:text-heading2 text-heading3 md:my-space15 my-spacelg text-success"
            >
              Ask a Question
            </a>
      
        </div>
        <footer className="col-start-1 col-span-3 md:col-span-5 flex items-center md:text-textSmall text-textRegular text-primaryWhite font-primaryLight justify-between">
          <h5>@2025</h5>
          <h5 className="hidden md:block">Instagram</h5>
        </footer>
      </div>
    </div>
  );
};

export default AnimateMenu;
