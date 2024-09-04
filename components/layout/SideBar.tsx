"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/combinedStore'; // Adjust import paths as needed
import Image from "next/image";
import { Button } from "../ui/button";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiBentobox } from "react-icons/si";
import { usePathname } from "next/navigation";
import { IoCopyOutline } from "react-icons/io5";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { GoPeople } from "react-icons/go";
import { RiCodeSSlashFill } from "react-icons/ri";


interface SidebarItem {
  id: number;
  img: React.ElementType | string; // Change the type of img to React.ElementType | string
  alt: string;
  name: string;
  link: string;
}

const SideBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  // mockdata

  const sideBar: SidebarItem[] = [
    {
      id: 0,
      img: SiBentobox,
      name: "Dashboard",
      alt: "dashboardicon",
      link: "/dashboard",
    },
    {
      id: 1,
      img: GoPeople,
      name: "Community Workspace",
      alt: "workspace-img",
      link: "/trainAi",
    },
    // {
    //   id: 2,
    //   img: "/X.png",
    //   name: "X Agents",
    //   alt: "x-img",
    //   link: "/x-Agents",
    // },
  //   {
  //     id: 3,
  //     img: "/tag.png",
  //     name: "",
  //     alt: "wallet-img",
  //     link: "",
  //   },
  //   {
  //     id: 4,
  //     img: CgProfile,
  //     name: "Profile",
  //     alt: "copy-img",
  //     link: "",
  //   },
  ];

  const pathName = usePathname();
  const show =
    pathName === "/dashboard" ||
    pathName === "/communityManager" 
   
  // workspace sidebar
  const block =
    pathName === "/workspace" ||
    pathName === "/workspaceData" ||
    pathName === "/trainAi" ||
    pathName === "/x-Agents" || pathName === "/smartContractEngineer";
    

  //  pathName === "/communityManager" ||
  //  pathName === "/trainAi";

  const router = useRouter();
  const aiTrainCompleted = useSelector((state: RootState) => state.app.aiTrainCompleted);


  const textToCopy = "0x35b...a36b";
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch(() => {
        // Handle error if necessary
      });
  };
  
  const [userSelect, setUserSelect] = useState<string | undefined>(undefined);
  const isSmartContractEngineer = userSelect === "smartContractEngineer";
  const isCommunityManager = userSelect === "communityManager";
  // const IconComponent = isSmartContractEngineer ? RiCodeSSlashFill : GoPeople;


  const displayName = isSmartContractEngineer
  ? "Smart Contract Engineer"
  : isCommunityManager
  ? "Community Workspace"
  : "Unknown Persona"; // Fallback name in case neither is selected

const route = isSmartContractEngineer
  ? "/smartContractEngineer"
  : isCommunityManager
  ? "/trainAi"
  : "/"; // Fallback route in case neither is selected

const IconComponent = isSmartContractEngineer
  ? RiCodeSSlashFill
  : isCommunityManager
  ? GoPeople
  : null; // Fallback to null in case neither is selected

