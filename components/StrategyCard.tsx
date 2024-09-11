import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";

interface CardProps {
  strategy: string;
  isActive: boolean;
  onClick: () => void;
  onDelete: () => void;
  timestamp: { date: string, time: string }; // Include timestamp in props
}

const StrategyCard: React.FC<CardProps> = ({ strategy, isActive, onClick, onDelete, timestamp }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

          {/* Delete button wrapped in dialog trigger */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div
                className="w-[25px] h-[25px] bg-[#434343] flex justify-center items-center rounded-[4px] cursor-pointer"
                onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
              >
                <MdDeleteOutline className="w-[16px] h-[16px]" />
              </div>
            </DialogTrigger>

            {/* Modal content */}
            <DialogContent className="max-w-[300px] py-6 px-4 rounded-[20px] outline-none border-none bg-[#181818]">
              <div className="text-[14px] font-normal text-white text-center mb-4">
                Are you sure you want to delete your strategy?
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className="w-[80px] px-4 rounded-[20px] text-sm h-10 py-2 bg-red-500 text-white font-medium"
                  onClick={() => {
                    onDelete(); // Call delete handler
                    setIsDialogOpen(false); // Close modal
                  }}
                >
                  Yes
                </button>
                <button
                  className="py-2 w-[80px] px-4 rounded-[20px] text-sm h-10  text-white font-medium border border-neutral-500"
                  onClick={() => setIsDialogOpen(false)} // Close modal without deleting
                >
                  No
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center gap-1 bg-[#131313] p-2 rounded-[12px]">
            <FaRegClock className="w-[10px] h-[10px]" />
            <p className="font-[300] text-[8px] leading-[12px] text-[#858585] helvetica-font">
              {timestamp.date}{" "}
              <span className="font-normal text-[8px] leading-[12px] text-white helvetica-font">
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
