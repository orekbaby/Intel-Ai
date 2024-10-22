"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { http, createStorage, cookieStorage } from "wagmi";

import {
  Chain,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { mainnet, polygon, optimism, arbitrum, base, bsc } from "wagmi/chains";

const supportedChains: Chain[] = [
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
];

export const config = getDefaultConfig({
  appName: "Intel-Ai",
  projectId: "854b9ff9004e191b98db7a3d28c82bcb",
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {},
  ),
});
