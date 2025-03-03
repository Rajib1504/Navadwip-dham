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
        { id: "1.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "I1.2", name: "Nanda Acharya Bhavan" },
        { id: "I1.1", name: "Yogapith" },
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
  
// all place   
const allPlaces = placesData.flatMap((day) => day.places);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
  // select section acording to the scroll 
useEffect(()=>{
  const observer = new IntersectionObserver(
    entries =>{
      const visibleSection = entries.find(entry=>entry.isIntersecting);
      if(visibleSection){
        const foundPlace= allPlaces.find((place)=> place.id ===visibleSection.target.id);
        if(foundPlace){
          setCurrentPlace(foundPlace);
        }
      }
    },
    {threshold:0.4}
  );
  allPlaces.forEach((place) => {
    const section = document.getElementById(place.id);
    if (section) observer.observe(section);
  });
  return ()=>observer.disconnect()
},[allPlaces])
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
              {currentPlace.id}
              </div>
              {/* center content  */}
              <span className="md:text-xl  text-center  lg:text-xl text-xs">  {currentPlace.name}</span>
              {/* dropdown  */}
              <button
               onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mr-3 ml-2 md:ml-0 lg:ml-0"
              >
                {/* <span> {title} (Day {dayNo})</span> */}
                <IoIosArrowDown className="lg:block md:block hidden" />
                <IoIosArrowUp className=" lg:hidden md:hidden" />
              </button>
            
              {dropdownOpen && (
                <ul className="absolute overflow-y-auto  bg-success 
                w-full h-[320px] md:h-[320px] backdrop-blur-none lg:h-[482px] border-2 ml-0 lg:top-16 md:top-12 bottom-10 left-auto shadow-md rounded-md p-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch", WebkitScrollbar: "none"}}>

                  <div className="mx-auto text-center">
                  {placesData.map((day) => (
                    <div key={day.title}>
                      <div className="flex sticky -top-4 justify-between items-center bg-success z-2 p-2.5 ">
                        <h3 className="font-primaryLight text-lg md:text-heading4">{`${day.title}`}</h3>
                        <h5 className="text-accentBlack opacity-55 text-sm md:text-lg lg:text-xl text-center font-primaryLight">{`${day.day}`}</h5>
                      </div>
                      <div className=" p-4  ">
                      {day.places.map((place) => (
                        <div
                          key={place.id}
                          className={`p-3  mb-1 flex w-full cursor-pointer text-xs lg:text-xl md:text-xl rounded-full ${currentPlace.id === place.id ? 'bg-primaryBlack text-white' : 'hover:bg-accentBlack'}`}
                          onClick={() =>{ handleSelectPlace(place);
                            document.getElementById(place.id)?.scrollIntoView({ behavior: "smooth" });
                            setDropdownOpen(false);}}> 
                         <span className="lg:w-1/4 md:w-1/4 w-1/5 pl-2 text-left">{place.id}</span>
                         <span className="w-full text-center mix-blend-difference text-success z-20  "> {place.name}</span>
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
