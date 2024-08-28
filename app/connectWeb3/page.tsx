"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/user');
  };

  return (
    <div className="flex justify-center items-center pt-40">
      <button
        onClick={handleClick}
        className="flex items-center justify-center text-base font-semibold text-white bg-[#0D0D0D] border border-[#3A3939] rounded-[24px] px-6 py-3 hover:bg-[#1A1A1A] transition duration-300"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default Page;
