import React from "react";

const Books = () => {
  return (
    <div className=" py-space120 md:py-space240 bg-primaryBlack">
      <div className="w-11/12 mx-auto">
        <div>
          <p className="mb-space60 md:mb-space120   text-center text-success">Books</p>
          <h5 className="text-center font-primaryLight md:text-heading2 text-[35px] w-full md:ml-space30 text-success">
            Deepen your experience of Navadvip <br className="hidden md:block"/> by exploring these
            carefully selected books.
          </h5>
        </div>
        {/* books images  */}
        <div className="w-full mt-space120 md:mt-space240 border-2 border-red-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-spacesm">
          <div className="bg-accentWhite w-full flex  py-space60  flex-col  items-center ">
            <img src="/public/Books/81O1l+TT5tL._SL1500_ 1.svg" alt="" className="pb-space30" />
            <h6 className="text-center  font-primaryLight text-success">
              The Life of <br /> Chaitanya Mahaprabhu
            </h6>
          </div>

          <div className="bg-accentWhite w-full flex flex-col items-center py-space60">
            <img
              src="/public/Books/sri chaitanya.svg"
              alt=""
              className="pb-space30"
            />
            <h6 className="text-center font-primaryLight text-success">
              Sri Chaitanya <br /> and His Associates
            </h6>
          </div>

          <div className="bg-accentWhite w-full flex flex-col items-center py-space60 ">
            <img
              src="/public/Books/sri navadvipa dhama.svg"
              alt=""
              className="pb-space30"
            />
            <h6 className="text-center font-primaryLight text-success">
              The Excellence <br /> of Navadvip
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
