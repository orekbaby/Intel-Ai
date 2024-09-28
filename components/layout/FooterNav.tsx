"use client";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/combinedStore';
import { SiBentobox } from "react-icons/si";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { persona } from "@/config/mockData";

const FooterNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const showFooter =
    pathname === "/dashboard" ||
    pathname === "/community-manager" ||
    pathname === "/train-ai" ||
    pathname === "/querySolving" ||
    pathname === "/workspace" ||
    pathname === "/x-agents"
    || pathname === "/train-ai"
     || pathname === "/querychat-mobile";

  const selectedUser = useSelector((state: RootState) => state.user.selectedUser);
  const aiTrainCompleted = useSelector((state: RootState) => state.app.aiTrainCompleted);

  // Find current persona based on selected user
  const currentPersona = persona.find(p =>
    p.route === selectedUser ||
    (selectedUser === 'smartContractEngineer' && p.name === 'Smart Contract Engineer') ||
    (selectedUser === 'communityManager' && p.name === 'Community Workspace')
  );

  if (!currentPersona) return null; // Return null if no persona is found
  
  const handleButtonClick = () => {
    if (currentPersona.name === 'Community Workspace') {
      if (aiTrainCompleted) {
        router.push("/train-ai");
      } else {
        router.push("/workspace");
      }
    } else if (currentPersona.name === 'Smart Contract Engineer') {
      router.push("/smart-contract-engineer");
    }
  };

  return (
    <>
      {showFooter && (
        <div className="bg-[#0B0F16] w-full h-[70px] fixed bottom-0 left-0 block md:block lg:hidden">
          <div className="flex justify-between py-6 px-12 items-center">
            <Link href="/" prefetch={false}>
              <FaHome className="text-[24px] text-[#707070]" />
            </Link>

            <Link href="/dashboard" prefetch={false}>
              <SiBentobox className="w-[24px] h-[24px] text-[#707070]" />
            </Link>

            <Dialog>
  <DialogTrigger>
    <currentPersona.icon className="w-[24px] h-[24px] text-[#707070]" />
  </DialogTrigger>
  <DialogContent className="px-8 border-none rounded-lg max-w-auto w-[380px] h-[257px] bg-[#181818]">
    {currentPersona.name === 'Community Workspace' && !aiTrainCompleted ? (
    
   
      <div className="mx-auto pt-8 text-center">
        <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
          Access Restricted
        </h3>
        <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
          Before you start using your community workspace, it&apos;s important to train
          your AI. Discover the benefits of AI training here.
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-white items-center flex justify-center text-center 
          text-xs font-normal ring-offset-white focus-visible:outline-none
          text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
        >
          Train your AI now
        </button>
      </div>
       ) : (
   
    <div className="text-center">
      <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
        {currentPersona.name === "Smart Contract Engineer"
          ? "Welcome to Smart Contract Engineer"
          : "Welcome to Your Workspace"}
      </h3>
      <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
        {currentPersona.name === "Smart Contract Engineer"
          ? "As a Smart Contract Engineer, you can build and deploy contracts, simulate networks, and analyze blockchain data."
          : "With your workspace, you can easily create announcements, engage with your community, update projects, and simulate actions seamlessly."}
      </p>
      <button
        onClick={handleButtonClick}
        className="bg-white items-center flex justify-center text-center 
        text-xs font-normal ring-offset-white focus-visible:outline-none
        text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
      >
        {currentPersona.name === "Smart Contract Engineer"
          ? "Get Started with Contracts"
          : "Get Started"}
      </button>
    </div>
     )}
  </DialogContent>
</Dialog>
</div>
     </div>
      )}
    </>
  );
};

export default FooterNav;
