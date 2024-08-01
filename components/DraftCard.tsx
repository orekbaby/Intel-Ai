import React from "react";
import { CiMenuKebab } from "react-icons/ci";

interface CardProps {
  draftTitle: string;
  isActive: boolean;
  onClick: () => void;
}

const DraftCard: React.FC<CardProps> = ({ draftTitle, isActive, onClick }) => {
  return (
    <div
      className={`flex justify-between relative w-fit rounded-[12px] p-1 ${
        isActive
          ? "bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]"
          : ""
      }`}
      onClick={onClick}
    >
      <button className="w-[363px] h-[46px] bg-[#1d1d1d] rounded-[12px] flex justify-between items-center px-2">
        <p className="font-semibold text-sm leading-[12px]">{draftTitle}</p>
        <CiMenuKebab className="text-base text-[#767676]" />
      </button>
    </div>
  );
};

export default DraftCard;
