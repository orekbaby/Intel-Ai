"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

// Functionality for input field
const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsFilled(event.target.value.trim() !== "");
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };
  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="border-[#2B2B2B] border-b pb-3 mb-6 w-full">
      <label
        htmlFor="inputField2"
        className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
      >
        {label}
      </label>
      <div className="flex items-center">
        {isFilled && !isEditing && (
          <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
            <FaCheck className="text-white w-[10px] h-[10px]" />
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            id="inputField2"
            className="custom-input mt-2 font-[300px] text-sm leading-[22.68px]"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
          />
        ) : (
          <div
            className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer "
            onMouseEnter={handleClick}
          >
            {inputValue || placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

const UrlInput: React.FC = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const validateUrl = (value: string) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" + // domain name or IP address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!urlPattern.test(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setError("");
    setIsValid(false);
  };

  const handleBlur = () => {
    if (validateUrl(url)) {
      setIsValid(true);
      setError("");
      setIsEditing(false);
    } else {
      setError("Please input a valid URL link");
      setIsValid(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleBlur();
    }
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="mb-5 w-full">
      <label
        htmlFor="inputField4"
        className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
      >
        Add Website/URL
      </label>
      <div className="flex items-center" onMouseEnter={handleClick}>
        {isValid && !isEditing && (
          <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-3 mr-2">
            <FaCheck className="text-white w-[10px] h-[10px]" />
          </div>
        )}
        {isEditing ? (
          <input
            type="text"
            id="inputField4"
            className="custom-input mt-2 font-[300px] text-sm leading-[22.68px] pr-10 bg-transparent"
            placeholder=""
            value={url}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
          />
        ) : (
          <div className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer">
            {url || "Add Website/URL"}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

const Page: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isUpload, setIsUpload] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isCategoryEditing, setIsCategoryEditing] = useState<boolean>(true);

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
          fileInputRef.current.value = ""; // Clear the input
        }
        setUploadedFileName(null);
        setIsUpload(false);
      } else {
        // Handle the file upload (e.g., upload the file to the server)
        console.log("File uploaded:", file);
        setUploadedFileName(file.name);
        setIsUpload(true);
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
      fileInputRef.current.value = ""; // Clear the input
    }
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    setIsCategoryEditing(false);
  };

  const handleCategoryMouseEnter = () => {
    setIsCategoryEditing(true);
  };

  return (
    <>
      <main className="pl-16 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
          <div className="w-full pl-8 pr-4 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <p className="font-medium text-[20px] mb-4 pl-6">
                IntelAI Workspace
              </p>
              <div className="w-full flex justify-between gap-4 h-full px-4">
                {/* first parts starts here */}
                <div className="w-[40%] bg-[#181818] h-auto rounded-[20px]">
                  <div className="w-[490px] h-[105px] bg-[#1B1B1B] rounded-[20px] p-4 mb-16">
                    <h3 className="font-medium text-sm text-[#f9f9f9] mb-4">
                      Provide Context
                    </h3>
                    <p className="font-normal text-sm text-[#858585] leading-[16.58px] w-full">
                      Providing more information about your community will help
                      the AI better understand your needs and provide more
                      accurate assistance.
                    </p>
                  </div>
                  <h4 className="font-normal text-sm text-[#D6D6D6] italic mb-5 pl-3">
                    UPLOAD DOCUMENTS
                  </h4>
                  <div className="pl-6">
                    <form className="space-y-4">
                      <InputField
                        label="What is the name of your project?"
                        placeholder="Metadapp"
                      />
                      {/* category section starts here */}
                      <div
                        className="border-[#2B2B2B] border-b pb-3 mb-6 w-full"
                        onMouseEnter={handleCategoryMouseEnter}
                      >
                        <label
                          htmlFor="inputField3"
                          className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
                        >
                          What is the category of your project?
                        </label>
                        <div className="flex items-center">
                          {selectedCategory && !isCategoryEditing && (
                            <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-2 mr-2">
                              <FaCheck className="text-white w-[10px] h-[10px]" />
                            </div>
                          )}
                          {isCategoryEditing ? (
                            <select
                              id="category"
                              value={selectedCategory}
                              onChange={handleCategoryChange}
                              className="text-white custom-input mt-2 font-[300px] text-sm leading-[22.68px] rounded p-2"
                              style={{ border: "none", outline: "none" }}
                            >
                              <option value="">Select a category </option>
                              <option value="launchpad">Launchpad</option>
                              <option value="Marketing">Marketing</option>
                              <option value="Development">Development</option>
                              <option value="Legal">Legal</option>
                            </select>
                          ) : (
                            <div className="text-white font-semibold text-sm leading-[22.48px] mt-2 cursor-pointer">
                              {selectedCategory}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* category section ends here */}
                      <UrlInput />
                      {/* upload file section starts here */}
                      <div className="border-[#2B2B2B] border-b pb-4 mb-5 w-full">
                        <label
                          htmlFor="inputField5"
                          className="block text-white font-semibold text-sm leading-[22.48px] pt-1 mb-3"
                        >
                          Upload Document
                        </label>
                        <p className="text-[#858585] font-normal text-sm leading-[16.58px] mb-3 w-[90%]">
                          Kindly upload a document that contains detailed
                          information about your project including Tokenomics,
                          FAQs etc. PDF version of your{" "}
                          <span className="text-white font-normal text-sm leading-[14.58px]">
                            Gitbook would be perfect.
                          </span>{" "}
                        </p>
                        <div className=" flex items-center gap-1">
                          {/* {isUpload && (
                            <div className="flex justify-center items-center w-[16px] h-[16px] rounded-full bg-[#4A6800] mt-6 mr-1">
                              <FaCheck className="text-white w-[10px] h-[10px]" />
                            </div>
                          )} */}
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
                            <p className="text-white font-normal text-sm leading-[14.58px]">
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
                      {/* upload file section ends here */}
                      <Link href="/workspaceData">
                        <div className="flex justify-center pt-5 mx-auto items-center">
                          <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs">
                            Submit
                          </button>
                        </div>
                      </Link>
                    </form>
                  </div>
                </div>
                {/* input section ends here */}
                <div className="w-[60%] bg-[#181818] rounded-[20px] h-[809px]">
                  <Image
                    src="/content-inside.png"
                    width={878}
                    height={809}
                    alt="content"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
