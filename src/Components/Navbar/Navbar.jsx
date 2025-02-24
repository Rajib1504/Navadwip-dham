import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
const Navbar = () => {

  const daysData = {
      "Day One": [
        { id: "11.1", name: "Sri Chaitanya Gaudiya Math" },
        { id: "11.2", name: "Nanda Acharya Bhavan" },
        { id: "11.3", name: "Yogapith" },
        { id: "11.4", name: "Srivas Angan" },
        { id: "11.5", name: "Advaita Bhavan" },
        { id: "11.6", name: "Gadadhar Angan" },
        { id: "11.7", name: "Murari Gupta Angan" },
        { id: "11.8", name: "Prithu Kunda" },
        { id: "11.9", name: "Sri Chaitanya Math" },
      ],
      "Day Two": [
            // { id: "11.1", name: "Sri Chaitanya Gaudiya Math" },
            { id: "11.2", name: "Nanda Acharya Bhavan" },
            { id: "11.3", name: "Yogapith" },
            { id: "11.4", name: "Srivas Angan" },
            { id: "11.5", name: "Advaita Bhavan" },
            { id: "11.6", name: "Gadadhar Angan" },
            { id: "11.7", name: "Murari Gupta Angan" },
            { id: "11.8", name: "Prithu Kunda" },
            { id: "11.9", name: "Sri Chaitanya Math" },
      ],
      "Day Three": [
            // { id: "11.1", name: "Sri Chaitanya Gaudiya Math" },
            // { id: "11.2", name: "Nanda Acharya Bhavan" },
            { id: "11.3", name: "Yogapith" },
            { id: "11.4", name: "Srivas Angan" },
            { id: "11.5", name: "Advaita Bhavan" },
            { id: "11.6", name: "Gadadhar Angan" },
            { id: "11.7", name: "Murari Gupta Angan" },
            { id: "11.8", name: "Prithu Kunda" },
            { id: "11.9", name: "Sri Chaitanya Math" },
      ],
      "Day Four": [
            // { id: "11.1", name: "Sri Chaitanya Gaudiya Math" },
            // { id: "11.2", name: "Nanda Acharya Bhavan" },
            // { id: "11.3", name: "Yogapith" },
            { id: "11.4", name: "Srivas Angan" },
            { id: "11.5", name: "Advaita Bhavan" },
            { id: "11.6", name: "Gadadhar Angan" },
            { id: "11.7", name: "Murari Gupta Angan" },
            { id: "11.8", name: "Prithu Kunda" },
            { id: "11.9", name: "Sri Chaitanya Math" },
      ],
      "Day Five": [
            // { id: "11.1", name: "Sri Chaitanya Gaudiya Math" },
            // { id: "11.2", name: "Nanda Acharya Bhavan" },
            // { id: "11.3", name: "Yogapith" },
            // { id: "11.4", name: "Srivas Angan" },
            { id: "11.5", name: "Advaita Bhavan" },
            { id: "11.6", name: "Gadadhar Angan" },
            { id: "11.7", name: "Murari Gupta Angan" },
            { id: "11.8", name: "Prithu Kunda" },
            { id: "11.9", name: "Sri Chaitanya Math" },
      ],
      "Day Six": [
            // { id: "11.1", name: "Sri Chaitanya Gaudiya Math" },
            // { id: "11.2", name: "Nanda Acharya Bhavan" },
            // { id: "11.3", name: "Yogapith" },
            // { id: "11.4", name: "Srivas Angan" },
            // { id: "11.5", name: "Advaita Bhavan" },
            { id: "11.6", name: "Gadadhar Angan" },
            { id: "11.7", name: "Murari Gupta Angan" },
            { id: "11.8", name: "Prithu Kunda" },
            { id: "11.9", name: "Sri Chaitanya Math" },
      ],
    };
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentDay, setCurrentDay] = useState("Day One");
    const [currentIndex, setCurrentIndex] = useState(0);
    const sections = daysData[currentDay];

    const handleNextDay = () => {
      const dayKeys = Object.keys(daysData);
      const currentDayIndex = dayKeys.indexOf(currentDay);
      if (currentDayIndex < dayKeys.length - 1) {
        setCurrentDay(dayKeys[currentDayIndex + 1]);
        setCurrentIndex(0);
      }
    };

    const handlePrevDay = () => {
      const dayKeys = Object.keys(daysData);
      const currentDayIndex = dayKeys.indexOf(currentDay);
      if (currentDayIndex > 0) {
        setCurrentDay(dayKeys[currentDayIndex - 1]);
        setCurrentIndex(0);
      }
    };

  //     dropdown
  const handleSelectSection = (index) => {
      setCurrentIndex(index);
      setDropdownOpen(false);
    };
  return (
    <div className="w-full sticky t-0 ">
      <div className="lg:w-11/12 border-2 border-red-300 sm:p-2 lg:p-0 md:p-0 mx-auto pt-2 sm:w-full md:w-full">
        {/* left content  */}
        <div className=" flex border-2 border-green-600">
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
                <ul className="absolute  mt-2 -left-[68px] w-72 bg-white border border-gray-300 rounded-lg shadow-lg">
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
          <div className="border-2 flex gap-4 font-primayRegular justify-center mx-auto w-1/2 items-center border-blue-500">
            <button
              onClick={handlePrevDay} 
              className="p-3.5 rounded-full  border-success border-2 transition-all"
            >
              <HiArrowLongLeft />
            </button>
            <div className="flex items-center justify-between w-full  border-2 border-success rounded-full">
              {/* dynamic number  */}
              <div className="bg-accentWhite text-lg tracking-wide	 font-primaryLight px-6 py-2 rounded-full mr-4">
                {sections[currentIndex].id}
              </div>
              {/* center content  */}
              <span className="text-xl">{sections[currentIndex].name}</span>
              {/* dropdown  */}
              <button
               onClick={() => setDropdownOpen(!dropdownOpen)}
                className="mr-3"
              >
                <IoIosArrowDown className="text-gray-300" />
              </button>
              {dropdownOpen && (
              <ul className="absolute bg-white top-20 max-w-fit shadow-md rounded-md mt-2 p-2">
                {sections.map((section, index) => (
                  <li
                    key={section.id}
                    onClick={() => handleSelectSection(index)}
                    className={`p-2 cursor-pointer rounded text-xl w-fit ${index === currentIndex ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                  >
                    {section.id} {section.name}
                  </li>
                ))}
              </ul>
            )}
            </div>
            <button
              onClick={handleNextDay}
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
