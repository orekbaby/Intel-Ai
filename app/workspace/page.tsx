"use client";
import React, { useState } from "react";
import Image from "next/image";
import UrlInput from "@/components/UrlInput";
import InputField from "@/components/InputField";
import UploadFile from "@/components/UploadFile";
import InputCategory from "@/components/InputCategory";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [inputField, setInputField] = useState<string>("");

  const router = useRouter();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
    console.log("Category changed:", event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setUploadedFile(file);
    console.log("File changed:", file);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    console.log("URL changed:", event.target.value);
  };

  const handleInputChange = (value: string) => {
    setInputField(value);
    console.log("Input changed:", value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Logging all fields to debug
    console.log("Selected Category:", selectedCategory);
    console.log("Uploaded File:", uploadedFile);
    console.log("URL:", url);
    console.log("Input Field:", inputField);

    // Check if all required fields are filled
    if (selectedCategory && uploadedFile && url && inputField) {
      // Submit the form and navigate to the next page
      console.log("All fields are filled. Submitting the form...");
      router.push("/workspaceData");
    } else {
      // Alert only if not all fields are filled
      alert("Please fill out all required fields");
      console.log("Form submission failed. Missing fields:");
      if (!selectedCategory) console.log("Selected Category is missing");
      if (!uploadedFile) console.log("Uploaded File is missing");
      if (!url) console.log("URL is missing");
      if (!inputField) console.log("Input Field is missing");
    }
  };

  return (
    <main className="pl-16 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
      <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
        <div className="w-full pl-8 pr-4 relative mb-0 md:mb-10 lg:mb-10 h-full">
          <div className="pt-5">
            <p className="font-medium text-[20px] mb-4 pl-6">
              IntelAI Workspace
            </p>
            <div className="w-full flex justify-between gap-4 h-full px-4">
              {/* Input section */}
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
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <InputField
                      label="What is the name of your project?"
                      placeholder="Metadapp"
                      value={inputField}
                      onChange={handleInputChange}
                    />

                    <InputCategory
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    />
                    <UrlInput value={url} onChange={handleUrlChange} />
                    <UploadFile
                      value={uploadedFile}
                      onChange={handleFileChange}
                    />
                    <div className="flex justify-center pt-5 mx-auto items-center">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Image section */}
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
  );
};

export default Page;
