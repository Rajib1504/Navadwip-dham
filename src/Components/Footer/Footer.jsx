import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [travellist, setTravelList] = useState([]);
  // console.log(travellist);
  useEffect(() => {
    fetch("/Json/Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelList(data))
      // .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="bg-primaryBlack border-2 border-red-600 ">
      <div className="mx-auto w-11/12">
        <div className=" flex md:justify-end justify-start  pt-space60">
          <div className="md:w-2/3 w-full font-primaryLight  flex flex-col justify-end">
            <p className="font-primaryLight border-b border-secondaryWhite text-textSmall mb-spacelg text-success">
              Menu
            </p>
            <Link to="topContainer"  className=" cursor-pointermy-space15 text-heading2 text-success  border-b border-secondaryWhite">
              Intro
            </Link>
            <Link to="DayOne"  className=" cursor-pointer my-space15 text-heading2 text-success">Parikarma</Link>

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
                              className={` cursor-pointer col-span-3 text-success tracking-wide text-mobiletextSmall`}
                            >
                              {placeName}
                            </Link>
                            <div className="  grid-flow-col col-span-3 md:grid grid-cols-4  ">
                            {/* mobile  */}
                            <div  className="  col-span-4 text-success md:hidden flex flex-wrap gap-3 mb-space30 ">
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
                                  duration={800} key={i} className=" cursor-pointer text-gray-100  mr-spacemd">
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
                                  duration={800} key={i} className=" cursor-pointer text-gray-100  mr-spacemd">

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
            <Link to="Books"  className=" cursor-pointer py-space15 border-y border-secondaryWhite">
              <h2 className="text-heading2  text-success">Books</h2>
            </Link>
            <div className="py-space15 border-b border-secondaryWhite">
              <a  href="mailto:hello@dhama.info?subject=Navadvip" className="text-heading2 cursor-pointer text-success">Ask a Question</a>
            </div>
          </div>
        </div>
        <footer className="mt-space240  md:mt-space120 flex items-center md:text-textSmall text-textSmall text-primaryWhite font-primaryLight justify-between">
          <p>@2025</p>
          <a href="https://www.instagram.com/bsvtrust" target="_blank"  className="hidden md:block">Instagram</a>
          <p >Designed by <a href="https://www.instagram.com/chaitanya_agency" target="_blank"></a>Chaitanya</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