useEffect(() => {
  const selectedUser = Cookies.get("user");
  console.log("Sidebar Cookie Value:", selectedUser); // This should log the correct value
  setUserSelect(selectedUser);
}, []);

  return (
    <>
      {/* sidebar for Workspace */}
      {block && (
  <div className="z-50 hidden md:block lg:block fixed">
    <div
      className={`absolute z-1 top-0 left-0 min-h-screen bg-[#0D0D0D] py-3 border-r border-[#363636] transition-width duration-1000 px-4 bg shadow-md ${
        isHovered ? "w-72" : "w-[100px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <Image
        src="/setings.png"
        alt="Default Logo"
        width={28}
        height={28}
        className="mb-10 items-center"
      />

      <div
        className={`hidden md:flex lg:flex flex-col gap-10 items-start border-[#101720] w-full`}
      >
        {/* first icon */}
        {sideBar
          .filter((data) => data.id === 0)
          .map((data) => (
            <Link
              className="flex items-center gap-3 p-2"
              href={data.link}
              prefetch={false}
              key={data.id}
            >
              {/* Render the icon directly if it's a React icon */}
              {typeof data.img !== "string" && <data.img size={14} />}
              {/* Render image if it's a string */}
              {typeof data.img === "string" && (
                <Image
                  src={data.img}
                  alt={data.alt}
                  width={14}
                  height={14}
                />
              )}
              <h2
                className={`font-medium text-sm ${
                  !isHovered && "hidden"
                }`}
              >
                {data.name}
              </h2>
            </Link>
          ))}

        {/* 1st and 2nd together icon */}
        <div className="w-full h-auto flex flex-col py-5 border-b-2 border-[#212E40]">
  {sideBar
    .filter((data) => data.id === 1 || data.id === 2)
    .map((data) => {
      // Safely get the IconComponent
      const IconComponent = data.img || null;
      
      return (
        <div key={data.id} className="flex items-center gap-3 p-2">
          {data.id === 1 ? (
            <Dialog>
              <DialogTrigger className="cursor-pointer flex items-center gap-3">
                <div className="flex gap-2">
                  {IconComponent && (
                    <IconComponent
                      className="w-[20px] h-[20px] text-[#707070]"
                      size={20}
                      style={{ color: "#707070" }}
                    />
                  )}
                  <p
                    className={`font-normal text-sm leading-[14px] text-[#707070] ${
                      !isHovered && "hidden"
                    }`}
                  >
                    {displayName}
                  </p>
                </div>
              </DialogTrigger>

              <DialogContent className="px-8 border-none rounded-lg max-w-auto w-[380px] h-[257px] bg-[#181818]">
                {isSmartContractEngineer ? (
                  <div className="mx-auto pt-8">
                    <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                      Smart Contract Engineer
                    </h3>
                    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                      Welcome to the Smart Contract Engineer workspace. Here, you can manage, develop, and deploy smart contracts efficiently.
                    </p>
                    <button
                      onClick={() => router.push(route)} // Dynamic routing
                      className="bg-white items-center flex justify-center text-center 
                      text-xs font-normal ring-offset-white focus-visible:outline-none
                      text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
                    >
                      Get Started
                    </button>
                  </div>
                ) : (
                  <div className="mx-auto pt-8">
                    <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                      Welcome to Your Community Workspace
                    </h3>
                    <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                      With your workspace, you can easily create announcements, engage with your community, update projects, and simulate actions seamlessly.
                    </p>
                    <button
                      onClick={() => router.push(route)} // Dynamic routing
                      className="bg-white items-center flex justify-center text-center 
                      text-xs font-normal ring-offset-white focus-visible:outline-none
                      text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
                    >
                      Get Started
                    </button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ) : (
            <Link
              href={data.link}
              prefetch={false}
              className="flex items-center gap-3"
            >
              {IconComponent && (
                <IconComponent
                  size={14}
                  style={{
                    color: "#707070",
                    borderColor: "#707070",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                />
              )}
              <h2
                className={`font-medium text-sm text-[#707070] ${
                  !isHovered && "hidden"
                }`}
              >
                {data.name}
              </h2>
            </Link>
          )}
        </div>
      );
    })}
</div>


        
        <div className="w-full h-auto flex flex-col py-5">
          {sideBar
            .filter((data) => data.id === 3 || data.id === 4)
            .map((data, index, arr) => (
              <Link
                className="flex items-center gap-3 mb-5 p-2"
                href={data.link}
                prefetch={false}
                key={data.id}
              >
                {/* Render the icon directly if it's a React icon */}
                {typeof data.img !== "string" && (
                  <data.img
                    size={14}
                    style={
                      index === arr.length - 1
                        ? { color: "#707070" }
                        : {}
                    }
                  />
                )}
                <h2
                  className={`font-medium text-sm text-[#707070] ${
                    !isHovered && "hidden"
                  }`}
                >
                  {data.name}
                </h2>
              </Link>
            ))}
        </div>
      </div>

      {/* bottom wallet */}
      <div className="mt-60 flex justify-center items-center w-[53px] h-[40px] border border-[#131313] bg-[#141414] rounded-[10px]">
        <div className="flex gap-1 justify-start items-center py-2 px-2">
          <div>
            <Image
              src="/profile.png"
              width={20}
              height={20}
              alt="profile"
              className=""
            />
          </div>
          <p className="hidden font-normal text-sm leading">
            0x35b...a36b
          </p>
          <FaPlus className="w-[10px] h-[10px] text-[#C8C8C8]" />
        </div>
      </div>
    </div>
  </div>
)}


      {/* sidebar for dashboard */}
      {show && (
        <div className="hidden md:block lg:block absolute top-0 left-0 w-[290px] h-[100vh] border-[#363636] border px-12 z-40">
          <div className="flex justify-center items-center w-full h-auto mb-20 pb-5 border-b border-[#363636]">
            <Image
              src="/Logo.png"
              width={99}
              height={40}
              alt="logo"
              className="pt-5"
            />
          </div>

          <Link href="/dashboard">
            <div
              className="flex gap-2 mb-10 cursor-pointer"
              onClick={() => console.log("Dashboard clicked")}
            >
              <SiBentobox className="w-[14px] h-[14px]" />
              <p className="font-normal text-sm leading-[10px]">Dashboard</p>
            </div>
          </Link>

          <div className="flex gap-2 mb-10">
      <div className="w-[14px] h-[14px] flex justify-center text-center items-center">
        {IconComponent && (
          <IconComponent className="w-[20px] h-[20px] text-[#707070]" /> // Dynamic icon
        )}
      </div>
      <Dialog>
        <DialogTrigger className="cursor-pointer">
          <p className="font-normal text-sm leading-[14px] text-[#707070]">
            {displayName} {/* Dynamic display name based on user selection */}
          </p>
        </DialogTrigger>

        <DialogContent className="px-8 border-none rounded-lg max-w-auto w-[380px] h-[257px] bg-[#181818]">
          {isSmartContractEngineer ? (
            // Smart Contract Engineer specific content
            <div className="mx-auto pt-8">
              <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                Smart Contract Engineer
              </h3>
              <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                Welcome to the Smart Contract Engineer workspace. Here, you can
                manage, develop, and deploy smart contracts efficiently.
              </p>
              <button
                onClick={() => router.push(route)} // Dynamic routing for Smart Contract Engineer
                className="bg-white items-center flex justify-center text-center 
                text-xs font-normal ring-offset-white focus-visible:outline-none
                text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
              >
                Get Started
              </button>
            </div>
          ) : isCommunityManager ? (
            // Community Workspace specific content
            <div className="mx-auto pt-8">
              <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                Welcome to Your Community Workspace
              </h3>
              <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                With your workspace, you can easily create announcements, engage
                with your community, update projects, and simulate actions
                seamlessly.
              </p>
              <button
                onClick={() => router.push(route)} // Dynamic routing for Community Workspace
                className="bg-white items-center flex justify-center text-center 
                text-xs font-normal ring-offset-white focus-visible:outline-none
                text-[#0D0D0D] h-10 w-[153px] rounded-[66px] mx-auto shadow-drop2"
              >
                Get Started
              </button>
            </div>
          ) : (
            // Fallback content if neither persona is selected
            <div className="mx-auto pt-8">
              <h3 className="font-medium text-center text-[20px] leading-[24px] w-full mx-auto mb-4">
                Persona Not Selected
              </h3>
              <p className="font-medium text-sm mx-auto text-center text-[#C1C1C1] w-full mb-6">
                Please select a persona to continue.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>

          {/* <div className="flex justify-between mb-10"> */}
            {/* <div className="flex gap-2 items-center">
              <div>
                <Image src="/X.png" width={11} height={11} alt="twitter" />
              </div>
              <p className="font-normal text-sm leading-[14px] text-[#707070]">
                X Agents
              </p>
            </div> */}
            {/* <div className="w-[22px] h-[22px] flex text-center items-center justify-center rounded-full bg-[#03FFA3] text-[#131313]">
              3
            </div> */}
          {/* </div> */}

          <div className="flex items-center gap-2 mb-52">
            <p className="font-normal text-sm leading-[14px] text-[#707070]">
              DEPIN
            </p>
            <Button className="cursor-pointer font-normal text-xs bg-gradient-to-r from-[#03FFA3] to-[#7F56D9] w-[91px] h-[20px] text-center rounded-[20px] py-3 px-10 shadow-drop leading-[12px]">
              Coming Soon
            </Button>
          </div>

          <div className="flex justify-between w-full items-center h-auto border border-[#131313] bg-[#141414] rounded-[24px] pr-2 relative">
            <div className="flex gap-2 justify-start items-center py-2 px-4">
              <div>
                <Image
                  src="/profile.png"
                  width={20}
                  height={20}
                  alt="profile"
                  className="rounded-[50px]"
                />
              </div>
              <p className="font-normal text-sm leading">{textToCopy}</p>
              <IoCopyOutline
                className="w-[16px] h-[16px] cursor-pointer"
                onClick={handleCopyClick}
              />
            </div>
            <FaPlus className="w-[20px] h-[10px] text-[#C8C8C8]" />
            {showPopup && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded-[12px]">
                Text copied!
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
