 <div className=" w-full h-auto dashboard-color">
        <div className="w-full h-auto flex justify-between mb-0 md:mb-0 lg:mb-0 pr-10">
          <div className="w-[70%] h-[100vh] overflow-y-auto scrollbar-hide bg-blue-700">
            <div className="pt-5 pl-12">
              <div className="w-[150px] h-[35px] rounded-[25px] bg-[#1B1B1B] flex justify-center items-center mb-10">
                <p className="font-medium text-sm leading-[14.56px]">
                  Escalation Report
                </p>
              </div>

              <div className="flex justify-start gap-4 items-center">
                {escalationReport?.map((row, index) => (
                  <div key={index} className="">
                    <div className="w-[138px] h-[115px] rounded-[20px] bg-[#181818] flex flex-col pt-4 px-3">
                      <p className="font-medium text-xs leading-[12.48px] mb-5">
                        {row.title}
                      </p>
                      <p className="font-[300] text-[40px] leading-[41.6px]">
                        {row.number}
                      </p>
                      <div className="w-[21px] h-[10px] rounded-[2px] flex justify-center items-center bg-[#03FFA3] bg-opacity-[11%]">
                        <div className="flex justify-center items-center gap-1">
                          <p className="font-[500] text-[6px] text-[#76CA43]">
                            {row.percentage}
                          </p>
                          <FaArrowUp className="w-[5px] h-[3px] text-[#76CA43] rotate-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Tabs
                defaultValue="Unresolved"
                className="w-full pl-2 pr-3 md:pl-0 lg:pl-0 pt-5 md:pt-0 lg:pt-7 overflow-x-hidden"
              >
                <TabsList className="flex mt-0 mb-0 items-center justify-between md:justify-start lg:justify-start gap-0 md:gap-2 lg:gap-1 px-2 md:px-0 lg:px-0 border w-fit rounded-[24px] border-[#1C1C1C]">
                  <TabsTrigger
                    className=" w-full md:w-fit lg:w-[100px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                    value="Unresolved"
                  >
                    Unresolved
                  </TabsTrigger>
                  <TabsTrigger
                    className=" w-full md:w-fit lg:w-[90px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                    value="Resolved"
                  >
                    Resolved
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full md:w-fit lg:w-[53px] px-5 md:px-2 lg:px-2 bg-[#161616] text-[#666666] data-[state=active]:bg-white text-[9px] md:text-sm lg:text-sm gap-2 font-medium rounded-[24px]"
                    value="All"
                  >
                    All
                  </TabsTrigger>
                </TabsList>
                <TabsContent
                  className="w-full h-full pt-2 overflow-x-hidden"
                  value="Unresolved"
                >
                  <Unresolved
                    addQuery={addQuery}
                    resolveComment={handleResolveComment}
                  />
                </TabsContent>
                <TabsContent
                  className="w-full h-full pt-2 overflow-x-hidden"
                  value="Resolved"
                >
                  <Resolved />
                </TabsContent>
                <TabsContent
                  className="w-full h-full pt-2 overflow-x-hidden"
                  value="All"
                >
                  <All />
                </TabsContent>
              </Tabs>
            </div>

            {/* pagination  */}
            <div className="">
              <Pagination className="flex items-end justify-end">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                    <PaginationLink href="#">2</PaginationLink>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">8</PaginationLink>
                    <PaginationLink href="#">9</PaginationLink>
                    <PaginationLink href="#">10</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>

          <div className="relative h-[100vh] w-[30%] overflow-y-auto scrollbar-hide pr-4 bg-red-500 ">
            <p className="font-normal text-base leading-[16.64px] mb-4">
              Query Sorting Portal
            </p>
            <div className="w-full h-full overflow-y-auto scrollbar-hide overflow-x-hidden bg-[#181818] rounded-[20px] pb-5">
              <div className="w-[397px] flex justify-end px-6 items-center h-[65px] rounded-[20px] bg-[#252525]">
                <CiMenuKebab className="text-base text-[#767676]" />
              </div>
              <div
                className="p-4 overflow-y-auto"
                style={{ height: "calc(100% - 130px)" }}
              >
                <div className="flex flex-col gap-4">
                  {chatItems.map((item, index) => (
                    <div
                      key={index}
                      className={`flex justify-${
                        item.type === "query" ? "start" : "end"
                      } mb-8 relative pt-6 px-4`}
                    >
                      {item.type === "query" ? (
                        <div className="relative w-[375px] h-[69px] rounded-[20px] bg-[#2D2D2D] px-4 py-2">
                          <p className="font-normal text-xs leading-[12.84px] mb-1">
                            {item.content}
                          </p>
                          <div className="flex justify-end">
                            <p className="font-normal text-[10px] text-[#939393]">
                              {item.time}
                            </p>
                          </div>
                          <div
                            className="flex justify-center items-center bg-[#2D2D2D] border-[3px]
                            border-[#181818] w-[107px] h-[28px] rounded-[20px] py-4 absolute left-7 bottom-[-15%]"
                          >
                            <p className="font-normal text-xs">
                              {item.username}
                            </p>
                          </div>
                          <div className="absolute bottom-[-10%] left-0">
                            <Image
                              src={item.img}
                              width={28}
                              height={28}
                              alt="user-img"
                              className=""
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-[264px] h-[166px] rounded-[20px] bg-[#696969] px-3 py-4">
                          <p className="font-normal text-xs leading-[14.84px]">
                            {item.content}
                          </p>
                          {/* absolute section */}
                          <div className="flex gap-1 items-center absolute bottom-[5] left-[70%]">
                            <div className="">
                              <Image
                                src={item.img}
                                width={28}
                                height={28}
                                alt="user-img"
                                className=""
                              />
                            </div>
                            <div className="flex justify-center items-center bg-[#2D2D2D] border-[3px] border-[#181818] w-[57px] h-[28px] rounded-[20px]">
                              <p className="font-normal text-xs">
                                {item.responderName}
                                <span className="font-black text-xs text-[#03FFA3]">
                                  {item.responderSpan}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {showResolveButton && (
                <div className="mb-5 px-4">
                  <Button
                    className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-[25px] w-[133px] rounded-[24px] hover:bg-[#0B0F16] text-xs"
                    onClick={handleResolveComment}
                  >
                    Resolve comment
                    <FaArrowUp className="text-[10px] rotate-45" />
                  </Button>
                </div>
              )}
              {/* bg-[#181818] */}
              <div className=" bg-blue-400 pb-16  w-full h-fit bottom-0 right-0 flex justify-center items-center gap-2">
                <div className="">
                  <input
                    type="text"
                    id="inputField2"
                    className="text-input2 font-normal pt-1 text-sm leading-[14.56px] italic"
                    placeholder="Input the proper response here ...."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div
                  onClick={handleSendQuery}
                  className="w-[50px] h-[50px] rounded-full bg-[#03FFA3] flex justify-center items-center cursor-pointer"
                >
                  <CiPaperplane className="w-[26px] h-[30px] text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      // import React from "react";
// import Image from "next/image";

// const page = () => {
//   return (
//     <>
//       <main className="pt-48 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
//         <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide dashboard-color">
//           <div className="w-full px-60 max-w-auto text-center h-full ">
//             <h3 className="font-normal text-[32px] leading-[32px] pb-5">
//               No information here
//             </h3>
//             <div className="flex justify-center items-center pb-5">
//               <Image
//                 src="/moth.png"
//                 width={223.53}
//                 height={224.73}
//                 alt=""
//                 className=""
//               />
//             </div>
//             <div className="flex justify-center items-center">
//               <p className="font-normal text-sm leading-[16.8px] w-[308px]  text-center text-[#707070] pb-10">
//                 Once your community is set up, cases that the aI can’t assess
//                 would be pushed here
//               </p>
//             </div>

//             <button
//               className="bg-white items-center flex justify-center text-center
//                  text-xs font-normal md:font-medium lg:font-medium ring-offset-white focus-visible:outline-none
//                  text-[#0D0D0D] w-[84px] h-[26px] md:w-[153px] md:h-10 lg:w-[199px] lg:h-[40px] rounded-[66px] md:rounded-[20px] lg:rounded-[20px] mx-auto leading-[12.8px]"
//             >
//               Integrate community
//             </button>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default page;