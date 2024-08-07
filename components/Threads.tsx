import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Calendar3 from "./Calendar3";
import { useToast } from "@/components/ui/use-toast";
import { IoCopyOutline } from "react-icons/io5";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Thread {
  content: string;
  count: number;
  countNum: string;
}

interface ThreadsProps {
  threadsContent: Thread[];
  threadsText: string; // Add this line
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
  threadsText,
  handleDeleteThread,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const [images, setImages] = useState<{ [key: number]: string[] }>({});
  const [currentThreadIndex, setCurrentThreadIndex] = useState<number | null>(
    null
  );
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<"success" | "error" | null>(
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
        setMessage("Text copied to clipboard.");
        setMessageType("success");
        setTimeout(() => {
          setMessage(null);
        }, 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        setMessage("Failed to copy text.");
        setMessageType("error");
        setTimeout(() => {
          setMessage(null);
        }, 3000); // Hide message after 3 seconds
      });
  };

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
                    className="w-[114px] h-[35px] p-[10px] border-[#575757] border rounded-[50px] font-medium text-xs leading-[12.48px]"
                    onClick={() => setOpenModal(true)}
                  >
                    Schedule
                  </Button>
                </DialogTrigger>
                <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
                  <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                    <Calendar3
                      threadsText={threadsText}
                      setProgress={setProgress}
                      onSave={handleSave}
                      onCloseModal={closeModal}
                    />
                  </div>
                </DialogContent>
              </Dialog>
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
                    <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
                      <IoCopyOutline
                        className="w-[13px] h-[13px] cursor-pointer"
                        onClick={() => handleCopyContent(row.content)}
                      />
                      <ToastContainer />
                    </div>
                    {message && (
                      <div
                        className={`mt-2 p-2 rounded-md text-black ${
                          messageType === "success" ? "bg-white" : "bg-red-500"
                        }`}
                      >
                        {message}
                      </div>
                    )}
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
