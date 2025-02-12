import React, { useRef, useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast"


interface UploadFileProps {
  value: File | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadFile: React.FC<UploadFileProps> = ({ value, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCancelUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the input
    }
    onChange({
      target: { files: null },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const content = e.target?.result as string;
        const words = content.split(/\s+/);
        let truncatedContent = content;

        if (words.length > 5000) {
          truncatedContent = words.slice(0, 5000).join(' ');
          toast({
            description: "this file is more than the 5000 words upload limit.",
          })
        
        }

        // Create a new file with the truncated content
        const truncatedFile = new File([truncatedContent], file.name, {
          type: file.type,
        });

        // Create a custom event with the truncated file
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(truncatedFile);

        const customEvent = {
          target: { files: dataTransfer.files },
        } as React.ChangeEvent<HTMLInputElement>;

        onChange(customEvent); // Pass the custom event with the truncated file
      };
      reader.readAsText(file);
    }
  };

  const { toast } = useToast()


  return (
    <div className="border-[#2B2B2B] border-b pb-4 mb-5 w-full">
    <label
      htmlFor="inputField5"
      className="block text-white font-semibold text-sm leading-[22.48px] pt-1 mb-3"
    >
      Upload Document
    </label>
    <p
      className="text-[#858585] font-normal text-sm leading-[16.58px] mb-3 w-[95%] md:w-[90%] lg:w-[90px] 
    xl:w-[80%] 2xl:w-[70%]"
    >
      Kindly upload a document that contains detailed information about your
      project including Tokenomics, FAQs etc. PDF version of your{" "}
      <span className="text-white font-normal text-sm leading-[14.58px]">
        Gitbook would be perfect.
      </span>{" "}
    </p>
    <div className="flex items-center gap-1">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
      />
      {!value && (
        <button
          type="button"
          className="w-[397px] h-[60px] flex justify-center items-center mt-2 font-[300px] text-sm leading-[26.68px] text-center rounded-[66px] bg-[#131313] px-[15px] border border-[#363636]"
          onClick={handleButtonClick}
        >
          <p className="font-normal leading-[10.4px] text-[10px] text-[#858585]">
            Upload doc.{" "}
            <span className="font-semibold leading-[10.4px] text-[10px] text-[#858585]">
              PDF, GITBOOK, DOC
            </span>
          </p>
        </button>
      )}
    </div>
    {value && (
      <div className="flex items-center mt-5">
        <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mr-1">
          <FaCheck className="text-white w-[10px] h-[10px]" />
        </div>
        <p className="text-white font-normal text-sm leading-[14.58px]">
          {value.name}
        </p>
        <button
          type="button"
          className="ml-2 text-red-500 text-sm"
          onClick={handleCancelUpload}
        >
          <FaTimes />
        </button>
      </div>
    )}
  </div>

  );
};

export default UploadFile;
