"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from '@/redux/combinedStore'; // Adjust import path as needed
import { connectWallet, disconnect } from '@/authSlice'; // Adjust import path as needed

const Page: React.FC = () => {
  const style2: React.CSSProperties = {
    background:
      "radial-gradient(circle, rgba(3, 255, 163, 0.2), rgba(16, 12, 14, 0.2))",
    backgroundBlendMode: "darken",
    filter: "blur(60px)",
  };
  
  const router = useRouter();
  const [connect, setConnect] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [relayConnected, setRelayConnected] = useState<boolean | null>(null); // null = unknown, false = failed, true = success
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Store specific error messages

  const { open } = useWeb3Modal();
  const { isConnected, address: publicAddress } = useAccount();
  const { disconnect: wagmiDisconnect } = useDisconnect();
  
  const dispatch: AppDispatch = useDispatch();
  const connectedAddress = useSelector((state: RootState) => state.auth.publicAddress);

  const checkWalletConnectRelay = async () => {
    try {
      const ws = new WebSocket('wss://relay.walletconnect.com');
      ws.onopen = () => {
        console.log('Connected to WalletConnect relay server');
        setRelayConnected(true);
      };
      ws.onerror = (error) => {
        console.error('WalletConnect relay server connection failed', error);
        setRelayConnected(false);
      };
    } catch (error) {
      console.error('An error occurred while trying to connect', error);
      setRelayConnected(false);
    }
  };

  useEffect(() => {
    checkWalletConnectRelay();
  }, []);

  useEffect(() => {
    if (isConnected && publicAddress && connect) {
      setConnect(true);
      dispatch(connectWallet(publicAddress));
      router.push("/user");
    } else if (connect && !isConnected) {
      setErrorMessage("Failed to connect wallet. Please try again.");
    }
  }, [isConnected, publicAddress, connect, router, dispatch]);

  const handleConnectWallet = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (loading) return; // Prevent multiple clicks
    setLoading(true);
    setErrorMessage(null); // Clear previous error messages
    try {
      await open({ view: "Connect" });
      setConnect(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("An error occurred during wallet connection. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = () => {
    dispatch(disconnect());
    wagmiDisconnect(); // Ensure the Wagmi disconnect is also called
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
                      {connectedAddress ? (
                        <div className="flex items-center justify-center gap-3 rounded-[12px] border-2 px-4 py-2 border-[#1e1e1e] ">
                          <p className="font-medium text-sm text-white">
                            {`${connectedAddress.slice(0, 8)}...${connectedAddress.slice(-8)}`}
                          </p>
                        </div>
                      ) : (
                        "Connect Wallet"
                      )}
                    </>
                  )}
                </Button>
              </div>
              {/* WalletConnect Relay Status */}
              <div className="mt-4 text-center">
                {relayConnected === false && (
                  <p className="text-red-500">Failed to connect to WalletConnect relay server.</p>
                )}
                {relayConnected === true && (
                  <p className="text-green-500">Connected to WalletConnect relay server.</p>
                )}
                {relayConnected === null && (
                  <p className="text-yellow-500">Checking WalletConnect relay server connection...</p>
                )}
              </div>
              {/* Display specific error messages */}
              {errorMessage && (
                <div className="mt-4 text-center">a
                  <p className="text-red-500">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
