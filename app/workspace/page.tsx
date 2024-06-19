"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="pl-16 w-full h-[100vh] overflow-y-auto scrollbar-hide mb-4">
        <section className="relative w-full h-[100vh] overflow-y-auto scrollbar-hide pb-5 dashboard-color">
          <div className="w-full  pl-8 pr-4 relative mb-0 md:mb-10 lg:mb-10 h-full">
            <div className="pt-5">
              <p className="font-medium text-[20px] mb-4">IntelAI Workspace</p>
              <div className="w-full flex justify-between gap-4 h-full">
                <div className="w-[40%] bg-[#181818] h-[840px] rounded-[20px]">
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

                  {/* my form documents */}
                  <div className="pl-6">
                    <form className="space-y-4 ">
                      <div className="border-[#2B2B2B] border-b pb-3 mb-6 w-full">
                        <label
                          htmlFor="inputField2"
                          className="block text-white font-semibold
                       text-sm leading-[22.48px] mb-3"
                        >
                          What is the name of your project?
                        </label>
                        <input
                          type="text"
                          id="inputField2"
                          className="custom-input mt-2 font-[300px] text-sm leading-[22.68px]"
                          placeholder="Metadapp"
                        />
                      </div>

                      {/* form with select */}
                      <div className="border-[#2B2B2B] border-b pb-3 mb-5 w-full">
                        <label
                          htmlFor="inputField2"
                          className="block text-white font-semibold text-sm leading-[22.48px] mb-3"
                        >
                          What is the category of your project?
                        </label>
                        <select
                          id="inputField2"
                          className="custom-input mt-2 font-[300px] text-sm leading-[22.68px] pr-4" // Added right padding here
                          defaultValue=""
                        >
                          <option className="" value="" disabled hidden>
                            Launchpad
                          </option>
                          <option value="launchpad">Launchpad</option>
                          <option value="marketing">Marketing</option>
                          <option value="development">Development</option>
                          <option value="design">Design</option>
                          <option value="finance">Finance</option>
                        </select>
                      </div>

                      {/* url website part */}

                      <div className="border-[#2B2B2B] border-b pb-3 pt-1 mb-5 w-full">
                        <label
                          htmlFor="inputField2"
                          className="block text-white font-semibold
                       text-sm leading-[22.48px] mb-3"
                        >
                          Add Website/URL
                        </label>
                        <input
                          type="text"
                          id="inputField2"
                          className="custom-input mt-2 font-[300px] text-sm leading-[22.68px]"
                          placeholder=""
                        />
                      </div>

                      {/* upload document  */}

                      <div className="border-[#2B2B2B] border-b pb-3 mb-5 w-full">
                        <label
                          htmlFor="inputField2"
                          className="block text-white font-semibold
                       text-sm leading-[22.48px] pt-1 mb-3"
                        >
                          Upload Document
                        </label>
                        <p className="text-[#858585] font-normal text-sm leading-[16.58px] w-[95%] mb-3">
                          Kindly upload a document that contains detailed
                          information about your project including Tokenomics,
                          FAQs etc. PDF version of your{" "}
                          <span className="text-white font-normal text-sm leading-[14.58px]">
                            Gitbook would be perfect.
                          </span>{" "}
                        </p>

                        <div
                          className="w-[397px] h-[60px] flex justify-center items-center mt-2 font-[300px] text-sm
                        leading-[22.68px] text-center rounded-[66px] bg-[#131313] px-[15px] border border-[#363636]"
                        >
                          <p className="font-normal leading-[10.4px] text-[10px] text-[#858585]">
                            Upload doc.{" "}
                            <span className="font-semibold leading-[10.4px] text-[10px] text-[#858585]">
                              PDF, GITBOOK, DOC
                            </span>
                          </p>
                        </div>
                      </div>

                      {/* submit button */}
                      <Link href="/workspaceData">
                        <div className="flex justify-center pt-5 mx-auto items-center">
                          <button className="bg-gradient-to-r from-[rgba(3,255,163,.9)] to-[rgba(127,86,217,.9)] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-white transition ease-in-out delay-150 duration-300 h-10 w-[153px] rounded-[24px] hover:bg-[#0B0F16] text-xs">
                            Submit
                          </button>
                        </div>
                      </Link>
                    </form>

                    {/* button */}
                  </div>
                </div>
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
    </>
  );
};

export default page;
