"use client";
import React, { useRef, useState } from "react";
import { FaCaretDown, FaCheck, FaCircle, FaTimes } from "react-icons/fa";
import { launchpadData } from "@/utils/mockData";
import "react-toastify/dist/ReactToastify.css";
import { toast, useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

interface ProjectListingsProps {
  onClose: () => void;
}
const ProjectListings: React.FC<ProjectListingsProps> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUpload, setIsUpload] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsFilled(event.target.value.trim() !== "");
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const toggleInput = () => {
    setIsEditing(!isEditing);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a document in PDF, DOC, or DOCX format.");
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setUploadedFileName(null);
        setIsUpload(false);
      } else {
        setTimeout(() => {
          console.log("File uploaded:", file.name);
          setUploadedFileName(file.name);
          setIsUpload(true);
        }, 1000);
      }
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    setIsUpload(false);
  };

  const handleCancelUpload = () => {
    setUploadedFileName(null);
    setIsUpload(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = () => {
    // Check if both inputValue is not empty and a file has been uploaded
    if (inputValue.trim() === "" || !uploadedFileName) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter a project name and upload a document before saving.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
     
      return;
    }
  
    // Save the project name to localStorage
    localStorage.setItem("projectName", inputValue);
  
    // Clear the input field and uploaded file
    setInputValue("");
    setUploadedFileName(null);
  
    // Show success message
    setShowSuccessMessage(true);
  
    // Close the dialog after 2 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
      onClose(); // Assuming onClose is a function to close the dialog
    }, 2000);
  
    // Show a success toast notification
    // Comment out this line if you don't want a success toast notification
  1
  };
  
  return (
    <>
      {launchpadData?.map((row, index) => (
        
        <div key={index}>
           
          <div className="flex flex-col mb-5 pb-1 border-[#1E1E1E] border-b text-left px-2 md:px-0 lg:px-0">
            <h5 className="font-medium cursor-pointer text-[13px] md:text-sm lg:text-sm leading-[14.56px] pb-2">
              Upcoming Project Listings
            </h5>
          </div>
          <div className="w-full h-auto rounded-[20px] pb-10">
            <div className="w-[430px] md:w-[460px] lg:w-[460px] h-auto bg-[#1B1B1B] pt-3 pb-4 px-3 md:px-4 lg:px-4 rounded-bl-[20px] rounded-br-[20px]">
              <h5 className="font-semibold text-sm text-[#f9f9f9] mb-4">
                Instructions:
              </h5>
              <p className="font-normal text-[13.5px] md:text-sm lg:text-sm leading-[16.55px] text-[#E4E4E4] mb-3">
                {row.insructionText}
              </p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet1}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet2}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet3}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <FaCircle className="text-[#858585] text-[6px]" />
                  <p className="font-[300] text-[#858585] text-sm leading-[14.56px] italic">
                    {row.bullet4}
                  </p>
                </div>
              </div>
            </div>

            {/* Input area starts here */}
            <div className="pt-7">
              <div className="border-[#2B2B2B] border-b pb-3 mb-5 w-full px-2 md:px-0 lg:px-0">
                <label
                  htmlFor="inputField3"
                  className="block text-white font-semibold text-sm leading-[22.48px] mb-2"
                >
                  What is the name of your project?
                </label>
                <div className="flex items-center relative">
                  {isFilled && !isEditing && (
                    <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
                      <FaCheck className="text-white w-[10px] h-[10px]" />
                    </div>
                  )}
                  {isEditing ? (
                    <input
                      id="inputField3"
                      className="custom-input2 mt-2 font-[300px] text-sm leading-[22.68px] pr-4 "
                      value={inputValue}
                      placeholder="Enter project name"
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onKeyDown={handleKeyDown}
                      autoComplete="off" // Disable autocomplete
                    />
                  ) : (
                    <div
                      className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer flex items-center"
                      onClick={toggleInput}
                    >
                      {inputValue || "Enter project name"}{" "}
                      <FaCaretDown className="ml-2 absolute right-[5%]" />
                    </div>
                  )}
                </div>
              </div>
              {/* Upload button */}
              <div className="border-[#2B2B2B] border-b pb-4 mb-5 w-full px-2 md:px-0 lg:px-0">
                <label
                  htmlFor="inputField5"
                  className="block text-white font-semibold text-sm leading-[22.48px] pt-1 mb-3"
                >
                  Upload Document
                </label>
                <p className="text-[#858585] font-normal text-sm leading-[16.58px] mb-3 w-[85%]">
                  Kindly upload any documents or links that you might have about
                  your project or product.{" "}
                  <span className="text-white font-normal text-sm leading-[16.58px]">
                    Whitepaper, Gitbook, Pitch Deck, Excel Sheet, FAQ documents
                    and so on.
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
                  {!isUpload && (
                    <button
                      type="button"
                      className="w-[397px] h-[60px] flex justify-center items-center mt-2 font-[300px] text-sm leading-[22.68px] text-center rounded-[66px] bg-[#131313] px-[15px] border border-[#363636]"
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
                {uploadedFileName && (
                  <div className="flex items-center mt-5">
                    <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mr-1">
                      <FaCheck className="text-white w-[10px] h-[10px]" />
                    </div>
                    <p className="text-white font-normal text-sm leading-[14.58px] ml-2">
                      {uploadedFileName}
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
              {/* Ends here */}
              {/* Save button */}
              <div className="flex justify-center pt-5 mx-auto items-center">
                <button
                  className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[52px] md:h-10 lg:h-10 w-[325px] md:w-[153px] lg:w-[153px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
              {/* pop up message */}
              {showSuccessMessage && (
                <div className="absolute top-[10%] left-[25%] text-center mt-2 text-green-500">
                  <div className="bg-white w-[200px] h-auto p-2 rounded-[20px] ">
                    <p className="text-sm font-normal">Saved successfully!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectListings;
