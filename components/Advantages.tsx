import { advantages } from '@/config/mockData'
import React from 'react'
import Image from "next/image";

const Advantages = () => {
  return (
    <>
    <div className="text center mx-auto px-0 md:px-40 lg:px-40 mb-10 md:mb-10 lg:mb-16">
          <h5 className="font-normal md:font-medium lg:font-medium text-[20px] md:text-[36px] lg:text-[32px] leading-[58.15px] mt-10 mb-3 text-center mx-auto">
            Advantages
          </h5>

          <p
            className="font-normal text-sm
             text-[#BDBDBD] w-[333px] md:w-[95%] lg:w-[55%] 
          h-[69px] mx-auto px-0 md:px-0 lg:px-0 mb-5 text-center leading-[22.68px] md:leading-[22.68px] lg:leading-[24.92px]"
          >
            Discover a world of possibilities with Glossy&apos; exceptional
            features tailored to enhance your coding journey.
          </p>
        </div>
        {/* grid section */}

        <div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
  gap-8 md:gap-12 lg:gap-16 pb-6 md:pb-12 lg:pb-12 px-4 md:px-6 lg:px-8 bg-transparent 
  md:border-b lg:border-b md:border-[#272727] lg:border-[#272727] w-full mx-auto"
>
  {advantages?.map((row, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      <Image
        src={row.img}
        width={48} // Use relative units or appropriate sizes
        height={48}
        alt="icon"
        className="mb-4"
      />
      <h5 className="font-medium text-base md:text-xl lg:text-[20px] mb-3">
        {row.title}
      </h5>
      <p className="font-normal text-xs md:text-base lg:text-sm text-[#BDBDBD] opacity-[45%]">
        {row.description}
      </p>
    </div>
  ))}
</div>
    
    </>
  )
}

export default Advantages