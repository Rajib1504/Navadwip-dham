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
          <div className="border-2 border-red-400 py-space15 mb-space60">
            {Object.entries(travellist).map(([day, place], index) => (
              <div key={index}>
                <h2 className=" text-xl mb-4 font-bold text-success border-2 border-blue-500">
                  {day}
                </h2>
                <div>
                {Object.entries(place).map(([placeName, locations],idx) => (
                  <div>
                        <h3 key={idx}>{placeName}</h3>
                        <div>
                              {locations.map((location,i)=>(
                                    <h5 key={i}>{location}</h5>
                              ))}
                        </div>

                  </div>
            
                ))}
                </div>
              </div>
            ))}
            hiii there how are
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
