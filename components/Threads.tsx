import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineClipboard } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Calendar from "./Calendar2";
import Calendar2 from "./Calendar2";
import { useToast } from "@/components/ui/use-toast";

interface Thread {
  content: string;
  count: number;
  countNum: string;
}

interface ThreadsProps {
  threadsContent: Thread[];
  handleSave: () => void;
  handleDivideThread: (index: number) => void;
  handleAddImage: (index: number, imageUrl: string) => void;
  handleDeleteThread: (index: number) => void;
  handleCopyContent: (content: string) => void;
}

const Threads: React.FC<ThreadsProps> = ({
  threadsContent,
  handleSave,
  handleDivideThread,
  handleAddImage,
  handleDeleteThread,
}) => {
  const { toast } = useToast();
  const [images, setImages] = useState<{ [key: number]: string[] }>({});
  const [currentThreadIndex, setCurrentThreadIndex] = useState<number | null>(
    null
  );

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      event.target.files &&
      event.target.files[0] &&
      currentThreadIndex !== null
    ) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          const imageUrl = reader.result as string;
          setImages((prevImages) => {
            const updatedImages = { ...prevImages };
            if (!updatedImages[currentThreadIndex]) {
              updatedImages[currentThreadIndex] = [];
            }
            updatedImages[currentThreadIndex] = [
              ...updatedImages[currentThreadIndex],
              imageUrl,
            ];
            return updatedImages;
          });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCopyContent = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        toast({
          description: "Text copied to clipboard.",
        });
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
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
              <Button className="font-normal text-[15px] leading-[15.6px] text-[#A4A4A4]">
                Schedule
              </Button>
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
                <div className="flex flex-wrap gap-2 pt-2">
                  {images[index]?.map((imgUrl, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={imgUrl}
                      alt={`Image ${imgIndex}`}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  ))}
                </div>
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
                    <div
                      className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]"
                      onClick={() => handleDivideThread(index)}
                    >
                      <FaPlus className="w-[12px] h-[12px]" />
                    </div>
                    <div
                      className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px] cursor-pointer"
                      onClick={() => {
                        setCurrentThreadIndex(index);
                        document.getElementById(`file-input-${index}`)?.click();
                      }}
                    >
                      <CiImageOn className="w-[13px] h-[13px]" />
                      <input
                        id={`file-input-${index}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]"
                      onClick={() => handleCopyContent(row.content)}
                    >
                      <HiOutlineClipboard className="w-[13px] h-[13px]" />
                    </div>
                    <div
                      className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]"
                      onClick={() => handleDeleteThread(index)}
                    >
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
