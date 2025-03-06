import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

import { Link } from "react-scroll";
import { useLoaderData } from "react-router-dom";
import AnimateMenu from "../AnimateMenu/AnimateMenu";
const Navbar = () => {
  const placesData = [
    {
      day: "Day One",
      title: "Antardwip",
      places: [
        { id: "1", idx: "I1.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "2", idx: "I1.2", name: "Nanda Acharya Bhavan" },
        { id: "3", idx: "I1.3", name: "Yogapith" },
        { id: "4", idx: "I1.4", name: "Srivas Angan" },
        { id: "5", idx: "I1.5", name: "Advaita Bhavan" },
        { id: "6", idx: "I1.6", name: "Gadadhar Angan" },
        { id: "7", idx: "I1.7", name: "Murari Gupta Angan" },
        { id: "8", idx: "I1.8", name: "Pritha-kunda" },
        { id: "9", idx: "I1.9", name: "Sri Chaitanya Math" },
      ],
    },
    {
      day: "Day One",
      title: "Simantadwip",
      places: [
        { id: "10", idx: "I1.10", name: "Sardanga" },
        { id: "11", idx: "I1.11", name: "Sridhar Angan" },
        { id: "12", idx: "I1.12", name: "Samadhi of Chand Kazi" },
        { id: "13", idx: "I1.13", name: "Belvapaksha" },
      ],
    },
    {
      day: "Day Two",
      title: "Godrumdvip",
      places: [
        { id: "14", idx: "I2.1", name: "Svananda Sukhada Kunja" },
        { id: "15", idx: "I2.2", name: "Surabhi Kunja" },
        { id: "16", idx: "I2.3", name: "Suvarna Vihar" },
        { id: "17", idx: "I2.4", name: "Amra Ghat" },
        { id: "18", idx: "I2.5", name: "Narashima Pally" },
        { id: "19", idx: "I2.6", name: "Harihara Ksetra" },
      ],
    },
    {
      day: "Day Two",
      title: "Madhyadvip",
      places: [
        { id: "20", idx: "I2.7", name: "Naimisharanya" },
        { id: "21", idx: "I2.8", name: "Pushkar" },
        { id: "22", idx: "I2.9", name: "Uchahatt" },
        { id: "23", idx: "I2.10", name: "Panchaveni" },
      ],
    },
    {
      day: "Day Three",
      title: "Koladvip",
      places: [
        { id: "24", idx: "I3.1", name: "Prayudha Maya" },
        { id: "25", idx: "I3.2", name: "Devananda Gaudiya Math" },
        { id: "26", idx: "I3.4", name: "Samudragarh" },
        { id: "27", idx: "I3.5", name: "Ganga Sagar" },
        { id: "28", idx: "I3.6", name: "Champahati" },
      ],
    },
    {
      day: "Day Three",
      title: "Ritudvip",
      places: [
        { id: "29", idx: "I3.7", name: "Radha Kunda" },
        { id: "30", idx: "I3.8", name: "Vidya Nagar" },
      ],
    },
    {
      day: "Day Three",
      title: "Jahnudvip",
      places: [{ id: "31", idx: "I3.10", name: "Jahnu Muni's Asram" }],
    },
    {
      day: "Day Three",
      title: "Modrumadvip",
      places: [
        { id: "32", idx: "I3.11", name: "Vaikunthapur" },
        { id: "33", idx: "I3.12", name: "Vrindavan Thakur’s Sripat" },
        { id: "34", idx: "I3.13", name: "Mahatpur" },
      ],
    },
    {
      day: "Day Four",
      title: "Simantadvip",
      places: [
        { id: "35", idx: "I4.1", name: "Jagai-Madhai Ghat" },
        { id: "36", idx: "I4.2", name: "Barakona Ghat" },
        { id: "37", idx: "I4.3", name: "Nagariya Ghat" },
      ],
    },
    {
      day: "Day Four",
      title: "Rudradvip",
      places: [
        { id: "38", idx: "I4.4", name: "Bharadvaja Tila" },
        { id: "39", idx: "I4.5", name: "Jayadev's Sripat" },
        { id: "40", idx: "I4.16", name: "Nidaya Ghat" },
      ],
    },
  ];

  // all place
  const allPlaces = useMemo(
    () => placesData.flatMap((day) => day.places),
    [placesData]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(placesData[0].places[0]);
  const [activeId, setActiveId] = useState(null);
  const location = useLoaderData();

  const handleNavigate = (direction) => {
    let allPlaces = placesData.flatMap((day) => day.places);
    // console.log(allPlaces);
    let currentIndex = allPlaces.findIndex((p) => p.id === currentPlace.id);
    // console.log(currentIndex);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    // console.log(newIndex);
    if (newIndex >= 0 && newIndex < allPlaces.length) {
      setCurrentPlace(allPlaces[newIndex]);
      setFirstLoad(false);
    }
  };
  useEffect(() => {
    if (!firstLoad && currentPlace) {
      document
        .getElementById(currentPlace.id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPlace, firstLoad]);

  const handleSelectPlace = (place) => {
    console.log(place);
    setCurrentPlace(place);
    setDropdownOpen(false);
    document.getElementById(place.id)?.scrollIntoView({ behavior: "smooth" });
  };
  // select section acording to the scroll
  // const observerref=useRef(null)
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const visibleSection = entries.find((entry) => entry.isIntersecting);
  //       if (visibleSection) {
  //         const foundPlace = allPlaces.find(
  //           (place) => place.id === visibleSection.target.id
  //         );
  //         if (foundPlace) {
  //           setCurrentPlace(foundPlace);
  //         }
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );
  //   allPlaces.forEach((place) => {
  //     const section = document.getElementById(place.id);
  //     if (section)observerref.current.observe(section);
  //   });
  //   return () => observer.disconnect();
  // }, [allPlaces]);

  const scrollToPlace = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };
  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            setActiveId(entry.target.id);
            setCurrentPlace(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".place-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
    <div className="fixed mix-blend-difference w-full z-50 border-2 border-red-500 ">
    <div className=" w-11/12 mx-auto border-box ">
              <img
                src="/logo.svg"
                alt=""
                className="w-14 "
              />
            </div>
    </div>
    <div className="w-full fixed z-50 t-0  ">
      <div className="w-11/12   mx-auto pt-2">

        {/* left content  */}
        <div className=" flex  ">
          {/* logo  */}
          <div className=" flex justify-center items-center ">
        

            {/* menu   */}
            <div className="md:p-2 ml-[4rem]  ">
              <div className="relative inline-block  text-left">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="rounded-full w-[2.5rem] h-[2.5rem] backdrop-blur-sm border bg-success border-accentBlack   flex items-center justify-center"
                >
                  {isOpen ? (
                    <RxCross2 className="text-primaryBlack text-textSmall" />
                  ) : (
                    <HiOutlineMenuAlt4 className=" text-primaryBlack text-textSmall " />
                  )}
                </button>
               
              </div>
            </div>
          </div>
          {/* center content   */}
          {/* main container  */}
          <div className="fixed  bottom-spacelg md:static flex  gap-2 w-11/12  md:gap-4 font-primayRegular justify-center mx-auto md:w-4/5 lg:w-1/2 items-center ">
            <button
              onClick={() => handleNavigate("prev")}
              className="bg-success flex justify-center items-center backdrop-blur-sm border border-accentBlack  p-2 rounded-full md:w-[2.5rem] md:h-[2.5rem]  transition-all"
            >
              <HiArrowLongLeft className="" />
            </button>
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex border gap-spacelg relative border-accentBlack backdrop-blur-sm items-center h-[2.5rem]  justify-between w-[100%] max-w-space300 bg-success rounded-full"
            >
              {/* dynamic number  */}
              <div className=" bg-accentBlack md:text-textSmall  text-mobiletextSmall tracking-wide font-primaryLight px-6  rounded-full flex items-center justify-center">
                <p className="leading-10"> {currentPlace.idx}</p>
              </div>
              {/* center content  */}

              <span className=" md:absolute md:text-textSmall truncate text-center w-full md:w-[100%] block  text-mobiletextSmall">
                {currentPlace.name}
              </span>

              {/* dropdown  */}
              <button className="mr-3 ml-2 md:ml-0 ">
                <span className="hidden md:block">
                  {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
                <span className="md:hidden block">
                  {dropdownOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
              </button>

              {dropdownOpen && (
                <ul
                  className="absolute overflow-y-auto  bg-success 
                w-full h-[320px] md:h-[320px]  lg:h-[482px]  ml-0 z md:-top-1 border border-accentBlack bottom-10 left-auto rounded-[1.25rem] p-4"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    WebkitScrollbar: "none",
                    boxShadow: "0 20px 40px 4px rgba(28,27,27,0.2)",
                  }}
                >
                  <div className="mx-auto text-center">
                    {placesData.map((day, idx) => (
                      <div key={idx}>
                        <div className="flex sticky -top-4 justify-between items-center bg-success z-2 p-2.5 ">
                          <h3 className="font-primaryLight text-mobileTextRegular md:text-textRegular">{`${day.title}`}</h3>
                          <h5 className="text-secondaryBlack opacity-55 text-center text-mobiletextSmall md:text-textSmall font-primaryLight">{`${day.day}`}</h5>
                        </div>
                        <div className="py-spacelg  ">
                          {day.places.map((place) => (
                            <div
                              key={place.id}
                              className={`py-spacesm  mb-1 flex w-full md:px-spacemd cursor-pointer text-mobiletextSmall md:text-textSmall rounded-full ${
                                currentPlace.id === place.id
                                  ? "bg-primaryBlack text-white"
                                  : "hover:bg-accentBlack"
                              }`}
                              onClick={() => {
                                handleSelectPlace(place);
                                setDropdownOpen(false);
                              }}
                            >
                              <span className=" absolute md:w-1/4 w-1/5 pl-2 text-left md:text-textSmall font-primaryLight text-mobiletextSmall">
                                {place.idx}
                              </span>
                              <span className="w-full text-center text-success z-20 md:text-textSmall font-primaryLight text-mobiletextSmall ">
                                {" "}
                                {place.name}
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
              className=" flex justify-center items-center border border-accentBlack  p-2 backdrop-blur-sm  rounded-full md:w-[2.5rem] md:h-[2.5rem]   bg-success transition-all"
            >
              <HiArrowLongRight />
            </button>
          </div>
        </div>
      </div>
       {/* Dropdown Menu */}
       {isOpen && (
                 
                 <AnimateMenu />
               
             )}
    </div>
    
    
    </>
  );
};

export default Navbar;
