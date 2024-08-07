// i want you to modify this code to do the following.
// i want to add the threads
// i want you to use this code has a refernce for what i want to acheive
// when i click on schedule button a dialog will pop up, use this code and the functionality for dialog
//  <Dialog open={openModal} onOpenChange={setOpenModal}>
//                       <DialogTrigger className="cursor-pointer" asChild>
//                         <Button
//                           className="w-[114px] h-[35px] p-[10px] border-[#575757] border rounded-[50px] font-medium text-xs leading-[12.48px]"
//                           onClick={() => setOpenModal(true)}
//                         >
//                           Schedule
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
//                         <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
//                           <Calendar2
//                             editorContent={editorContent}
//                             setProgress={setProgress}
//                             onSave={handleSave}
//                             onCloseModal={closeModal}
//                           />
//                         </div>
//                       </DialogContent>
//                     </Dialog>

// function for calendar that will call handleSave to add threads to the schedule tweet component.
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
// import "react-day-picker/dist/style.css";
// import Cookies from "js-cookie";
// import React, { useEffect, FC, useState } from "react";

// interface CalendarProps {
//   className?: string;
//   showOutsideDays?: boolean;
//   editorContent: string;
//   setProgress: (progress: number) => void; // Adjusted to accept a number parameter
//   onSave: () => void;
//   onCloseModal: () => void;
// }

// const Calendar2: FC<CalendarProps> = ({
//   className,
//   showOutsideDays = true,
//   editorContent,
//   onSave,
//   setProgress,
//   onCloseModal,
//   ...props
// }) => {
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date());
//   const [customContents, setCustomContents] = useState<object[]>([]);
//   const [isScheduling, setIsScheduling] = useState<boolean>(true); // Default to scheduling

//   const [currentMonth, setCurrentMonth] = useState<number>(
//     new Date().getMonth()
//   );
//   const [currentYear, setCurrentYear] = useState<number>(
//     new Date().getFullYear()
//   );
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   // const [editorContent, setEditorContent] = useState<string>("");

//   useEffect(() => {
//     // Sync selected date with current month and year
//     const newDate = new Date(currentYear, currentMonth, selectedDate.getDate());
//     setSelectedDate(newDate);
//   }, [currentMonth, currentYear]);

//   const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const newMonth = parseInt(event.target.value, 10);
//     setCurrentMonth(newMonth);
//   };

//   const handlePreviousMonth = () => {
//     let newYear = currentYear;
//     let newMonth = currentMonth - 1;
//     if (newMonth < 0) {
//       newMonth = 11;
//       newYear -= 1;
//     }
//     setCurrentMonth(newMonth);
//     setCurrentYear(newYear);
//   };

//   const handleNextMonth = () => {
//     let newYear = currentYear;
//     let newMonth = currentMonth + 1;
//     if (newMonth > 11) {
//       newMonth = 0;
//       newYear += 1;
//     }
//     setCurrentMonth(newMonth);
//     setCurrentYear(newYear);
//   };

//   const handleSelect: SelectSingleEventHandler = (day) => {
//     if (day) {
//       setSelectedDate(day);
//       setCurrentMonth(day.getMonth());
//       setCurrentYear(day.getFullYear());
//     }
//   };

//   const handleMonthUpdate = (month: Date) => {
//     setCurrentMonth(month.getMonth());
//     setCurrentYear(month.getFullYear());
//   };

//   const addEditorContent = (date: string, time: string, content: string) => {
//     // Retrieve the current value of the cookie
//     let currentContent = Cookies.get("tweetContents");
//     console.log("Current Cookie Content:", currentContent);

//     // Parse the current value into an array, or initialize a new array if the cookie does not exist
//     let contentArray = currentContent ? JSON.parse(currentContent) : [];

//     // Add the new editorContent object to the array
//     contentArray.push({
//       content: content,
//       time: time,
//       date: date,
//     });

//     // Convert the array back to a string
//     let updatedContent = JSON.stringify(contentArray);

//     // Save the updated array back to the cookie
//     Cookies.set("tweetContents", updatedContent, {
//       expires: 7,
//       path: "/x-Agents",
//       secure: true,
//     });
//     // console.log("Updated Cookie Content:", updatedContent);
//   };

//   const handleSave = () => {
//     setIsScheduling(true); // Set the mode to scheduling

//     const formattedDate = new Date().toDateString();
//     const currentTime = new Date().toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });

//     if (!editorContent) {
//       console.log("Editor content is empty");
//       return;
//     }

//     addEditorContent(formattedDate, currentTime, editorContent);
//     const tweetContents = [...customContents];
//     setCustomContents(tweetContents);
//     Cookies.set("tweetContents", JSON.stringify(tweetContents));
//     console.log("Custom Contents Cookie:", JSON.stringify(tweetContents));

//     // Close the modal immediately after saving
//     onSave();
//     onCloseModal();

