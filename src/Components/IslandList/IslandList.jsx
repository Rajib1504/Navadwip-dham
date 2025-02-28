import React, { useEffect, useState } from "react";

const IslandList = () => {
  const [ilands, setIlands] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(ilands);
  useEffect(() => {
    fetch("/Ilandlist.json")
      .then((res) => res.json())
      .then((data) => {
        setIlands(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ilandlist fetch error:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto  my-space120 ">
    {loading ? (
      <p className="text-center text-lg font-bold">Loading...</p>
    ) : (
      <>
      <hr className="border"/>
        {ilands?.map((item) => (
         <div
         key={item.id}
         className="pb-space15 pt-space30 lg:py-space border-b-2 mx-auto grid-rows-12  lg:flex lg:justify-around items-center justify-center"
       >
            {/* Left Section */}
            <h1 className="  smMobile:text-heading3 text-heading1  row-start-2 lg:col-start-2 row-span-3 lg:col-span-3  font-primaryLight relative">
              <span className="absolute lg:top-0 lg:-left-6 md:-right-20 md:-top-10 lgMobile:-top-10 right-2 text-sm">{item.id}</span>
             <span className=""> {item.title}</span>
            </h1>
  
            {/* Right Section */}
            <div className="flex  row-span-7 lg:col-span-7 lgMobile:gap-6 md:gap-14  flex-row justify-end items-center">
              <div className="smMobile:w-[323px] w-48 md:w-36 min-h-[5rem]  text-left md:text-center">
                <h3 className="text-secondaryBlack font-primaryLight">{item.represents.label}</h3>
                <p className="font-primaryLight text-sm">{item.represents.value}</p>
                <p className="font-primaryLight text-sm">{item.represents.personal}</p>
              </div>
  
              <div className="w-64 md:w-40 min-h-[5rem]  text-left md:text-center">
                <h3 className="text-secondaryBlack font-primaryLight">{item.embodies.label}</h3>
                <p className="font-primaryLight text-sm">{item.embodies.value}</p>
                <p className="font-primaryLight text-sm">{item.embodies.place}</p>
              </div>
  
              <div className="w-32 md:w-38 min-h-[5rem]  text-left md:text-center">
                <h3 className="text-secondaryBlack font-primaryLight">{item.visit_on.label}</h3>
                <p className="font-primaryLight text-sm">{item.visit_on.value}</p>
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
