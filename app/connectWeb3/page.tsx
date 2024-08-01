"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

const Page = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };
  const router = useRouter();
  const [connect, setConnect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { open } = useWeb3Modal();
  const { isConnected, address: publicAddress } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (isConnected && publicAddress && connect) {
      setConnect(true);
      router.push("/user");
    }
  }, [isConnected, publicAddress, connect, router]);

  const handleConnectWallet = async (event: any) => {
    event.preventDefault();
    if (loading) return; // Prevent multiple clicks
    setLoading(true);
    try {
      await open({ view: "Connect" });
      setConnect(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = () => {
    disconnect();
  };

  return (
    <>
      <main className="mt-4 md:mt-20 lg:mt-44 mx-auto">
        <section className="first-gradient section relative w-full h-full z-10 mx-auto mb-60 ">
          {/* top gradient */}
          <div
            style={style2}
            className="top-[-50%] left-[-20%] absolute w-[30%] h-[130px] md:h-[500px] lg:h-[160px] translate-x-1/2 z-[-1]"
          ></div>

          {/* bottom styling */}
          <div
            style={style2}
            className="bottom-[-50%] right-0 absolute w-[40%] h-[130px] md:h-[500px] lg:h-[120px] translate-x-1/2 z-[-1]"
          ></div>

          {/* Back button */}
          <div className="mb-6 flex justify-start absolute top-[-40%] left-10">
            <Link href="logIn">
              <button className="flex items-center text-[#707070]">
                <FaArrowLeft className="mr-2 text-[#707070]" />
                Back
              </button>
            </Link>
          </div>

          <div className="w-full px-0 md:px-0 lg:px-6 relative mb-0 md:mb-10 lg:mb-10 h-full mx-auto">
            <div className="w-[270px] h-[311px] bg-[#131313] mx-auto rounded-[16px] mt-40 md:mt-0 lg:mt-0">
              <div className="border-b flex justify-center border-[#202020] pt-10 pb-2 px-10 mb-3">
                <Button onClick={handleConnectWallet} disabled={loading}>
                  {loading ? (
                    "Connecting..."
                  ) : (
                    <>
                      {isConnected ? (
                        <div className="flex items-center justify-center gap-3 rounded-[12px] border-2 px-4 py-2 border-[#1e1e1e] ">
                          <p className="font-medium text-sm text-white">
                            {`${publicAddress?.slice(
                              0,
                              8
                            )}...${publicAddress?.slice(-8)}`}
                          </p>
                        </div>
                      ) : (
                        "Connect Wallet"
                      )}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
