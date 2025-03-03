import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
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
        { id: "11", idx: "I1.1", name: "Sridhar Angan" },
        { id: "12", idx: "I1.12", name: "Samadhi of Chand Kazi" },
        { id: "13", idx: "I1.13", name: "Belvapaksha" },
      ],
    },
    {
      day: "Day Two",
      title: "Godrumdvip",
      places:[
        {id: "14", idx: "I2.1", name: "Svananda Sukhada Kunja"},
        {id: "15", idx: "I2.2", name: "Surabhi Kunja"},
        {id: "16", idx: "I2.3", name: "Suvarna Vihar"},
        {id: "17", idx: "I2.4", name: "Amra Ghat"},
        {id: "18", idx: "I2.5", name: "Narashima Pally"},
        {id: "19", idx: "I2.6", name: "Harihara Ksetra"},
      ]
    },
    {
      day:"Day Two",
      title: "Madhyadvip",
      places:[
        {id: "20", idx: "I2.7", name: "Naimisharanya"},
        {id: "21", idx: "I2.8", name: "Pushkar"},
        {id: "22", idx: "I2.9", name: "Uchchahata"},
        {id: "23", idx: "I2.10", name: "Panchaveni"},
      ]
    },
    {
      day:"Day Three",
      title: "Koladvip",
      places:[
        {id: "24", idx: "I3.1", name: "Prayudha Maya"},
        {id: "25", idx: "I3.2", name: "Devananda Gaudiya Math"},
        {id: "26", idx: "I3.3", name: "Sri Chaitanya Saraswat Math"},
        {id: "27", idx: "I3.4", name: "Samudragarh"},
        {id: "28", idx: "I3.5", name: "Ganga Sagar"},
        {id: "29", idx: "I3.6", name: "Champahati"},
      ]
    },
    {
      day:"Day Three",
      title: "Ritudvip",
      places:[ 
        {id: "30", idx: "I3.7", name: "Radha Kunda"},
        {id: "31", idx: "I3.8", name: "Vidya Nagar"},
        {id: "32", idx: "I3.9", name: ""},
      ]
    },
    {
      day:"Day Three",
      title: "Jahnudvip",
      places:[  
        {id: "33", idx: "I3.10", name: "Jahnu Muni's Asram"}
      ]
    },
    {
      day:"Day Three",
      title: "Modrumadvip",
      places:[ 
        {id: "34", idx: "I3.11", name: "Vaikunthapur"},
        {id: "35", idx: "I3.12", name: "Vrindavan Thakur’s Sripat"},
        {id: "36", idx: "I3.13", name: "Mahatpur"},
      ]
    },
    {
      day:"Day Four",
      title: "Simantadvip",
      places:[ 
        {id: "37", idx: "I4.1", name: "Jagai-Madhai Ghat"},
        {id: "38", idx: "I4.2", name: "Barakona Ghat"},
        {id: "39", idx: "I4.3", name: "Nagariya Ghat"},
      ]
    },
    {
      day:"Day Four",
      title: "Rudradvip",
      places:[ 
        {id: "40", idx: "I4.4", name: "Bharadvaja Tila"},
        {id: "41", idx: "I4.5", name: "Jayadev's Sripat"},
        {id: "42", idx: "I4.16", name: "Nidaya Ghat"},
      ]
    },
   
  ];

  // all place
  const allPlaces = placesData.flatMap((day) => day.places);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPlace, setCurrentPlace] = useState(placesData[0].places[0]);

  const handleNavigate = (direction) => {
    let allPlaces = placesData.flatMap((day) => day.places);
    console.log(allPlaces)
    let currentIndex = allPlaces.findIndex((p) => p.id === currentPlace.id);
    console.log(currentIndex)
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
console.log(newIndex)
    if (newIndex >= 0 && newIndex < allPlaces.length) {
      setCurrentPlace(allPlaces[newIndex]);
      document
        .getElementById(allPlaces[newIndex].id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSelectPlace = (place) => {
    setCurrentPlace(place);
    document.getElementById(place.id)?.scrollIntoView({ behavior: "smooth" });
    setDropdownOpen(false);
  };
  // select section acording to the scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const foundPlace = allPlaces.find(
            (place) => place.id === visibleSection.target.id
          );
          if (foundPlace) {
            setCurrentPlace(foundPlace);
          }
        }
      },
      { threshold: 0.4 }
    );
    allPlaces.forEach((place) => {
      const section = document.getElementById(place.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [allPlaces]);
  return (
    <div className="w-full fixed z-50 t-0 ">
      <div className="md:w-11/12 sm:p-2 lg:p-0 md:p-0 mx-auto pt-2">
        {/* left content  */}
        <div className=" flex  ">
          {/* logo  */}
          <div className=" flex justify-center items-center ">
            <div className="w-fit  border-box ">
              <img
                src="/logo.svg"
                className="w-14 text-primaryBlack  mix-blend-difference"
                alt=""
              />
            </div>

            {/* menu   */}
            <div className="lg:p-2  ">
              <div className="relative inline-block  text-left">
                {/* Dropdown Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="rounded-full backdrop-blur-sm border bg-success border-accentBlack p-4 w-space30  flex items-center justify-center"
                >
                  <HiOutlineMenuAlt4 className=" text-primaryBlack " />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <ul className="absolute  mt-2 -left-[68px] top-20 lg:w-96 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <li className="relative group">
                      <a
                        href="#"
                        className="block font-primayRegular text-xl border-b-2 border-gray-200  px-4 py-2 text-gray-700 transition-all "
                      >
                        <p className="flex justify-between items-center">
                          {" "}
                          Open Full Gallery{" "}
                          <img
                            src="https://imgur.com/u3sADDQ.png"
                            className="w-4"
                            alt=""
                          />
                        </p>
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accentBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                    </li>

                    <li className="relative group">
                      <a
                        href="#"
                        className="block px-4 font-primayRegular text-xl py-2 border-b-2 border-gray-200 text-gray-700 transition-all"
                      >
                        <p className="flex justify-between items-center">
                          {" "}
                          Open Full Gallery{" "}
                          <img
                            src="https://imgur.com/u3sADDQ.png"
                            className="w-4"
                            alt=""
                          />
                        </p>
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accentBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                    </li>

                    <li className="relative group">
                      <a
                        href="#"
                        className="block font-primayRegular text-xl px-4 py-2 border-b-2 border-gray-200 text-gray-700 transition-all"
                      >
                        <p className="flex justify-between items-center">
                          {" "}
                          Open Full Gallery{" "}
                          <img
                            src="https://imgur.com/u3sADDQ.png"
                            className="w-4"
                            alt=""
                          />
                        </p>
                      </a>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accentBlack transition-all duration-700 group-hover:w-full group-focus:w-full"></span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          {/* center content   */}
          {/* main container  */}
          <div className="fixed  bottom-spacelg md:static lg:static flex w-full gap-2  md:gap-4 font-primayRegular justify-center mx-auto md:w-4/5 lg:w-1/2 items-center ">
            <button
              onClick={() => handleNavigate("prev")}
              className="md:p-3.5 bg-success backdrop-blur-sm border border-accentBlack lg:p-3.5 p-2 rounded-full  border-success  transition-all"
            >
              <HiArrowLongLeft />
            </button>
            <div className="flex border border-accentBlack backdrop-blur-sm items-center justify-between w-space300 bg-success  border-success rounded-full">
              {/* dynamic number  */}
              <div className="bg-accentBlack md:text-xl lg:text-xl text-sm tracking-wide	 font-primaryLight px-6 py-2 rounded-full md:mr-4">
                {currentPlace.idx}
              </div>
              {/* center content  */}
              <span className="md:text-xl  text-center  lg:text-xl text-xs">
                {" "}
                {currentPlace.name}
              </span>
              {/* dropdown  */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mr-3 ml-2 md:ml-0 lg:ml-0"
              >
                <span className="hidden md:block">{dropdownOpen ?  <IoIosArrowUp  />: <IoIosArrowDown  />}</span>
                <span className="md:hidden block">{dropdownOpen ? <IoIosArrowDown  /> :<IoIosArrowUp  /> }</span>
          
               
              </button>

              {dropdownOpen && (
                <ul
                  className="absolute overflow-y-auto  bg-success 
                w-full h-[320px] md:h-[320px] backdrop-blur-none lg:h-[482px] border-2 ml-0 lg:top-16 md:top-12 bottom-10 left-auto shadow-md rounded-md p-4"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    WebkitScrollbar: "none",
                  }}
                >
                  <div className="mx-auto text-center">
                    {placesData.map((day,idx) => (
                      <div key={idx}>
                        <div className="flex sticky -top-4 justify-between items-center bg-success z-2 p-2.5 ">
                          <h3 className="font-primaryLight text-lg md:text-heading4">{`${day.title}`}</h3>
                          <h5 className="text-accentBlack opacity-55 text-sm md:text-lg lg:text-xl text-center font-primaryLight">{`${day.day}`}</h5>
                        </div>
                        <div className=" p-4  ">
                          {day.places.map((place) => (
                            <div
                              key={place.id}
                              className={`p-3  mb-1 flex w-full cursor-pointer text-xs lg:text-xl md:text-xl rounded-full ${
                                currentPlace.id === place.id
                                  ? "bg-primaryBlack text-white"
                                  : "hover:bg-accentBlack"
                              }`}
                              onClick={() => {
                                handleSelectPlace(place);
                                document.getElementById(place.id)
                                  ?.scrollIntoView({ behavior: "smooth" });
                                setDropdownOpen(false);
                              }}
                            >
                              <span className="lg:w-1/4 md:w-1/4 w-1/5 pl-2 text-left">
                                {place.idx}
                              </span>
                              <span className="w-full text-center mix-blend-difference text-success z-20  ">
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
              className="md:p-3.5 border border-accentBlack lg:p-3.5 p-2 backdrop-blur-sm  rounded-full  border-success bg-success transition-all"
            >
              <HiArrowLongRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
