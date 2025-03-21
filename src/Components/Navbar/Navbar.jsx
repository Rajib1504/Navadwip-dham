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
import AnimateMenu from "../AnimateMenu/AnimateMenu";

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

  const [isOpen, setIsOpen] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(placesData[0].places[0]);
  const [active, setActive] = useState({});
  // console.log(active);
  const allPlaces = useMemo(
    () => placesData.flatMap((day) => day.places),
    [placesData]
  );
  const handleNavigate = (direction) => {
    let currentIndex = allPlaces.findIndex((p) => p.id ===  (active?.id ??currentPlace.id));
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

  return (
    <>
      <div className="fixed left-[4.1666665%] mix-blend-difference  z-50 ">
        <a href="#topContainernp">
          <img src="/logo.svg" alt="" className="w-14 " />
        </a>
      </div>
      {/* menu  */}
      <div className="fixed hidden left-[4.1666665%]   z-50 ">
        <div className="md:p-4">
          <div className="relative  pl-[4rem] pt-4 md:pt-0 inline-block ">
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

      <div className="w-full fixed z-30 t-0  ">
        <div className="w-11/12   mx-auto pt-4">
          {/* left content  */}
          <div className=" flex  ">
            {/* center content   */}
            {/* main container  */}
            <div className="fixed  bottom-space15  cursor-pointer md:static flex h-[2.125rem] md:h-[2.5rem]  gap-2 w-11/12  md:gap-4 font-primayRegular justify-center mx-auto md:w-4/5 lg:w-1/2 items-center ">
              <button
                onClick={() => handleNavigate("prev")}
                className="bg-success flex justify-center items-center backdrop-blur-sm border border-accentBlack  p-2 rounded-full md:w-[2.5rem] md:h-[2.5rem]  transition-all"
              >
                <HiArrowLongLeft className="" />
              </button>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex  dropdownMenu border gap-spacelg relative border-accentBlack backdrop-blur-sm items-center h-[2.125rem] md:h-[2.5rem]  justify-between w-[100%] max-w-space300 bg-success rounded-full"
              >
                {/* dynamic number  */}
                <div className=" bg-accentBlack md:text-textSmall  text-mobiletextSmall  font-primaryLight md:w-[4rem] w-[6rem] text-center  rounded-full flex items-center justify-center">
                  <p className="leading-[2.125rem] md:leading-10">
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
                <button className=" mr-3 ml-2 md:ml-0 ">
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
                w-full h-[320px] md:h-[320px]   lg:h-[482px]  ml-0 z md:-top-1 border border-accentBlack bottom-10 left-auto rounded-[1.25rem] p-4"
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
                          <div className="flex sticky -top-4 justify-between items-center  bg-success z-50 p-spacemd ">
                            <h3 className="font-primaryLight text-mobileTextRegular md:text-textRegular">{`${day.title}`}</h3>
                            <h5 className="text-secondaryBlack  text-center text-mobiletextSmall md:text-textSmall font-primaryLight">{`${day.day}`}</h5>
                          </div>
                          <div className="py-spacelg">
                            {day.places.map((place) => (
                              <div
                                key={place.id}
                                className={`py-spacesm  mb-1 flex w-full md:px-spacemd cursor-pointer text-mobiletextSmall md:text-textSmall rounded-full ${
                                  (active?.id ??currentPlace.id) === place.id
                                    ? "bg-primaryBlack text-white"
                                    : "hover:bg-accentBlack"
                                }`}
                                onClick={() => {
                                  handleSelectPlace(place);
                                  setDropdownOpen(false);
                                }}
                              >
                                <span className="absolute md:w-1/4 w-1/5 pl-2 text-left md:text-textSmall font-primaryLight text-mobiletextSmall">
                                  {place.idx}
                                </span>
                                <span className="w-full text-center  z-20 md:text-textSmall font-primaryLight text-mobiletextSmall ">
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
      </div>
      {/* Dropdown Menu */}
      {isOpen && <AnimateMenu />}
    </>
  );
};

export default Navbar;
