"use client";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppStore } from "@/zustand/store";
import { SiBentobox } from "react-icons/si";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const FooterNav = () => {
  const pathname = usePathname();
  const show =
    pathname === "/dashboard" ||
    pathname === "/communityManager" ||
    pathname === "/trainAi" ||
    pathname === "/querySolving" ||
    pathname === "/workspace" ||
    pathname === "/workspaceDataMobile";

  const router = useRouter();
  const aiTrainCompleted = useAppStore((state) => state.aiTrainCompleted);
  return (
    <>
      {show && (
        <div className="bg-[#0B0F16] w-full h-[70px] fixed bottom-0 left-0 block md:hidden lg:hidden">
          <div className="flex justify-between p-6 items-center">
            <Link href="/">
              <FaHome className="text-[24px] text-[#707070]" />
            </Link>

            <Link href="/dashboard">
              <SiBentobox className="w-[24px] h-[24px] text-[#707070]" />
            </Link>

            <Dialog>
              <DialogTrigger>
                <MdOutlineSignalCellularAlt className="items-center w-[24px] h-[24px] text-[#707070]" />
              </DialogTrigger>
              <DialogContent className="px-8 border-none rounded-lg max-w-auto w-[380px] h-[257px] bg-[#181818]">
                {aiTrainCompleted ? (
                  <div className="mx-auto pt-8">
                    <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                      Welcome to Your Workspace
                    </h3>
                    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                      With your workspace, you can easily create announcements,
                      engage with your community, update projects, and simulate
                      actions seamlessly.
                    </p>
                    <button
                      onClick={() => router.push("/trainAi")}
                      className="bg-white items-center flex justify-center text-center 
            text-xs font-normal ring-offset-white focus-visible:outline-none
            text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
                    >
                      Get Started
                    </button>
                  </div>
                ) : (
                  <div className="mx-auto pt-8 text-center">
                    <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                      Access Restricted
                    </h3>
                    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                      Before you start using your community workspace, it&apos;s
                      important to train your AI. Discover the benefits of AI
                      training here.
                    </p>
                    <button
                      onClick={() => router.push("/workspace")}
                      className="bg-white items-center flex justify-center text-center 
            text-xs font-normal ring-offset-white focus-visible:outline-none
            text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
                    >
                      Train your AI now
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <Link href="">
              <Image
                src="/X.png"
                alt="Default Logo"
                width={24}
                height={24}
                className="items-center"
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterNav;
