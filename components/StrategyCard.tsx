import { FaRegClock } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

interface CardProps {
  strategy: string;
  isActive: boolean;
  onClick: () => void;
  onDelete: () => void;
  timestamp: { date: string, time: string }; // Include timestamp in props
}

const StrategyCard: React.FC<CardProps> = ({ strategy, isActive, onClick, onDelete, timestamp }) => {
  return (
    <div
      className={`relative w-[363px] h-auto rounded-[24px] p-[2px] cursor-pointer ${
        isActive
          ? "bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)]"
          : "bg-[#1d1d1d]"
      }`}
      onClick={onClick}
    >
      <div className="bg-[#1d1d1d] rounded-[24px] flex flex-col justify-between h-full px-2 py-2">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="font-medium text-xs leading-[12.48px] pb-2 pt-1">Strategy Created</h5>
            <p className="font-normal  w-full text-xs leading-[16px] text-white">
              {strategy}
            </p>
          </div>
          <div
            className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click event from bubbling up
              onDelete(); // Call the delete handler
            }}
          >
            <MdDeleteOutline className="w-[16px] h-[16px]" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-1 bg-[#131313] p-2 rounded-[12px]">
            <FaRegClock className="w-[10px] h-[10px]" />
            <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
              {timestamp.date}{" "}
              <span className="font-normal text-[8px] leading-[12px] text-white">
                {timestamp.time}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StrategyCard;