//     // Set progress to 25% and start updating progress
//     setProgress(25);
//     setTimeout(() => {
//       setProgress(100); // Update progress to 100%
//     }, 1000);
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center pr-24 md:pr-6 lg:pr-6">
//         <div className="bg-[#181818] w-fit mt-5 rounded-[20px] pb-5">
//           <div className={`py-3 ${className}`}>
//             <div className="flex justify-center items-center mb-2 space-x-2">
//               <button
//                 onClick={handlePreviousMonth}
//                 className="h-7 w-7 text-xs font-normal bg-[transparent] p-0 opacity-50 hover:opacity-100"
//               >
//                 {/* <ChevronLeft className="h-4 w-4" /> */}
//               </button>
//               <select
//                 value={currentMonth}
//                 onChange={handleMonthChange}
//                 className="text-white bg-transparent text-sm font-normal"
//               >
//                 {Array.from({ length: 12 }, (_, i) => (
//                   <option className="" key={i} value={i}>
//                     {new Date(0, i).toLocaleString("default", {
//                       month: "long",
//                     })}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 onClick={handleNextMonth}
//                 className="h-7 w-7 text-xs font-normal bg-[transparent] p-0 opacity-50 hover:opacity-100"
//               >
//                 {/* <ChevronRight className="h-4 w-4" /> */}
//               </button>
//             </div>
//             <DayPicker
//               mode="single"
//               selected={selectedDate}
//               onSelect={handleSelect}
//               onMonthChange={handleMonthUpdate}
//               showOutsideDays={showOutsideDays}
//               className="custom-calendar"
//               month={new Date(currentYear, currentMonth)}
//               {...props}
//             />
//           </div>
//           <div className="flex justify-center gap-8 items-center">
//             <button
//               onClick={handleSave}
//               className="bg-white flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-black transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
//             >
//               Save
//             </button>

//             <button className="bg-[#292929] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs text-white">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Calendar2;
// function for handleThreads in the compose tab tab
//   const handleThreads = () => {
//     if (!userInput.trim()) return;

//     const maxThreadLength = 500; // Adjust this value as needed
//     const text = userInput.trim();
//     const threads = [];

//     for (let i = 0; i < text.length; i += maxThreadLength) {
//       const chunk = text.slice(i, i + maxThreadLength);
//       threads.push({
//         content: chunk,
//         count: threads.length + 1, // Count of the thread
//         countNum: `${i + 1}-${Math.min(i + maxThreadLength, text.length)}`,
//       });
//     }

//     // Update state or pass threads to the component that will display them
//     setThreadsContent(threads); // Assuming you have a state or method to update this
//   };
// this is the threads component where i am using it.
// import React, { useState } from "react";
// import Image from "next/image";
// import { Button } from "./ui/button";
// import { FaPlus } from "react-icons/fa6";
// import { CiImageOn } from "react-icons/ci";
// import { HiOutlineArrowPath } from "react-icons/hi2";
// import { MdDeleteOutline } from "react-icons/md";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import Calendar from "./Calendar2";
// import Calendar2 from "./Calendar2";

// interface Thread {
//   content: string;
//   count: number;
//   countNum: string;
// }

// interface ThreadsProps {
//   threadsContent: Thread[];
//   handleSave: () => void;
// }

// const Threads: React.FC<ThreadsProps> = ({ handleSave, threadsContent }) => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   return (
//     <>
//       <div className="pt-5">
//         <Image
//           src="/threads.png"
//           width={820}
//           height={610}
//           alt="threads-img"
//           className="hidden"
//         />

//         <div className="w-full h-auto">
//           <div className="w-full flex justify-between h-[58px] border-[#262626] border-b bg-[#131313] px-3">
//             <div className="flex justify-start items-center">
//               <h5 className="font-semibold text-[15.6px] leading-[15.6px]">
//                 Threads Content
//               </h5>
//             </div>
//             <div className="flex justify-end gap-5 items-center px-4">
//               <Button className="font-normal text-[15px] leading-[15.6px] text-[#A4A4A4]">
//                 Add to draft
//               </Button>
//               <Button className="font-normal text-[15px] leading-[15.6px] text-[#A4A4A4]">
//                 Schedule
//               </Button>
//               <Button
//                 className="w-[119px] h-[35px] rounded-[50px] font-medium text-sm bg-white leading-[14.56px] text-[#0D0D0D]"
//                 onClick={handleSave}
//               >
//                 Post Now
//               </Button>
//             </div>
//           </div>

//           <div className="flex flex-col gap-6 pt-5 px-3 w-full h-auto">
//             {threadsContent?.map((row, index) => (
//               <div key={index}>
//                 <p className="font-normal text-sm leading-[14.56px]">
//                   {row.content}
//                 </p>
//                 <div className="flex justify-start pt-5 items-center gap-4">
//                   <div className="flex gap-1 items-center">
//                     <span className="font-[300] text-[10px] text-xs text-[#BDFE1C]">
//                       {row.count}{" "}
//                     </span>
//                     <p className="font-[300] text-[10px] text-xs text-[#858585]">
//                       {row.countNum}
//                     </p>
//                   </div>
//                   <div className="flex justify-between items-center gap-2">
//                     <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
//                       <FaPlus className="w-[12px] h-[12px]" />
//                     </div>
//                     <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
//                       <CiImageOn className="w-[13px] h-[13px]" />
//                     </div>
//                     <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
//                       <HiOutlineArrowPath className="w-[13px] h-[13px]" />
//                     </div>
//                     <div className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]">
//                       <MdDeleteOutline className="w-[10.89px] h-[14px]" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Threads;
