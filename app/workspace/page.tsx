"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import UrlInput from "@/components/UrlInput";
import InputField from "@/components/InputField";
import UploadFile from "@/components/UploadFile";
import InputCategory from "@/components/InputCategory";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelectedCategory } from "@/context/SelectedCategoryContext"; 
import { useUserInput } from "@/context//UserInputContext";
import { ContentInside } from "@/assets";
import { FiLoader } from "react-icons/fi";
import { useToast } from "@/components/ui/use-toast"

const Page: React.FC = () => {
 const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const { projectName, setProjectName } = useUserInput();
  const [inputField, setInputField] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { selectedCategory, setSelectedCategory } = useSelectedCategory();
  const [category, setCategory] = useState<string>("");
  
  useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = event.target.value;
    setCategory(newCategory);
    setSelectedCategory(newCategory); // Update context state as well
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setUploadedFile(file);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const { toast } = useToast() 

  const handleInputChange = (value: string) => {
    setProjectName(value); // Store the input in the context
  };

  const validateUrl = (value: string) => {
    try {
      const urlObj = new URL(value);
      const hasValidProtocol =
        urlObj.protocol === "http:" || urlObj.protocol === "https:";
      
      return hasValidProtocol;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    // Check if file, URL, inputField, and category are all present
    if (uploadedFile && url) {
      // Validate the URL
      if (validateUrl(url)) {
        setIsLoading(true); // Start loading state
  
        // Display the loading state for 3 seconds before routing
        setTimeout(() => {
          setIsLoading(false); // Stop loading
          
          // Check screen size and route accordingly
          if (window.innerWidth <= 768) {
            // Mobile screen
            router.push("/workspace-data-mobile");  // Route to mobile workspace
          } else {
            // Desktop screen
            router.push("/workspace-data");  // Route to desktop workspace
          }
        }, 3000);  // Wait 3 seconds before routing
  
      } else {
        // Show toast for invalid URL
        toast({
          variant: "destructive",
          description: "Please enter a valid URL.",
        });
      }
    } else {
      // Show toast for missing required fields
      toast({
        variant: "destructive",
        description: "Please fill out all required fields.",
      });
    }
  };
  
  

  return (
    <div className="pl-0 md:pl-4 lg:pl-16 xl:pl-20 zxl:pl-24 w-full h-[100vh] overflow-y-auto overflow-x-hidden scrollbar-hide mb-4">
      <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
        <div className="w-full pl-0 md:pl-2 lg:pl-8 xl:pl-10 2xl:pl-12 pr-0 md:pr-4 lg:pr-4 xl:pr-6 2xl:pr-8 relative mb-0 md:mb-10 lg:mb-10 h-full">
          <ToastContainer />
          {isLoading ? (
  <div className="absolute top-20 left-[20%] flex justify-center items-center">
      <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] mt-10">
        <div className="mx-auto">
          <FiLoader
          
            className="w-[80px] h-[80px] text-gray-600 mx-auto mb-5 pt-10 bg-[#181818]"
           
          />
          <h3 className="font-medium text-[20px] mx-auto text-center text-[#C1C1C1] leading-[24px] mb-3">
            Please wait.....
          </h3>
          <p className="font-medium text-center text-sm leading-[14.56px] mx-auto">
            Now Submitting your information.
          </p>
        </div>
      </div>
      </div>
    ) : (
          <div className="pt-5">
            <p className="font-medium text-base md:text-[20px] lg:text-[20px] xl:[20px] 2xl:[24px] mb-4 pl-6 md:pl-2 lg:pl-6">
              IntelAI Workspace
            </p>
            <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between gap-4 h-full px-4">
              {/* Input section */}
              <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[40%] 2xl:w-[45%] bg-[#181818] h-auto rounded-[20px]">
                <div className="w-full md:w-fit lg:w-fit h-auto bg-[#1B1B1B] rounded-[20px] p-4 mb-16">
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
                <div className="px-4 md:px-6 lg-px-6">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                  <InputCategory
                      value={category}
                      onChange={handleCategoryChange}
                    />

                    <InputField
                      label="What is the name of your project?"
                      placeholder="Write the name of your project"
                      value={projectName}
                      onChange={handleInputChange}
                    />

        <UrlInput value={url} onChange={handleUrlChange} />

                    <UploadFile
                      value={uploadedFile}
                      onChange={handleFileChange}
                    />

                    <div className="hidden md:flex lg:flex xl:flex 2xl:flex justify-center pt-3 items-center pb-16 md:pb-3 lg:pb-3 xl:pb-5 2xl:pb-5">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300  w-[370px] h-[52px] md:h-10 lg:h-10 xl:h-[43px] 2xl:h-[52px] md:w-[153px] lg:w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
                      >
                        Submit
                      </button>
                    </div>

                    <div className="flex md:hidden lg:hidden xl:hidden 2xl:hidden justify-center pt-3 items-center pb-16 md:pb-3 lg:pb-3 xl:pb-5 2xl:pb-5">
                    <button
  type="submit"
  className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 w-[370px] h-[52px] md:h-10 lg:h-10 xl:h-[43px] 2xl:h-[52px] md:w-[153px] lg:w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
>
  Submit
</button>

                    </div>
                  </form>
                </div>
              </div>
              {/* Image section */}
              <div className="hidden md:block lg:block w-full md:w-[50%] lg:w-[60%] bg-[#181818] rounded-[20px] h-[809px]">
                <Image
                  src={ContentInside}
                  width={878}
                  height={809}
                  alt="content"
                />
              </div>
            </div>
          </div>
    )}
        </div>
      </section>
    </div>
  );
};

export default Page;
