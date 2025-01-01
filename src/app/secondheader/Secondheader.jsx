import React from "react";

const Secondheader = () => {
  return (
    <>
      <div className="text-center p-5 sm:p-20 ">
        <div className="text-2xl sm:text-6xl">
          <h1 className="">
            We&apos;re <span className="italic font-light">farmers , purveyors, </span>
              and <span className="italic font-light">eaters</span> of <br /> organically grown food.
          </h1>
        </div>

        <div>
          <button className="bg-green-600 mt-12 w-32 h-10 rounded">
            Browse our shop
          </button>
        </div>
      </div>
    </>
  );
};

export default Secondheader;
