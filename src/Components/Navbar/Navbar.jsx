import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
const Navbar = () => {
  const placesData = [
    {
      day: "Day One",
      title: "Antardwip",
      places: [
        { id: "1.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "1.2", name: "Nanda Acharya Bhavan" },
        { id: "1.3", name: "Yogapith" },
        { id: "1.4", name: "Srivas Angan" },
        { id: "1.5", name: "Advaita Bhavan" },
      ],
    },
    {
      day: "Day Two",
      title: "Simantadwip",
      places: [
        { id: "2.1", name: "Example Section 1" },
        { id: "2.2", name: "Example Section 2" },
      ],
    },
    {
      day: "Day Three",
      title: "Antardwip",
      places: [
        { id: "3.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "3.2", name: "Nanda Acharya Bhavan" },
        { id: "3.3", name: "Yogapith" },
        { id: "3.4", name: "Srivas Angan" },
        { id: "3.5", name: "Advaita Bhavan" },
      ],
    },
    {
      day: "Day Four",
      title: "Antardwip",
      places: [
        { id: "4.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "4.2", name: "Nanda Acharya Bhavan" },
        { id: "4.3", name: "Yogapith" },
        { id: "4.4", name: "Srivas Angan" },
        { id: "4.5", name: "Advaita Bhavan" },
      ],
    },
  ];
  

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPlace, setCurrentPlace] = useState(placesData[0].places[0]);
 
  const handleNavigate = (direction) => {
    let allPlaces = placesData.flatMap((day) => day.places);
    let currentIndex = allPlaces.findIndex((p) => p.id === currentPlace.id);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1

    if (newIndex >= 0 && newIndex < allPlaces.length) {
      setCurrentPlace(allPlaces[newIndex]);
      document.getElementById(allPlaces[newIndex].id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSelectPlace = (place) => {
    setCurrentPlace(place);
    document.getElementById(place.id)?.scrollIntoView({ behavior: "smooth" });
    setDropdownOpen(false);
  };

  return (
    <div className="w-full sticky t-0 ">
      <div className="lg:w-11/12  sm:p-2 lg:p-0 md:p-0 mx-auto pt-2 sm:w-full md:w-full">
        {/* left content  */}
        <div className=" flex ">
          {/* logo  */}
          <div className="relative w-fit border-box ">
            <img
              src="https://imgur.com/iNztNSp.png"
              className="text-white mt-1 w-14"
              alt=""
            />
            <h1 className="absolute top-6 drop-shadow-md text-secondaryWhite left-[18px] font-primayRegular font-bold text-xl">
              N
            </h1>
          </div>
          {/* menu   */}
          <div className="p-2 ">
            <div className="relative inline-block text-left">
              {/* Dropdown Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="border m-2 rounded-full p-4 w-12 h-12 bg-transparent flex items-center justify-center"
              >
                <HiOutlineMenuAlt4 />
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
          {/* center content   */}
          {/* main container  */}
          <div className=" flex gap-4 font-primayRegular justify-center mx-auto w-1/2 items-center ">
            <button
              onClick={() => handleNavigate("prev")} 
              className="p-3.5 rounded-full  border-success border-2 transition-all"
            >
              <HiArrowLongLeft />
            </button>
            <div className="flex items-center justify-between w-full  border-2 border-success rounded-full">
              {/* dynamic number  */}
              <div className="bg-accentWhite text-lg tracking-wide	 font-primaryLight px-6 py-2 rounded-full mr-4">
              {currentPlace.id}
              </div>
              {/* center content  */}
              <span className="text-xl">  {currentPlace.name}</span>
              {/* dropdown  */}
              <button
               onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mr-3"
              >
                {/* <span> {title} (Day {dayNo})</span> */}
                <IoIosArrowDown className="text-gray-300" />
              </button>
            
              {dropdownOpen && (
                <ul className="absolute overflow-y-auto bg-success w-1/3 h-[482px] border-2 ml-10 top-20 left-auto shadow-md rounded-md p-4">

                  <div className="mx-auto text-center">
                  {placesData.map((day) => (
                    <div key={day.title}>
                      <div className="flex sticky -top-4 justify-between items-center bg-success z-2 p-2.5 ">
                        <h3 className="font-primaryLight text-4xl">{`${day.title}`}</h3>
                        <h5 className="text-success text-xl font-primaryLight">{`${day.day}`}</h5>
                      </div>
                      <div className=" p-4 border-2 border-red-400 ">
                      {day.places.map((place) => (
                        <div
                          key={place.id}
                          className={`p-2 border-2  border-blue-500 mb-1 flex w-full cursor-pointer text-xl rounded-full ${currentPlace.id === place.id ? 'bg-black text-white' : 'hover:bg-success'}`}
                          onClick={() => handleSelectPlace(place)}
                        > 
                          
                
                         <span className="w-1/4 text-left">{place.id}</span>
                         <span className="w-2/3 text-center  "> {place.name}</span>

                       
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
              className="p-3.5 rounded-full  border-success border-2 transition-all"
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
