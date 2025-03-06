import React, { useEffect, useState } from "react";

const IslandList = () => {
  const [ilands, setIlands] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(ilands);
  useEffect(() => {
    fetch("/Ilandlist.json")
      .then((res) => res.json())
      .then((data) => {
        setIlands(data);
        setLoading(false);
      })
      .catch((error) => {
        // console.log("ilandlist fetch error:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto border-t border-accentBlack md:mb-space240">
    {loading ? (
      <p className="text-center hidden text-lg text-success">Loading...</p>
    ) : (
      <>
      <hr className=" "/>
        {ilands?.map((item) => (
         <div
         key={item.id}
         className="py-space15 md:py-space border-b border-accentBlack mx-auto md:grid justify-center grid-cols-12 md:grid-flow-col flex flex-col"
       >
            {/* Left Section */}
            <div className="text-left md:col-start-2 md:col-span-6  col-span-6 ">
            <h1 className="  smMobile:text-mobileheading2 text-mobileheading2   row-start-2 row-span-3   font-primaryLight relative">
              <span className="absolute lg:top-0 lg:-left-6 md:-right-20 md:-top-10 lgMobile:-top-4 right-2 text-textSmall">{item.id}</span>
             <span className="text-left md:text-heading2"> {item.title}</span>
            </h1>
            </div>
            {/* Right Section */}
            <div className="flex  md:col-span-6 mt-spacelg items-stretch  col-span-12 lgMobile:gap-6 md:gap-space120 flex-row justify-start ">
              <div className="flex-1">
                <h3 className="text-secondaryBlack text-mobiletextSmall md:text-textSmall font-primaryLight">{item.represents.label}</h3>
                <p className="font-primaryLight text-mobiletextSmall md:text-textSmall">{item.represents.value}</p>
                <p className="font-primaryLight text-mobiletextSmall md:text-textSmall">{item.represents.personal}</p>
              </div>
  
              <div className="flex-1 ">
                <h3 className="text-secondaryBlack font-primaryLight text-mobiletextSmall md:text-textSmall ">{item.embodies.label}</h3>
                <p className="font-primaryLight text-mobiletextSmall md:text-textSmall ">{item.embodies.value}</p>
                <p className="font-primaryLight text-mobiletextSmall md:text-textSmall ">{item.embodies.place}</p>
              </div>
  
              <div className="flex-1">
                <h3 className="text-secondaryBlack font-primaryLight">{item.visit_on.label}</h3>
                <p className="font-primaryLight text-mobiletextSmall md:text-textSmall ">{item.visit_on.value}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    )}
  </div>
  
  
  );
};

export default IslandList;
