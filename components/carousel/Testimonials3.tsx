import React from "react";
import { rachel } from "@/config/mockData";
import Image from "next/image";
const Testimonials3 = () => {
  return (
    <>
      {rachel?.map((row, index) => (
        <div
          key={index}
          className="bg-[#04150F] rounded-[5.98px] border-[#3A3A3A] border 
          w-[383.79px] h-[350.53px] md:h-[310.53px] lg:h-[310.53px] padding-[29.91px]  px-6 md:px-8 lg:px-8 py-10"
        >
          <p className="font-normal  text-[17.94px] leading-[22.93px] mb-8 padding-[29.91px] w-[284px] md:w-[323.98px] lg:w-[323.98px] h-[161px] text-[#BDBDBD]">
            {row.testimony}
          </p>
          <div className="flex gap-4 flex-row">
            
            <div className="flex flex-1 flex-col gap-[8px] p-1">
              <p className="font-medium text-[19.94px]"> {row.name}</p>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="font-normal text-[13.96px] text-[#BDBDBD] opacity-[45%]">
                    {row.work}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Testimonials3;
