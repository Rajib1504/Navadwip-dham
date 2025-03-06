import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [travellist, setTravelList] = useState([]);
  // console.log(travellist);
  useEffect(() => {
    fetch("/Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelList(data))
      // .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="bg-primaryBlack">
      <div className="mx-auto w-11/12">
        <div className=" flex md:justify-end justify-start  pt-space60">
          <div className="md:w-2/3 w-full font-primaryLight  flex flex-col justify-end">
            <p className="font-primaryLight border-b border-secondaryWhite text-textSmall mb-spacelg text-success">
              Menu
            </p>
            <Link to="topContainer" smooth={true} duration={800} className=" cursor-pointermy-space15 text-heading2 text-success  border-b border-secondaryWhite">
              Intro
            </Link>
            <Link to="DayOne" smooth={true} duration={800} className=" cursor-pointer my-space15 text-heading2 text-success">Parikarma</Link>

            {/* travel list section  */}
            <div className="flex flex-col text-textSmall  py-space15 mb-space60">
              {Object.entries(travellist).map(([day, places], index) => (
                <div
                  key={index}
                  className=" grid grid-rows-2 tracking-wide md:grid-rows-none md:grid-cols-4 md:gap-4  my-space15 md:items-start"
                >
                  {/* Day Name */}
                  <Link to={`${day}`}
                          smooth={true}
                          duration={800} className="text-mobiletextSmall cursor-pointer tracking-wider row-span-full md:text-textSmall  text-primaryWhite font-primaryLight md:col-span-1  font-bold  ">
                    {day}
                  </Link>
                  <div className="col-span-3 my-space15 md:my-auto grid-cols-6 grid  md:grid ">
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
                            <Link to={`${placeName}`}
                          smooth={true}
                          duration={800}
                              className={` cursor-pointer col-span-2 text-success tracking-wide text-mobiletextSmall`}
                            >
                              {placeName}
                            </Link>
                            <div className="  grid-flow-col col-span-4 md:grid grid-cols-4  ">

                            
                            {/* mobile  */}
                            <div  className="  col-span-4 text-success md:hidden block mb-space30 ">
                              {locations.map((location, i) => (
                                <Link to={`${location}`}
                                smooth={true}
                                duration={800} key={i} className="cursor-pointer text-mobiletextSmall tracking-wide text-success">
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
                                  <Link  to={`${location}`}
                                  smooth={true}
                                  duration={800} key={i} className=" cursor-pointer text-gray-100">
                                    {location}
                                  </Link>
                                ))}
                            </div>

                            {/* Second Column (Remaining half of locations) */}
                            <section className="text-gray-100  hidden md:block mb-space30  col-start-3 col-span-2">
                              {locations
                                .slice(halfLength, adjustedLength)
                                .map((location, i) => (
                                  <Link  to={`${location}`}
                                  smooth={true}
                                  duration={800} key={i} className=" cursor-pointer text-gray-100">
                                    {location}
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
              ))}
            </div>
            {/* next section  */}
            <Link to="Books" smooth={true} duration={800} className=" cursor-pointer py-space15 border-y border-secondaryWhite">
              <h2 className="text-heading2  text-success">Books</h2>
            </Link>
            <div className="py-space15 border-b border-secondaryWhite">
              <a  href="mailto:example@email.com?subject=Hello&body=I have some questions !" className="text-heading2 cursor-pointer text-success">Ask a Question</a>
            </div>
          </div>
        </div>
        <footer className="mt-space240 md:mt-space120 flex items-center md:text-textSmall text-textSmall text-primaryWhite font-primaryLight justify-between">
          <h5>@2025</h5>
          <h5 className="hidden md:block">Instagram</h5>
          <h5>Designed by Chaitanya</h5>
        </footer>
      </div>
    </div>
  );

  {
    /* mobile  */
  }
  //    <div className="text-success  md:hidden block mb-space30 col-span-1">
  //    {locations.map((location, i) => (
  //      <div key={i} className="text-mobiletextSmall tracking-wide text-success">
  //        {location}
  //      </div>
  //    ))}
  //  </div>

  // <div className="text-gray-100 hidden md:block mb-space30 col-span-2">
  //   {locations.slice(halfLength, adjustedLength).map((location, i) => (
  //     <div key={i} className="text-gray-100">
  //       {location}
  //     </div>
  //   ))}
  // </div>;
  // <div className="text-gray-100 md:block hidden mb-space30 col-span-1">
  //   {locations.slice(0, halfLength).map((location, i) => (
  //     <div key={i} className="text-gray-100">
  //       {location}
  //     </div>
  //   ))}
  // </div>;
};

export default Footer;
