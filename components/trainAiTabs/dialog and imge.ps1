 <DialogContent className="px-8 md:w-full lg:w-full border-none rounded-lg max-w-auto w-[562px] h-[100vh] overflow-y-auto scrollbar-hide  absolute bg-[#0D0D0D] border-[#1B1B1B] border">
            <h5 className="font-semibold text-sm leading-[14.56px]">
              Partnership Announcement
            </h5>
            <p className="font-normal text-sm leading-[14.56px]">
             
            </p>
          </DialogContent>

           <div className="w-full hidden md:block lg:block">
              <Image
                src={row.integration}
                width={613.43}
                height={586}
                alt="bg-img"
                className="w-full h-auto"
              />
            </div>

              <div className="w-1/2 relative hidden md:block lg:block">
              <Image
                src={row.integration}
                width={613.43}
                height={586}
                alt="bg-img"
                className="object-cover w-full h-auto"
              />
            </div>

               <div className="w-1/2 relative hidden md:block lg:block">
              <Image
                src={row.integration}
                width={613.43}
                height={586}
                alt="bg-img"
                className="object-cover w-full h-auto"
              />
            </div>


              <Dialog>
                  <DialogTrigger>
                    <div
                      key={index}
                      className="flex flex-col mb-5 pb-5 border-[#1E1E1E] border-b"
                    >
                      <h5 className="font-semibold text-sm leading-[14.56px] mb-2">
                        {row.title}
                      </h5>
                      <p className="font-normal text-sm leading-[16.56px] text-[#4D4D4D]">
                        {row.content}
                      </p>
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className=" max-w-auto w-[562px] px-4 md:w-full lg:w-full
                   bg-[#0D0D0D] border-b border-[#1B1B1B] rounded-[20px]"
                  >
                    fuck you
                  </DialogContent>
                </Dialog>