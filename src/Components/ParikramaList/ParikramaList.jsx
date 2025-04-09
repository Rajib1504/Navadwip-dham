import React, { useEffect, useRef, useState } from "react";
import {  Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ParikramaList = ({ onClose }) => {
  const [travellist, setTravelList] = useState([]);
  // console.log(travellist);
  useEffect(() => {
    fetch("/Json/Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelList(data));
    // .catch((error) => console.log(error.message));
  }, []);
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { y: "100%" },
      { y: "0%", duration: 0.8, ease: "power4.out" }
    );
  }, []);
  return (
    <div
      ref={container}
      className="fixed top-0 left-0 z-50 w-full h-screen bg-primaryBlack overflow-y-scroll px-space20 py-space20"
    >
      <div className="flex flex-col text-textSmall">
        <div className="flex flex-col text-textSmall  py-space15 mb-space60">
          {travellist.length === 0 ? (
            <p className="text-white">Loading Parikramas...</p>
          ) : (
            Object.entries(travellist).map(([day, places], index) => (
              <div
                key={index}
                className=" grid grid-rows-2 tracking-wide md:grid-rows-none md:grid-cols-4 md:gap-4  my-space15 md:items-start"
              >
                {/* Day Name */}
                <Link
                onClick={onClose}
                  to={`${day}`}
                  smooth={true}
                  duration={800}
                  className="text-mobiletextSmall cursor-pointer tracking-wider row-span-full md:text-textSmall  text-primaryWhite font-primaryLight md:col-span-1  font-bold  "
                >
                  {day}
                </Link>
                <div className="col-span-3 my-space15 md:my-auto grid-cols-6 grid  md:grid ">
                  {Object.entries(places).map(([placeName, locations], idx) => {
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
                          className={` cursor-pointer col-span-2 text-success tracking-wide text-mobiletextSmall`}
                        >
                          {placeName}
                        </Link>
                        <div className="  grid-flow-col col-span-4 md:grid grid-cols-4  ">
                          {/* mobile  */}
                          <div className="  col-span-4 text-success md:hidden flex flex-wrap gap-3 mb-space30 ">
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
                              </Link>
                            ))}
                          </div>
                          {/* laptop  */}
                          {/* First Column (First half of locations) */}
                          <div className=" text-gray-100 md:block hidden mb-space30 col-start-1 col-span-2">
                            {locations
                              .slice(0, halfLength)
                              .map((location, i) => (
                                <Link
                                onClick={onClose}
                                  to={`${location}`}
                                  smooth={true}
                                  duration={800}
                                  key={i}
                                  className=" cursor-pointer text-gray-100  mr-spacemd"
                                >
                                  {location}
                                </Link>
                              ))}
                          </div>

                          {/* Second Column (Remaining half of locations) */}
                          <section className="text-gray-100  hidden md:block mb-space30  col-start-3 col-span-2">
                            {locations
                              .slice(halfLength, adjustedLength)
                              .map((location, i) => (
                                <Link
                                onClick={onClose}
                                  to={`${location}`}
                                  smooth={true}
                                  duration={800}
                                  key={i}
                                  className=" cursor-pointer text-gray-100  mr-spacemd"
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
