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
      <div className="border-2 flex justify-end mx-auto w-11/12 border-blue-500 pt-space60">
        <div className="w-2/3 font-primaryLight  flex flex-col justify-end">
          <p className="font-primaryLight border-b border-secondaryWhite text-textSmall mb-spacelg text-success">
            Menu
          </p>
          <h3 className="my-space15 text-heading2 text-success  border-b border-secondaryWhite ">
            Intro
          </h3>
          <h3 className="my-space15 text-heading2 text-success">Parikarma</h3>

          {/* travel list section  */}
          <div className="border-2 flex flex-col border-red-400 py-space15 mb-space60">
            {Object.entries(travellist).map(([day, places], index) => (
              <div
                key={index}
                className="mb-6 grid grid-cols-4 gap-4 border-2 border-green-500 items-start"
              >
                {/* Day Name */}
                <h2 className="text-xl col-span-1 row-span-full border-2 border-yellow-200 font-bold text-gray-400 mb-2">
                  {day}
                </h2>
                <div className="col-span-3 grid grid-cols-3">
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
                        <div
                          className={`col-span-1 text-blue-600 border-2 border-green-500 font-semibold`}
                        >
                          {placeName}
                        </div>

                        {/* First Column (First half of locations) */}
                        <div className="text-gray-100 mb-space30 col-span-1">
                          {locations.slice(0, halfLength).map((location, i) => (
                            <div key={i} className="text-gray-100">
                              {location}
                            </div>
                          ))}
                        </div>

                        {/* Second Column (Remaining half of locations) */}
                        <div className="text-gray-100 mb-space30 col-span-1">
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
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
