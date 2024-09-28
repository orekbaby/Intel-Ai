import React from "react";
import Image from "next/image";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  isClickable?: boolean;
}

const CardComponent: React.FC<CardProps> = ({
  icon,
  title,
  description,
  onClick,
  isClickable = true,
}) => {
  return (
    <div className="flex flex-col items-center px-4  rounded-[48px]">
      <div
        className={`hover:bg-gradient-to-r from-[rgba(189,254,28,0.9)] to-[rgba(37,184,222,0.9)] py-[2px] px-[2px] 
                    w-fit rounded-[48px] ${
                      isClickable
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    }`}
        onClick={isClickable ? onClick : undefined}
      >
        <div
          className="bg-gradient-to-r from-[rgba(28,28,28,0.9)] to-[rgba(0,0,0,0.9)]
                      w-[354px] md:w-[250px] lg:w-[354px] h-[195px] rounded-[48px] px-6 py-6 shadow-lg"
        >
          <div className="text-[#707070]">
          {icon}
          </div>
          <h3 className="font-medium text-[18px] md:text-base lg:text-base mb-2 text-center">
            {title}
          </h3>
          <p
            className="font-[300] text-base w-full h-auto text-[#707070] text-center"
            style={{ fontWeight: 300 }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
