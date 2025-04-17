import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import ParikramaList from "./../ParikramaList/ParikramaList";
import usetextAnimation from "../../Hooks/UsetextAnimation";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const placesData = [
    {
      day: "Day One",
      title: "Antardvip",
      places: [
        { id: "1", idx: "I 1.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "2", idx: "I 1.2", name: "Nanda Acharya Bhavan" },
        { id: "3", idx: "I 1.3", name: "Yogapith" },
        { id: "4", idx: "I 1.4", name: "Srivas Angan" },
        { id: "5", idx: "I 1.5", name: "Advaita Bhavan" },
        { id: "6", idx: "I 1.6", name: "Gadadhar Angan" },
        { id: "7", idx: "I 1.7", name: "Murari Gupta Angan" },
        { id: "8", idx: "I 1.8", name: "Pritha-kunda" },
        { id: "9", idx: "I 1.9", name: "Sri Chaitanya Math" },
      ],
    },
    {
      day: "Day One",
      title: "Simantadvip",
      places: [
        { id: "10", idx: "I 2.1", name: "Sardanga" },
        { id: "11", idx: "I 2.2", name: "Sridhar Angan" },
        { id: "12", idx: "I 2.3", name: "Samadhi of Chand Kazi" },
        { id: "13", idx: "I 2.4", name: "Belvapaksha" },
      ],
    },
    {
      day: "Day Two",
      title: "Godrumdvip",
      places: [
        { id: "14", idx: "II 3.1", name: "Svananda Sukhada Kunja" },
        { id: "15", idx: "II 3.2", name: "Surabhi Kunja" },
        { id: "16", idx: "II 3.3", name: "Suvarna Vihar" },
        { id: "17", idx: "II 3.4", name: "Amra Ghat" },
        { id: "18", idx: "II 3.5", name: "Narashima Pally" },
        { id: "19", idx: "II 3.6", name: "Harihara Ksetra" },
      ],
    },
    {
      day: "Day Two",
      title: "Madhyadvip",
      places: [
        { id: "20", idx: "II 4.1", name: "Naimisharanya" },
        { id: "21", idx: "II 4.2", name: "Pushkar" },
        { id: "22", idx: "II 4.3", name: "Uchahatt" },
        { id: "23", idx: "II 4.4", name: "Panchaveni" },
      ],
    },
    {
      day: "Day Three",
      title: "Koladvip",
      places: [
        { id: "24", idx: "III 5.1", name: "Prayudha Maya" },
        { id: "25", idx: "III 5.2", name: "Devananda Gaudiya Math" },
        { id: "26", idx: "III 5.3", name: "Samudragarh" },
        { id: "27", idx: "III 5.4", name: "Ganga Sagar" },
        { id: "28", idx: "III 5.5", name: "Champahati" },
      ],
    },
    {
      day: "Day Three",
      title: "Ritudvip",
      places: [
        { id: "29", idx: "III 6.1", name: "Radha Kunda" },
        { id: "30", idx: "III 6.2", name: "Vidya Nagar" },
      ],
    },
    {
      day: "Day Three",
      title: "Jahnudvip",
      places: [{ id: "31", idx: "III 7.1", name: "Jahnu Muni's Asram" }],
    },
    {
      day: "Day Three",
      title: "Modrumadvip",
      places: [
        { id: "32", idx: "III 8.1", name: "Vaikunthapur" },
        { id: "33", idx: "III 8.2", name: "Vrindavan Thakur’s Sripat" },
        { id: "34", idx: "III 8.3", name: "Mahatpur" },
      ],
    },
    {
      day: "Day Four",
      title: "Modrumadvip",
      places: [
        { id: "35", idx: "IV 8.4", name: "Barakona Ghat" },
        { id: "36", idx: "IV 8.5", name: "Nagariya Ghat" },
        { id: "37", idx: "IV 8.6", name: "Jagai-Madhai Ghat" },
        { id: "38", idx: "IV 8.7", name: "Bharadvaja Tila" },
      ],
    },
    {
      day: "Day Four",
      title: "Rudradvip",
      places: [
        { id: "39", idx: "IV 9.1", name: "Jayadev's Sripat" },
        { id: "40", idx: "IV 9.2", name: "Nidaya Ghat" },
        { id: "41", idx: "IV 9.3", name: "Rudra Gaudiya Math" },
      ],
    },
  ];
  const containerRef = usetextAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(placesData[0].places[0]);
  const [active, setActive] = useState({});
  const [isParikarmaOpen, setIsParikarmaOpen] = useState(false);

  // toggle parikramlist
  const toggleAccordion = () => {
    setIsParikarmaOpen((prev) => !prev);
  };
  // console.log(active);
  const allPlaces = useMemo(
    () => placesData.flatMap((day) => day.places),
    [placesData]
  );
  // dropdown functionality
  const dropDownRef = useRef(null);
  const activeRef = useRef(null);
  useEffect(() => {
    if (dropdownOpen && dropDownRef.current && activeRef.current) {
      const dropdown = dropDownRef.current;
      const active = activeRef.current;

      // for make Active Item in Center Adjustment the Scroll Position
      const dropdownHeight = dropdown.clientHeight;
      const activeItemOffset = active.offsetTop;
      const activeItemHeight = active.clientHeight;

      dropdown.scrollTo({
        top: activeItemOffset - dropdownHeight / 2 + activeItemHeight / 2,
        behavior: "smooth",
      });
    }
  }, [dropdownOpen, active?.id]);

  // navigation
  const handleNavigate = (direction) => {
    let currentIndex = allPlaces.findIndex(
      (p) => p.id === (active?.id ?? currentPlace.id)
    );
    // console.log(currentIndex);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    // console.log(newIndex);
    if (newIndex >= 0 && newIndex < allPlaces.length) {
      setCurrentPlace(allPlaces[newIndex]);
      setFirstLoad(false);
    }
  };
  // when first load
  useEffect(() => {
    if (!firstLoad && currentPlace) {
      document
        .getElementById(currentPlace.id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPlace, firstLoad]);
  // select place and go
  const handleSelectPlace = (place) => {
    console.log(place);
    setCurrentPlace(place);
    setDropdownOpen(false);
    document.getElementById(place.id)?.scrollIntoView({ behavior: "smooth" });
  };
  // close on outside click
  const handleClickOutside = useCallback(
    (event) => {
      if (dropdownOpen && !event.target.closest(".dropdownMenu")) {
        // console.log('clicked',event.target)// find the place where the event is click
        setDropdownOpen(false);
      }
    },
    [dropdownOpen]
  );
  useEffect(() => {
    // add event listner
    document.addEventListener("click", handleClickOutside);
    // clean up the event listner
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  // select section acording to the scroll
  const previousSectionId = useRef(null); // Store previous section ID
  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY + window.innerHeight / 3;
      let mostVisibleSection = null;
      let maxVisibility = 0;

      for (const section of document.getElementsByClassName("place")) {
        const rect = section.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

        if (visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          mostVisibleSection = section;
        }
      }

      if (mostVisibleSection) {
        const sectionId = mostVisibleSection.id;

        // ✅ Check if section ID has changed
        if (previousSectionId.current !== sectionId) {
          previousSectionId.current = sectionId; // Update previous section ID

          // ✅ Find the corresponding place from `placesData`
          const foundPlace = placesData
            .flatMap((day) => day.places)
            .find((place) => place.id === sectionId);

          if (foundPlace) {
            // console.log("New Active Section:", foundPlace);
            setActive(foundPlace); // ✅ Update active title only when it changes
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // menu animation
  const menuopenAnimation = useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        ".menu",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(".close", {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power1.in",
    });
  };
  return (
    <nav ref={containerRef} className=" mx-auto">
      <Link
        to="#topContainer"
        className="fixed left-[4.1666665%] mix-blend-difference z-[60] "
      >
        <img
          src="/Images/Logo/logo.svg"
          alt="logo"
          className="  w-14 md:w-20 pt-4 md:pt-2"
        />
      </Link>

      {/* menu  */}
      <div className="fixed   left-[4.1666665%]  z-50 ">
        <div className="md:pl-4 md:py-4">
          <div className="relative  pl-[4rem]  md:pl-[5rem]   pt-6 md:pt-1 inline-block ">
            {/* Dropdown Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="rounded-full w-[2.5rem] h-[2.5rem]  border bg-primaryWhite  backdrop-blur-sm border-neutralBlack  flex items-center justify-center"
            >
              {isOpen ? (
                <RxCross2
                  type="button"
                  onClick={handleClose}
                  className=" text-primaryBlack text-textSmall font-light"
                />
              ) : (
                <HiOutlineMenuAlt4 className="text-primaryBlack font-light text-textSmall " />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full fixed z-20 lg:top-0 bottom-space15  ">
        <div className="w-11/12   mx-auto pt-[20px]">
          {/* left content  */}
          <div className=" flex ">
            {/* center content   */}
            {/* main container  */}
            <div className=" box-border  cursor-pointer md:static flex h-[2.5rem]  gap-2 w-11/12  md:gap-4 font-primayRegular justify-center mx-auto md:w-4/5 lg:w-1/2 items-center ">
              <button
                onClick={() => handleNavigate("prev")}
                className="  px-spacemd rounded-full  transition-all  w-mobilespace40 h-mobilespace40   border bg-primaryWhite  backdrop-blur-sm border-neutralBlack  flex items-center justify-center "
              >
                <HiArrowLongLeft className="" />
              </button>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex  dropdownMenu border gap-spacelg relative  border-accentBlack backdrop-blur-sm items-center h-[2.5rem] md:h-[2.5rem]  justify-between w-[70%] md:w-screen max-w-space300  rounded-full bg-primaryWhite  "
              >
                {/* dynamic number  */}
                <div className=" bg-accentBlack md:text-textSmall  text-mobiletextSmall  font-primaryLight md:w-[4rem] w-[7rem] text-center  rounded-full flex items-center justify-center">
                  <p className="leading-[2.5rem] md:leading-10">
                    {" "}
                    {active?.idx ?? currentPlace.idx ?? "..."}
                  </p>
                </div>
                {/* center content  */}

                <span className=" md:absolute md:text-textSmall truncate text-center w-full md:w-[100%] block leading-[2.125rem] md:leading-10 text-mobiletextSmall">
                  {/* {currentPlace.name} */}
                  {active?.name ?? currentPlace.name ?? "Loading..."}
                </span>

                {/* dropdown  */}
                <button className=" mr-3 ml-2 md:ml-0  ">
                  <span className="hidden lg:block">
                    {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                  <span className="lg:hidden block">
                    {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </span>
                </button>

                {dropdownOpen && (
                  <ul
                    ref={dropDownRef}
                    className="absolute overflow-y-auto  bg-success 
                w-full h-[320px] md:h-[320px]  lg:h-[482px]  ml-0  lg:-top-1 -bottom-1 border border-accentBlack md:bottom-10 left-auto rounded-[1.25rem] p-4"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                      WebkitScrollbar: "none",
                      boxShadow: "0 20px 40px 4px rgba(28,27,27,0.2)",
                    }}
                  >
                    <div className="mx-auto  text-center">
                      {placesData.map((day, idx) => (
                        <div key={idx}>
                          <div className="flex sticky -top-4 justify-between items-center  bg-success z-50 p-spacemd ">
                            <Link
                              to={`#${day.title}`}
                              className="font-primaryLight text-mobileTextRegular md:text-textRegular"
                            >{`${day.title}`}</Link>
                            <h4 className="text-secondaryBlack  text-center text-mobiletextSmall md:text-textSmall font-primaryLight">{`${day.day}`}</h4>
                          </div>
                          <div className="py-spacelg">
                            {day.places.map((place) => (
                              <div
                                key={place.id}
                                ref={active?.id === place.id ? activeRef : null}
                                className={`py-spacesm mb-1 flex w-full items-center md:px-spacemd cursor-pointer text-mobiletextSmall md:text-textSmall rounded-full ${
                                  (active?.id ?? currentPlace.id) === place.id
                                    ? "bg-primaryBlack text-white"
                                    : "hover:bg-accentBlack"
                                }`}
                                onClick={() => {
                                  handleSelectPlace(place);
                                  setDropdownOpen(false);
                                }}
                              >
                                <span className=" md:absolute md:w-1/4 w-mobilespace40   text-center md:text-textSmall font-primaryLight text-mobiletextSmall">
                                  {place.idx}
                                </span>
                                <span className="truncate  w-full text-center  z-20 md:text-textSmall font-primaryLight text-mobiletextSmall ">
                                  {" "}
                                  <p className="w-mobilespace130 pl-spacelg md:pl-0 sm:w-auto truncate">

                              {place.name}
                                  </p>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </ul>
                )}
              </div>
              <button
                onClick={() => handleNavigate("next")}
                className=" flex justify-center items-center border border-accentBlack   backdrop-blur-sm  rounded-full w-mobilespace40 h-mobilespace40   transition-all  bg-primaryWhite  "
              >
                <HiArrowLongRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown Menu */}

      {isOpen && (
        <section className="menu  pb-0  z-40 bg-primaryBlack w-[100%] box-border  flex justify-between ">
          <div className="font-primaryLight   min-h-screen grid md:w-[100%] grid-cols-12">
            <div className="md:col-start-5 mt-space60  col-start-1 col-span-12 grid grid-cols-6">
              <a
                href="#topContainer"
                onClick={() => setIsOpen(!isOpen)}
                className="title md:my-space15 my-spacelg col-start-1 col-span-5 text-heading3 cursor-pointer md:text-heading2 text-success"
              >
                Intro
              </a>
              <div className="col-start-1 col-span-6  ">
                <button
                  type="button"
                  onClick={toggleAccordion}
                  className="title cursor-pointer md:my-space15 text-heading3 md:text-heading2 text-success my-spacelg w-full text-left"
                >
                  Parikarma
                </button>
                <section
                  className={`transition-all duration-500 ease-in-out${
                    isParikarmaOpen
                      ? "min-h-fit  opacity-100 z-40"
                      : "max-h-0 opacity-0"
                  }`}
                  style={{
                    maxHeight: isParikarmaOpen ? "100vh" : "0",
                    opacity: isParikarmaOpen ? 1 : 0,
                  }}
                >
                  {isParikarmaOpen && (
                    <ParikramaList
                      onClose={() => {
                        setIsParikarmaOpen(false);
                        setIsOpen(false); // Keep the main menu open if only closing the accordion
                      }}
                    />
                  )}
                </section>
              </div>

              <a
                href="#Books"
                onClick={() => setIsOpen(!isOpen)}
                className="title col-start-1 col-span-5 cursor-pointer md:text-heading2 text-heading3 text-success md:my-space15 my-spacelg"
              >
                Books
              </a>

              <a
                href="mailto:hello@dhama.info?subject=Navadvip"
                onClick={() => setIsOpen(!isOpen)}
                className="title col-start-1 cursor-pointer col-span-5 md:text-heading2 text-heading3 md:my-space15 my-spacelg text-success"
              >
                Ask a Question
              </a>
            </div>
            <footer className="col-span-12    md:w-full grid gird-cols-6  md:text-textSmall text-textRegular text-primaryWhite font-primaryLight">
              <p className="paragraph place-self-end col-span-2">@2025</p>
              <a
                onClick={() => setIsOpen(!isOpen)}
                href="https://www.instagram.com/bsvtrust"
                target="_blank"
                className="paragraph place-self-end col-start-5 col-span-9"
              >
                Instagram
              </a>
            </footer>
          </div>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
