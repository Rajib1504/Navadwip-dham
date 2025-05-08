
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Footer = React.forwardRef((props, ref) => {
  const [travellist, setTravelList] = useState([]);

  // console.log(travellist);
  useEffect(() => {
    fetch("/Json/Travel.json")
      .then((res) => res.json())
      .then((data) => setTravelList(data));
    // .catch((error) => console.log(error.message));
  }, []);
  return (
    <section ref={ref} className="bg-primaryBlack grid grid-cols-12 ">
      <div className="mx-auto w-11/12  col-span-12 grid grid-cols-12 ">
        <div className="col-start-1 col-span-12 flex md:justify-end justify-start   pt-space60">
          <div className="md:w-2/3 w-full font-primaryLight  flex flex-col justify-end">
            <p className="font-primaryLight border-b border-secondaryWhite text-mobiletextSmall sm:text-textSmall pb-spacelg text-success">
              Menu
            </p>
            <Link
              to="topContainer"
              className=" cursor-pointer py-space15 text-mobileheading2  sm:text-heading2 text-success  border-b border-secondaryWhite"
            >
              Intro
            </Link>
            <Link
              to="Day One"
              className=" text-mobileheading2 cursor-pointer my-space15 sm:text-heading2 text-success"
            >
              Parikarma
            </Link>

            {/* travel list section  */}
            <div className="flex flex-col text-textSmall  pt-space15 mb-[48px] sm:mb-[72px]">
              {Object.entries(travellist).map(([day, places], index) => (
                <div
                  key={index}
                  className=" grid  tracking-wide md:grid-rows-none md:grid-cols-4 md:gap-4  mt-[12px] sm:mt-space30 md:items-start"
                >
                  {/* Day Name */}
                  <Link
                    to={`${day}`}
                    smooth={true}
                    duration={800}
                    className="text-mobiletextSmall cursor-pointer tracking-wider  md:text-textSmall text-primaryWhite font-primaryLight md:col-span-1"
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
                              to={`${placeName}`}
                              smooth={true}
                              duration={800}
                              className={` cursor-pointer col-span-2 text-success tracking-wide text-mobiletextSmall`}
                            >
                              {placeName}
                            </Link>
                            <div className=" gap-space15 col-start-4 col-span-4 grid-flow-col md:col-span-4 md:grid grid-cols-4">
                         
                              <div className=" gap-space15 col-start-4 col-span-4 grid-flow-col md:col-span-4 md:grid grid-cols-4">
                                <div
                                  className={`text-textSmall  text-gray-100  col-start-1 col-span-4 ${
                                    locations.length > 3 && "md:columns-2"
                                  }`}
                                >
                                  {locations.map((location, i) => (
                                    <Link
                                      to={location
                                        .toLowerCase()
                                        .trim()
                                        .replace(/\s+/g, "-")}
                                      smooth={true}
                                      duration={800}
                                      key={i}
                                      className=" cursor-pointer text-gray-100  block "
                                    >
                                      {location}
                                    </Link>
                                  ))}
                                </div>
                              </div>
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
            <Link
              to="Books"
              className=" cursor-pointer py-space15 border-y border-secondaryWhite"
            >
              <h2 className="text-mobileheading2 sm:text-heading2  text-success">
                Books
              </h2>
            </Link>
            <div className="py-space15 border-b border-secondaryWhite">
              <a
                href="mailto:hello@dhama.info?subject=Navadvip"
                className="text-mobileheading2 sm:text-heading2 cursor-pointer text-success"
              >
                Ask a Question
              </a>
            </div>
          </div>
        </div>
        <footer className="col-start-1 col-span-12   mt-space60 mb-space15 grid grid-cols-12 md:text-textSmall text-textSmall text-primaryWhite font-primaryLight ">
          <p className="col-span-4">@2025</p>
          <a
            href="https://www.instagram.com/bsvtrust"
            target="_blank"
            className="hidden md:block col-span-4  "
          >
            Instagram
          </a>
          <p className=" col-span-8 md:col-span-4 text-right">
            Designed by{" "}
            <a
              href="https://www.instagram.com/chaitanya_agency"
              target="_blank"
            ></a>
            Chaitanya
          </p>
        </footer>
      </div>
    </section>
  );
});

export default Footer;
