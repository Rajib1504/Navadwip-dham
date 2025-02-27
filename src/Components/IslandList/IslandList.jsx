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
    <div className="lg:w-11/12 mx-auto w-full mt-space120 border-2 border-red-300">
    {loading ? (
      <p className="text-center text-lg font-bold">Loading...</p>
    ) : (
      <>
        {ilands?.map((item) => (
          <div
            key={item.id}
            className="py-space30 border-2 border-blue-400 mx-auto md:grid grid-cols-12 items-center justify-center"
          >
            {/* Left Section */}
            <h1 className="text-heading2 border-2 col-start-2 col-span-3 border-blue-500 font-primaryLight relative">
              <span className="absolute top-0 -left-6 text-sm">{item.id}</span>
              {item.title}
            </h1>
  
            {/* Right Section */}
            <div className="flex border-2 col-span-7 border-red-500 gap-14 flex-col md:flex-row justify-end items-center">
              <div className="w-36 min-h-[5rem] border-2 border-green-400 text-center">
                <h3 className="text-secondaryBlack font-primaryLight">{item.represents.label}</h3>
                <p className="font-primaryLight">{item.represents.value}</p>
                <p className="font-primaryLight">{item.represents.personal}</p>
              </div>
  
              <div className="w-40 min-h-[5rem] border-2 border-green-400 text-center">
                <h3 className="text-secondaryBlack font-primaryLight">{item.embodies.label}</h3>
                <p className="font-primaryLight text-sm">{item.embodies.value}</p>
                <p className="font-primaryLight text-sm">{item.embodies.place}</p>
              </div>
  
              <div className="w-36  min-h-[5rem] border-2 border-green-400 text-center">
                <h3 className="text-secondaryBlack font-primaryLight">{item.visit_on.label}</h3>
                <p className="font-primaryLight w-32">{item.visit_on.value}</p>
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
