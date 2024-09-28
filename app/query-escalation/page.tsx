import React from 'react'
import Image from "next/image";
import { greenBox } from '@/assets';
import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <>
    <div className="mx auto flex flex-col justify-center items-center pt-20">
<h2 className='font-normal text-[24px] leading-[32px] text-white mb-5'>No information here</h2>
<Image
width={136}
height={134.83}
src={greenBox}
alt=''
/>

<p className='text-[#707070] font-normal text-sm text-center pb-10 pt-5 w-[80%] md:w-full lg:w-full'>Once your community is set up, cases that the aI can’t assess would be pushed here</p>
<div className="">
    <Button className='w-[362px] h-[55px] bg-white py-1 px-2 text-[#0d0d0d] rounded-[66px]'>Integrate Communities</Button>
</div>
</div>
    </>
  )
}

export default Page