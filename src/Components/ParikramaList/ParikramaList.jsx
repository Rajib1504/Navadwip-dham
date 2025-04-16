import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ParikramaList = ({ onClose }) => {
  const [travellist, setTravelList] = useState([]);
  const container = useRef();

  useEffect(() => {
    fetch("/Json/Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelList(data))
      .catch((error) => console.error("Error fetching travel data:", error)); // Added error handling
  }, []);

  // useGSAP(() => { // Consider if you still need this animation
  //   gsap.fromTo(
  //     container.current,
  //     { y: "-100%", opacity: 0 }, // Adjust initial position if needed
  //     { y: "0%", opacity: 1, duration: 0.3, ease: "power3.out" }
  //   );
  // }, []);

  return (
    <div
    ref={container}
    className="w-full  h-screen bg-primaryBlack overflow-y-scroll px-space20 py-space20"
  >
    <div className="flex flex-col text-textSmall">
      <div className="flex flex-col text-textSmall py-space15 mb-space60">
        {travellist.length === 0 ? (
          <p className="text-white">Loading Parikramas...</p>
        ) : (
          Object.entries(travellist).map(([day, places], index) => (
            <div
              key={index}
              className="grid grid-rows-2 tracking-wide md:grid-rows-none md:grid-cols-4 md:gap-4 mt-space15 md:items-start"
            >
              {/* Day Name */}
              <Link
                onClick={onClose}
                to={`${day}`}
                smooth={true}
                duration={800}
                className="text-mobiletextSmall cursor-pointer tracking-wider row-span-full md:text-textSmall text-primaryWhite font-primaryLight md:col-span-1 font-bold"
              >
                {day}
              </Link>
  
              <div className="col-span-3 my-space15 md:my-auto grid-cols-6 grid md:grid">
                {Object.entries(places).map(([placeName, locations], idx) => {
                  let adjustedLength =
                    locations.length % 2 !== 0
                      ? locations.length + 1
                      : locations.length;
                  let halfLength = adjustedLength / 2;
  
                  return (
                    <React.Fragment key={idx}>
                      {/* Place Name */}
                      <Link
                        onClick={onClose}
                        to={`${placeName}`}
                        smooth={true}
                        duration={800}
                        className="cursor-pointer col-span-3 text-success tracking-wide text-mobiletextSmall"
                      >
                        {placeName}
                      </Link>
  
                      <div className="grid-flow-col col-span-3 md:grid grid-cols-4">
                        {/* Mobile */}
                        <div className="col-span-2 text-success md:hidden flex flex-wrap gap-spacelg mb-space15">
                          {locations.map((location, i) => (
                            <Link
                              onClick={onClose}
                              to={`${location}`}
                              smooth={true}
                              duration={800}
                              key={i}
                              className="cursor-pointer text-mobiletextSmall tracking-wide text-success"
                            >
                              {location}
                              <br />
                            </Link>
                          ))}
                        </div>
  
                        {/* Laptop - First Column */}
                        <div className="text-gray-100 md:block hidden mb-space30 col-start-1 col-span-2">
                          {locations.slice(0, halfLength).map((location, i) => (
                            <Link
                              onClick={onClose}
                              to={`${location}`}
                              smooth={true}
                              duration={800}
                              key={i}
                              className="cursor-pointer text-gray-100 mr-spacemd"
                            >
                              {location}
                            </Link>
                          ))}
                        </div>
  
                        {/* Laptop - Second Column */}
                        <section className="text-gray-100 hidden md:block mb-space30 col-start-3 col-span-2">
                          {locations.slice(halfLength, adjustedLength).map((location, i) => (
                            <Link
                              onClick={onClose}
                              to={`${location}`}
                              smooth={true}
                              duration={800}
                              key={i}
                              className="cursor-pointer text-gray-100 mr-spacemd"
                            >
                              {location}
                            </Link>
                          ))}
                        </section>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
  
  );
};

export default ParikramaList;