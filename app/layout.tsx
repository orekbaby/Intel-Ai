import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "@/components/layout/Navigation";
import SideBar from "@/components/layout/SideBar";
import FooterNav from "@/components/layout/FooterNav";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import ClientProviders from '@/components/ClientProviders'; // Import your client-side providers

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className="font-guaruja">
      <ClientProviders initialState={initialState}>
        <div className="flex w-full h-auto relative">
          <SideBar />
          <div className="relative w-full h-auto">
            <Navigation />
            <div className="scrollbar-hide overflow-y-auto h-[100vh] w-full overflow-x-hidden pt-20">

      {children}
             
            </div>
            <FooterNav />
          </div>
        </div>
         </ClientProviders>
      </body>
    </html>
  );
}
