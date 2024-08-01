import React from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "./ui/button";

interface CardProps {
  title: string;
  response: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, response, img }) => {
  return (
    <div className="w-[242px] h-auto pb-4 rounded-[16px] bg-[#252525] px-3">
      <div className="px-3 py-3 h-[34px] border-b border-[#3D3D3D] mb-5">
        <h5 className="font-medium text-sm leading-[14.56px]">{title}</h5>
      </div>
      <p className="font-normal text-sm leading-[14.56px] mb-2">{response}</p>
      <div className="flex justify-start items-center gap-4 mb-10">
        <Image src={img} width={24} height={24} alt="image" />
        <div className="w-[25px] flex justify-center items-center rounded-[4px] h-[25px] bg-[#1b1b1b]">
          <IoCopyOutline className="w-[16px] h-[16px]" />
        </div>
      </div>
      <div className="border-[#303030] border-t h-[44px]">
        <div className="w-full h-auto gap-4 flex justify-between items-center mb-5 pt-2">
          <Button className="w-[122px] h-[33px] p-[10px] bg-[#0D0D0D] rounded-[50px] font-medium text-sm leading-[14.56px]">
            Add to draft
          </Button>
          <Button className="w-[122px] h-[33px] text-white font-medium text-sm leading-[14.56px] rounded-[50px] border-[#707070] border p-[10px]">
            Tweet now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
