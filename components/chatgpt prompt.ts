// i neeed you to further modify this code to the following
// 1. you are cutting out the first letter of my the response and that is letter D
// 2. when a user clicks on a card, i want it to go to the edit content section that is inside my editor to further edit it.
// this particular text editor
// <div className="w-[385px] h-[253px] border-[#363636] border mb-2">
//                   <TextEditor />
//                 </div>
// and this is the code for the text editor
// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";
// import { Quill } from "react-quill";
// import {
//   FaBold,
//   FaItalic,
//   FaUnderline,
//   FaImage,
//   FaSmile,
// } from "react-icons/fa";
// import { useState } from "react";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const CustomToolbar = () => (
//   <div id="toolbar">
//     <button className="ql-bold">
//       <FaBold />
//     </button>
//     <button className="ql-italic">
//       <FaItalic />
//     </button>
//     <button className="ql-underline">
//       <FaUnderline />
//     </button>
//     <button className="ql-image">
//       <FaImage />
//     </button>
//     <button className="ql-emoji">
//       <FaSmile />
//     </button>
//   </div>
// );

// const modules = {
//   toolbar: {
//     container: "#toolbar",
//     handlers: {
//       emoji: function (this: any) {
//         const emoji = prompt("Enter emoji:");
//         if (emoji) {
//           const range = this.quill.getSelection();
//           this.quill.insertText(range.index, emoji);
//         }
//       },
//     },
//   },
// };

// const formats = ["bold", "italic", "underline", "image"];

// const TextEditor: React.FC = () => {
//   const [value, setValue] = useState("");

//   return (
//     <div className="text-editor text-[#f9f9f9]">
//       <CustomToolbar />
//       <ReactQuill
//         value={value}
//         onChange={setValue}
//         modules={modules}
//         formats={formats}
//         placeholder="Write something awesome..."
//       />
//     </div>
//   );
// };

// export default TextEditor;
// so when the user sends the response he got to the editor there are two buttons one says schedule tweet and another says tweet now, when the user clicks on schedule tweet a calendar pops up for him to select a date he wants to schedule the tweet, after doing that that date and month he picked must reflect in this catrd, this is the card and the design for the card when he clicks on schedule button.
// this is the component for the schedule button
// import { scheduleTweet } from "@/utils/mockData";
// import { MdDeleteOutline } from "react-icons/md";
// import { GoPencil } from "react-icons/go";
// import { FaRegClock } from "react-icons/fa6";
// import React from "react";
// import TweetCard from "./TweetCard";

// const ScheduleTweet = () => {
//   {
//     /* <div className="pt-16 flex  justify-center">
//         <p className="font-semibold text-sm text-[14.56px]">
//           You do not have any scheduled tweet
//         </p>
//       </div>
//       <span className="font-normal text-xs leading-[12.48px] mx-auto text-center px-24 ">
//         Click on Schedule Button to start
//       </span> */
//   }

//   return (
//     <>
//       <div className="pt-10">
//         <div className="flex flex-col items-center justify-between gap-5">
//           {scheduleTweet.map((row, index) => (
//             <TweetCard
//               key={index}
//               tweet={row.tweet}
//               thread={row.thread}
//               span={row.span}
//               time={row.time}
//               spanTime={row.spanTime}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScheduleTweet;
// and this is where it was used
//  <Dialog>
//                     <DialogTrigger className="cursor-pointer" asChild>
//                       <Button className="w-[114px] h-[35px] p-[10px] border-[#575757] border rounded-[50px] font-medium text-xs leading-[12.48px]">
//                         Schedule
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
//                       <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
//                         <Calendar onSave={handleDateSave} />
//                       </div>
//                     </DialogContent>
//                   </Dialog>
// after succesfully scheduling a tweet
