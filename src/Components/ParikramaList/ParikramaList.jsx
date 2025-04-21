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
    className="w-full bg-primaryBlack overflow-y-scroll px-space20 py-space20"
  >
    <div className="flex flex-col text-textSmall">
      <div className="flex flex-col text-textSmall py-space15 mb-space15">
        {travellist.length === 0 ? (
          <p className="text-white">Loading Parikramas...</p>
        ) : (
          Object.entries(travellist).map(([day, places], index) => (
             <div
                  key={index}
                  className=" grid  tracking-wide md:grid-rows-none md:grid-cols-4 md:gap-4  mt-[12px] sm:mt-space30 md:items-start"
                >
                  {/* Day Name */}
                  <Link
                   onClick={onClose}
                    to={`${day}`}
                    smooth={true}
                    duration={800}
                    className="text-mobiletextSmall cursor-pointer tracking-wider  md:text-textSmall text-primaryWhite font-primaryLight md:col-span-1  "
                  >
                    {day}
                  </Link>
                  <div className="col-span-3 mt-space15 md:my-auto grid-cols-6 gap-space15  grid">
                    {Object.entries(places).map(
                      ([placeName, locations], idx) => {
                        // Convert odd length to even by subtracting 1 if needed
                        let adjustedLength =
                          locations.length % 2 !== 0
                            ? locations.length + 1
                            : locations.length;
                        let halfLength = adjustedLength / 2; // Divide into 2 equal columns

                        return (
                          <React.Fragment key={idx}>
                            {/* Place Name - Same row for first item, new row for others */}
                            <Link
                             onClick={onClose}
                              to={`${placeName}`}
                              smooth={true}
                              duration={800}
                              className={` cursor-pointer col-span-2 text-success tracking-wide sm:text-textSmall text-mobiletextSmall`}
                            >
                              <h6>{placeName}</h6>
                            </Link>
                            <div className=" gap-space15 col-start-4 col-span-4 grid-flow-col md:col-span-4 md:grid grid-cols-4">
                              {/* mobile  */}
                              <div className="col-span-4 text-success md:hidden gap-3  ">
                                {locations.map((location, i) => (
                                  <Link
                                  onClick={onClose}
                                    to={`${location}`}
                                    smooth={true}
                                    duration={800}
                                    key={i}
                                    className="cursor-pointer text-mobiletextSmall tracking-wide text-success"
                                  >
                                    <p>{location}</p>
                                  </Link>
                                ))}
                              </div>
                              {/* laptop  */}
                              {/* First Column (First half of locations) */}
                              <div className=" text-textSmall  text-gray-100 md:block hidden  col-start-1 col-span-2">
                                {locations.slice(0, 3).map((location, i) => (
                                  <Link
                                  onClick={onClose}
                                    to={`${location}`}
                                    smooth={true}
                                    duration={800}
                                    key={i}
                                    className=" cursor-pointer text-gray-100  "
                                  >
                                    <p>{location}</p>
                                  </Link>
                                ))}
                              </div>

                              {/* Second Column (Remaining half of locations) */}
                              <section className="text-gray-100  hidden md:block   col-start-3 col-span-2 ">
                                {locations
                                  .slice(3, adjustedLength)
                                  .map((location, i) => (
                                    <Link
                                    onClick={onClose}
                                      to={`${location}`}
                                      smooth={true}
                                      duration={800}
                                      key={i}
                                      className=" cursor-pointer text-gray-100  "
                                    >
                                      <p>{location}</p>
                                    </Link>
                                  ))}
                              </section>
                            </div>
                          </React.Fragment>
                        );
                      }
                    )}
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