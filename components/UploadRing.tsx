import React, { useRef, useState } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast"
import { ring } from "@/assets";
import { MdOutlineFileUpload } from "react-icons/md";

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
    <div className="pb-3 w-full">
  <div className="flex items-center gap-1">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
      />
      {!value && (
         < MdOutlineFileUpload
        className="w-[18px] h-[18px] text-[#707070]"
        onClick={handleButtonClick}
      />
    
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
