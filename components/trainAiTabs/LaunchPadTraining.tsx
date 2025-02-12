"use client";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ApeTerminalTable from "../ApeTerminalTable";
import ProjectListings from "../ProjectListings";
import { Button } from "../ui/button";
import PreviouslyListed from "../PreviouslyListed";

const LaunchPadTraining = () => {
  const renderContent = () => {
    switch (selectedOption) {
      case 'Upcoming Project Listings':
        return <ProjectListings onClose={handleClose}/>;
      case 'Update Previously Listed Projects':
        return <PreviouslyListed />;
     default:
        return null;
    }
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value); // Update selected option
  };


  const [selectedOption, setSelectedOption] = useState('Upcoming Project Listings');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
    <div className="w-full h-auto mx-auto px-0 md:px-0 lg:px-10 overflow-x-hidden">
      <h2 className="font-medium text-[20px] md:text-[27px] lg:text-[27px] leading-[33.28px] md:leading-[37.44px] lg:leading-[37.44px] pt-5 md:pt-10 lg:pt-10 mb-7 text-center px-4 md:px-0 lg:px-0 w-[100%] md:w-full lg:w-full">
        What’s new with your launchpad projects?
      </h2>

      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-2 md:gap-8 lg:gap-8 mb-5 md:mb-10 lg:mb-10">
      <div className="block md:hidden lg:hidden w-full">
        <select
          className="w-[60%] h-[50px] rounded-[200px] border border-white bg-[#181818] text-sm text-white font-medium px-4"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="Upcoming Project Listings">Upcoming Project Listings</option>
          <option value="Update Previously Listed Projects">Update Previously Listed Projects</option>
          
        </select>
      </div>
       
        <Dialog>
          <DialogTrigger
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="hidden md:block lg:block bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[200px] py-[2px] px-[2px] mb-5 md:mb-10 lg:mb-10 xl:mb-12 2xl:mb-10 mt-10 shadow-drop">
              <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 
              dark:text-secondary
               text-white transition ease-in-out delay-150 duration-300 h-[76px] md:h-[50px] lg:h-[50px] w-[354px] md:w-[266px] lg:w-[266px] rounded-[200px] hover:bg-[#0B0F16]">
                Upcoming Project Listings
              </button>
            </div>
          </DialogTrigger>
          {isOpen && (
            <DialogContent className="absolute top-[60%] max-w-auto w-[420px] md:w-[460px] lg:w-[460px] px-4 bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]">
              <div className="w-full md:w-full lg:w-full h-[400px] md:h-full lg:h-[90vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                <ProjectListings onClose={handleClose} />
              </div>
            </DialogContent>
          )}
        </Dialog>

        <Dialog>
          <DialogTrigger className="cursor-pointer" asChild>
            <Button className="hidden md:flex lg:flex items-center justify-center text-center font-medium text-sm leading-[14.56px] h-[76px] md:h-[50px] lg:h-[50px] w-[354px] md:w-[266px] lg:w-[266px] rounded-[200px] border border-[#202020] bg-[#181818]">
              Update Previously Listed Projects
            </Button>
          </DialogTrigger>
          <DialogContent className="absolute bottom-[5%] h-auto px-3 md:px-0 lg:px-0 w-[420px] md:w-[486px] lg:w-[486px] bg-[#131313] border-b border-[#131313] rounded-[20px] overflow-x-hidden">
            <div className="w-full md:w-full lg:w-full h-auto overflow-y-auto scrollbar-hide border-b-transparent outline-0">
              <PreviouslyListed />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="block md:hidden lg:hidden mb-10" >
        {selectedOption === 'Upcoming Project Listings' && (
          <Dialog>
            <DialogTrigger className="cursor-pointer" asChild>
            <div className="block md:hidden lg:hidden bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[200px] py-[2px] px-[2px] mb-5 md:mb-10 lg:mb-10 xl:mb-12 2xl:mb-10 mt-10 shadow-drop">
              <Button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 
              dark:text-secondary
               text-white transition ease-in-out delay-150 duration-300 h-[53px] md:h-[50px] lg:h-[50px] w-[354px] md:w-[266px] lg:w-[266px] rounded-[200px] hover:bg-[#0B0F16]">
                {selectedOption}
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[56%] max-w-auto w-[420px] px-6 bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]">
              <div className="w-full h-[80vh] overflow-y-auto overflow-hidden scrollbar-hide border-b-transparent outline-0">
                <ProjectListings  onClose={handleClose} />
              </div>
            </DialogContent>
          </Dialog>
        )}
        {selectedOption === 'Update Previously Listed Projects' && (
          <Dialog>
            <DialogTrigger className="cursor-pointer" asChild>
            <div className="block md:hidden lg:hidden bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] rounded-[200px] py-[2px] px-[2px] mb-5 md:mb-10 lg:mb-10 xl:mb-12 2xl:mb-10 mt-10 shadow-drop">
              <button className="bg-gradient-to-r from-[#3A3A3A] to-[#000000] flex gap-2 items-center justify-center text-sm font-medium ring-offset-white focus-visible:outline-none focus-visible:ring-2 
              focus-visible:ring-neutral-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 
              dark:text-secondary
               text-white transition ease-in-out delay-150 duration-300 h-[76px] md:h-[50px] lg:h-[50px] w-[354px] md:w-[266px] lg:w-[266px] rounded-[200px] hover:bg-[#0B0F16]">
              {selectedOption}
              </button>
            </div>
            </DialogTrigger>
            <DialogContent className="absolute top-[56%] max-w-auto w-[420px] px-6 bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]">
              <div className="w-full h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
                <PreviouslyListed />
              </div>
            </DialogContent>
          </Dialog>
        )}
        
        </div>
    </div>
<div className="text-left">
        <p className="font-medium text-[18px] leading-[13px] mb-5">
          Training History
        </p>

        <p className="font-normal text-sm leading-[13px] text-[#929292] mb-3">
          Recent Training
        </p>
      </div>
      <div className="mx-auto">
        <ApeTerminalTable />
      </div>
     </>

  );
};

export default LaunchPadTraining;
