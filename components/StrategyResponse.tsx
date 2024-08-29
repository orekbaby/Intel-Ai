// "use client"
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import React, { useEffect } from 'react'
// import { FaRegClock } from 'react-icons/fa';
// import { IoBulbOutline } from 'react-icons/io5';
// import { MdOutlineContentCopy } from 'react-icons/md';
// import Calendar4 from './Calendar4';
// import Cookies from "js-cookie";

// const accordionData: AccordionData[] = [
//     {
//       id: 1,
//       title: "Teaser Post",
//       text: "Exciting news is on the horizon! 🚀 Stay tuned this week as we reveal something game-changing.Can you guess what it is? Drop your thoughts below! #TeaserTuesday #ComingSoon",
//     button: "my name is folakemi",
//     },
//     {
//       id: 2,
//       title: "Poll",
//       text: "We’re working on something special! Which aspect of [Your Product] are you most excited about?",
//       button: "my name is folakemi",
//     },
  
//     {
//       id: 3,
//       title: "Teaser",
//       text: "We’re working on something special! Which aspect of [Your Product] are you most excited about?",
//       button: "my name is folakemi",
//     },
  
//     {
//       id: 4,
//       title: "Poll",
//       text: "We’re working on something special! Which aspect of [Your Product] are you most excited about?",
//       button: "my name is folakemi",
//     },
//   ];
  
  
//   interface AccordionData {
//     id: number;
//     title: string;
//     text: string;
//     button:string;
    
//   }

// interface StrategyResponseProps {
//     showContent: boolean;
//     renderTextStatic: (text: string) => JSX.Element;
//     renderText: (text: string, index: number) => JSX.Element;
//     isReadMore: Record<number, boolean>;

//     openModal: boolean;
//     setOpenModal: (open: boolean) => void;
//     showCopyMessage: boolean;
//     copiedContent: string | null;
//     handleSave: () => void;
//     handleCopy: (text: string) => void;
//     closeModal: () => void;
// }


// const StrategyResponse: React.FC<StrategyResponseProps> = ({
//     showContent,
//     renderTextStatic,
//     renderText,
//     isReadMore,
//     openModal,
//     setOpenModal,
//     showCopyMessage,
//     copiedContent,
//     handleSave,
//     handleCopy,
//     closeModal,
// }) => {

//     useEffect(() => {
//         // Save each item's text to cookies
//         accordionData.forEach((item, index) => {
//           Cookies.set(`accordionText_${item.id}`, item.text);
//         });
//       }, []);

    
//   return (
//     <>
    
//     {showContent && (
//         <div className="space-y-4 pb-40 pt-16">
//           <h5 className="font-medium text-base leading-[16.64px] pb-2">Actionable Recommendations</h5>

//           {/* First row */}
//           <div className="bg-[#131313] p-4 rounded-md border border-[#262626]">
//             <div className="flex justify-start items-center gap-1 ">
//               <IoBulbOutline className="text-[#03FFA3]" />
//               <h3 className="text-white font-medium text-base leading-[16.64px] ">Rationale:</h3>
//             </div>

//             <div className="text-[#DEDEDE] mt-2 font-[300] text-sm leading-[14.56px] text-[#DEDEDE]">
//               {renderTextStatic(
//                 "To effectively build anticipation for the upcoming product launch, it's crucial to create a sense of excitement and community involvement. By strategically releasing teaser content and actively engaging with your community through polls and AMAs, you can generate buzz and gather valuable feedback that may help refine your launch approach."
//               )}
//             </div>
//           </div>

//           {/* Mapped Rows */}
//           {accordionData.map((item, index) => (
//             <div
//               key={item.id}
//               className={`${
//                 index === 0
//                   ? "bg-[#0d0d0d] border border-[#262626]"
//                   : index === 2
//                   ? "bg-[#0d0d0d] border border-[#262626]"
//                   : "bg-[#151515] border border-[#262626]"
//               } p-4 rounded-md`}
//             >
//               <div>
//                 <h3 className="text-white text-sm leading-[14.56px] font-semibold pb-3">
//                   {item.title}
//                 </h3>
//                 <h5 className="text-[13px] font-medium leading-[20.28px] text-left">
//                   Content Suggestion:
//                 </h5>
//                 <div className="text-[#DEDEDE] font-normal text-[13px] leading-[20.8px] text-left inline">
//                   {renderText(item.text, index)}
//                 </div>
//               </div>

//               {isReadMore[index] && (
//                 <div>
//                   <div className="flex justify-start gap-1 items-center pt-2">
//                     <span className="font-medium text-xs leading-[12.48px] text-[#BDBDBD]">
//                       Recommended Post Time
//                     </span>
//                     <div className="flex gap-1 w-[91px] items-center h-auto bg-[#131313] p-[3px] rounded-[12px] mr-4">
//                       <FaRegClock className="w-[6px] h-[6px]" />
//                       <p className="font-[300] text-[8px] leading-[12px] text-[#858585]">
//                         19/09/2024{" "}
//                         <span className="font-normal text-[8px] leading-[12px] text-white">
//                           10:00PM
//                         </span>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="pt-3 flex items-center gap-2">
//                   <Dialog open={openModal} onOpenChange={setOpenModal}>
//                   <DialogTrigger className="cursor-pointer" asChild>
//                     <button
//                       className="w-[187px] h-[29px] font-semibold text-xs leading-[12.48px] px-3 rounded-[24px] bg-white text-[#0d0d0d] border-[#E5E5E5] border"
//                     >
//                       Add to content calendar
//                     </button>
//                     </DialogTrigger>
//                       <DialogContent className="absolute top-[48%] right-[-80%] -translate-x-1/2 max-w-auto border-none outline-none px-6 md:px-4 lg:px-4 rounded-[20px]">
//                         <div className="w-full md:w-full lg:w-full h-[80vh] md:h-[80vh] lg:h-[80vh] overflow-y-auto scrollbar-hide border-b-transparent outline-0">
//                           <Calendar4 
//                          index={index}
//                          onSave={handleSave}
// onCloseModal={closeModal}
//                          accordionData={accordionData}

//                           />
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                     <div
//                       className="flex justify-center items-center bg-[#434343] rounded-md w-[25px] h-[25px]"
//                       onClick={() => handleCopy(item.text)}
//                     >
//                       <MdOutlineContentCopy className="w-[13px] h-[13px]" />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>


//       )}

//       {showCopyMessage && copiedContent && (
//         <div className="w-fit absolute bottom-[80%] right-[80%] bg-gradient-to-r from-[rgba(3,255,163,0.9)] to-[rgba(127,86,217,0.9)] h-auto p-[1px] rounded-lg">
//         <div
//           className=" w-full bg-[#0d0d0d] text-white rounded-md shadow-lg h-full py-2 px-2"
//         >
//           Message copied
//         </div>
//         </div>
//       )} 
//     </>
//   )
// }

// export default StrategyResponse