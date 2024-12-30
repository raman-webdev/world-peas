import React from "react";
import Image from "next/image";

const Thirdheader = () => {
  return (
    <>
      <div className=" flex px-10 py-10 gap-x-28 items-center">
        <div>
          <Image
            src="/Assets/image1.png"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="w-full h-[40rem]"
            alt="Picture of the author"
          />
        </div>
        <div className="">
          <Image
            src="/Assets/image2.png"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="w-full h-96"
            alt="Picture of the author"
          />
          <p className="mt-1 text-xs"> <span className="font-semibold ">Central California — </span>The person who grew these was located in Central California and, er, hopefully very well- <br />compensated.</p>
        </div>
      </div>
    </>
  );
};

export default Thirdheader;
