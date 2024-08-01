import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Calendar from "./Calendar2";
import Calendar2 from "./Calendar2";

interface Thread {
  content: string;
  count: number;
  countNum: string;
}

interface ThreadsProps {
  threadsContent: Thread[];
  handleSave: () => void;
}

const Threads: React.FC<ThreadsProps> = ({ handleSave, threadsContent }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [editorContent, setEditorContent] = useState<string>("");
  const [progress, setProgress] = useState(0); // For progress bar

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <div className="pt-5">
        <Image
          src="/threads.png"
          width={820}
          height={610}
          alt="threads-img"
          className="hidden"
        />

        <div className="w-full h-auto">
          <div className="w-full flex justify-between h-[58px] border-[#262626] border-b bg-[#131313] px-3">
            <div className="flex justify-start items-center">
              <h5 className="font-semibold text-[15.6px] leading-[15.6px]">
                Threads Content
              </h5>
            </div>
            <div className="flex justify-end gap-5 items-center px-4">
              <Button className="font-normal text-[15px] leading-[15.6px] text-[#A4A4A4]">
                Add to draft
              </Button>
              <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger className="cursor-pointer" asChild>
                  <Button
                    className="font-normal text-[15px] leading-[15.6px] text-[#A4A4A4]"
                    onClick={() => setOpenModal(true)}
                  >
                    Schedule
                  </Button>
                </DialogTrigger>
                <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
                  <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                    <Calendar2
                      editorContent={editorContent}
                      setProgress={setProgress}
                      onSave={handleSave}
                      onCloseModal={closeModal}
                      updateProgress={function (
                        isScheduling: boolean,
                        actionType: "save" | "post"
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                      isScheduling={false}
                      setIsScheduling={function (
                        value: React.SetStateAction<boolean>
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                className="w-[119px] h-[35px] rounded-[50px] font-medium text-sm bg-white leading-[14.56px] text-[#0D0D0D]"
                onClick={handleSave}
              >
                Post Now
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-6 pt-5 px-3 w-full h-auto">
            {threadsContent?.map((row, index) => (
              <div key={index}>
                <p className="font-normal text-sm leading-[14.56px]">
                  {row.content}
                </p>
                <div className="flex justify-start pt-5 items-center gap-4">
                  <div className="flex gap-1 items-center">
                    <span className="font-[300] text-[10px] text-xs text-[#BDFE1C]">
                      {row.count}{" "}
                    </span>
                    <p className="font-[300] text-[10px] text-xs text-[#858585]">
                      {row.countNum}
                    </p>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                      <FaPlus className="w-[12px] h-[12px]" />
                    </div>
                    <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                      <CiImageOn className="w-[13px] h-[13px]" />
                    </div>
                    <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                      <HiOutlineArrowPath className="w-[13px] h-[13px]" />
                    </div>
                    <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                      <MdDeleteOutline className="w-[10.89px] h-[14px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Threads;
