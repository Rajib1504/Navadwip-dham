import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sticky t-0 ">
      <div className="lg:w-11/12 border-2 border-red-300 sm:p-2 lg:p-0 md:p-0 mx-auto pt-2">
        {/* left content  */}
        <div className=" flex">
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
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accentBlack transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
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
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accentBlack transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
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
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accentBlack transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
