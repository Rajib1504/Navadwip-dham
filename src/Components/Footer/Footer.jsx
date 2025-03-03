import React, { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
  const [travellist, setTravelList] = useState([]);
  console.log(travellist);
  useEffect(() => {
    fetch("/public/Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelList(data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="bg-primaryBlack">
      <div className="mx-auto w-11/12">
        <div className=" flex md:justify-end justify-start  pt-space60">
          <div className="md:w-2/3 w-full font-primaryLight  flex flex-col justify-end">
            <p className="font-primaryLight border-b border-secondaryWhite text-textSmall mb-spacelg text-success">
              Menu
            </p>
            <h3 className="my-space15 text-heading2 text-success  border-b border-secondaryWhite">
              Intro
            </h3>
            <h3 className="my-space15 text-heading2 text-success">Parikarma</h3>

            {/* travel list section  */}
            <div className="flex flex-col  py-space15 mb-space60">
              {Object.entries(travellist).map(([day, places], index) => (
                <div
                  key={index}
                  className="mb-6 grid grid-rows-2 md:grid-cols-4 md:gap-4  my-space15 md:items-start"
                >
                  {/* Day Name */}
                  <h2 className="text-textSmall row-span-full md:text-textRegular md:col-span-1  font-bold text-gray-400 md:mb-spacemd">
                    {day}
                  </h2>
                  <div className="col-span-3 my-space15 md:my-auto grid-cols-2 grid  md:grid ">
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
                            <div
                              className={`col-span-1 text-success `}
                            >
                              {placeName}
                            </div>
                            {/* mobile  */}
                            <div className="text-success md:hidden block mb-space30 col-span-1">
                              {locations.map((location, i) => (
                                <div key={i} className="text-success">
                                  {location}
                                </div>
                              ))}
                            </div>
                            {/* laptop  */}
                            {/* First Column (First half of locations) */}
                            <div className="text-gray-100 md:bock hidden mb-space30 col-span-1">
                              {locations
                                .slice(0, halfLength)
                                .map((location, i) => (
                                  <div key={i} className="text-gray-100">
                                    {location}
                                  </div>
                                ))}
                            </div>

                            {/* Second Column (Remaining half of locations) */}
                            <div className="text-gray-100 hidden md:block mb-space30 col-span-1">
                              {locations
                                .slice(halfLength, adjustedLength)
                                .map((location, i) => (
                                  <div key={i} className="text-gray-100">
                                    {location}
                                  </div>
                                ))}
                            </div>
                          </React.Fragment>
                        );
                      }
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="py-space15 border-y border-secondaryWhite">
              <h2 className="text-heading2  text-success">Books</h2>
            </div>
            <div className="py-space15 border-b border-secondaryWhite">
              <h2 className="text-heading2  text-success">Ask a Question</h2>
            </div>
          </div>
        </div>
        <footer className="mt-space240 md:mt-space120 flex items-center md:text-textSmall text-textRegular text-primaryWhite font-primaryLight justify-between">
          <h5>@2025</h5>
          <h5 className="hidden md:block">Instagram</h5>
          <h5>Designed by Chaitanya</h5>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
