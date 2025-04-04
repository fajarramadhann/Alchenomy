import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { manta, mantaTestnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Alchenomy',
  projectId: '44f1e32dd46e186440c47a6feeae0929',
  chains: [manta, mantaTestnet],
  ssr: "true",
});