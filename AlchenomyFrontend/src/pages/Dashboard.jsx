import { ArrowUp, CogIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useWatchContractEvent } from "wagmi";
import coin from "../assets/coin.png";
import WithdrawForm from "../components/Withdraw";
import DepositForm from "../components/Deposit";
import ETH_ICON from "../assets/eth.png";
import CollateralSwap from "../components/CollateralSwap";
import IDRWEngineABI from "../abi/IDRWEngine.json";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [isWithdrawOpen, setOpenWithdraw] = useState(false);
  const [isDepositOpen, setOpenDeposit] = useState(false);
  const [isSwapOpen, setOpenSwap] = useState(false);
  const assets = ["ETH", "USDC", "USDT", "ETH", "USDC", "USDT", "ETH", "USDC", "USDT", "ETH", "USDC", "USDT"];
  const { address } = useAccount();

  // Replace with your contract address
  const IDRWEngineAddress = "0x4158cC4eAA6d0163197f9cBFb5EBd9d09B9cC045";

  // Listen for CollateralDeposited event
  useWatchContractEvent({
    address: IDRWEngineAddress,
    abi: IDRWEngineABI,
    eventName: "CollateralDeposited",
    listener(log) {
      const [user, collateral, amount] = log[0].args;
      if (user === address) {
        toast.success(`Collateral Deposited: ${amount} ${collateral}`);
        // Update UI or state here
      }
    },
  });

  // Listen for CollateralWithdrawn event
  useWatchContractEvent({
    address: IDRWEngineAddress,
    abi: IDRWEngineABI,
    eventName: "CollateralWithdrawn",
    listener(log) {
      const [user, collateral, amount] = log[0].args;
      if (user === address) {
        toast.success(`Collateral Withdrawn: ${amount} ${collateral}`);
        // Update UI or state here
      }
    },
  });

  // Listen for IDRWMinted event
  useWatchContractEvent({
    address: IDRWEngineAddress,
    abi: IDRWEngineABI,
    eventName: "IDRWMinted",
    listener(log) {
      const [user, amount] = log[0].args;
      if (user === address) {
        toast.success(`IDRW Minted: ${amount}`);
        // Update UI or state here
      }
    },
  });

  // Listen for IDRWRepaid event
  useWatchContractEvent({
    address: IDRWEngineAddress,
    abi: IDRWEngineABI,
    eventName: "IDRWRepaid",
    listener(log) {
      const [user, amount] = log[0].args;
      if (user === address) {
        toast.success(`IDRW Repaid: ${amount}`);
        // Update UI or state here
      }
    },
  });

  // Listen for CollateralSwitched event
  useWatchContractEvent({
    address: IDRWEngineAddress,
    abi: IDRWEngineABI,
    eventName: "CollateralSwitched",
    listener(log) {
      const [user, fromCollateral, toCollateral, amount] = log[0].args;
      if (user === address) {
        toast.success(`Collateral Switched: ${amount} from ${fromCollateral} to ${toCollateral}`);
        // Update UI or state here
      }
    },
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-body">
        <div className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-3">
          <header className="max-w-7xl mx-auto bg-[#00101D] text-white p-4 rounded-2xl shadow-xl border border-blue-950 flex justify-between items-center backdrop-blur-sm bg-opacity-95">
            <div className="text-xl font-semibold flex items-center gap-2">
              <CogIcon className="w-6 h-6" />
              <span>Alchenomy</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2">
              <ConnectButton />
            </div>
          </header>
        </div>

        {/* Welcome Section */}
        <div className="container mx-auto px-4 pt-36 pb-20">
          <div className="relative font-body">
            <div className="max-w-xl">
              <h1 className="text-4xl font-bold mb-4">Welcome</h1>
              <p className="text-gray-600 z-50">
                Try to deposit or borrow IDRW today and take control of your financial future
              </p>
            </div>
            <div className="absolute right-[-1em] top-[-10em]">
              <img
                src={coin}
                alt="Gold coin"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="space-y-3">
              <h1 className="font-bold">Total Borrowed</h1>
              <div className="p-6 bg-[#001524] text-white rounded-lg h-[250px] flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm"><CogIcon /></span>
                  <span>IDRW</span>
                </div>
                <div className="text-5xl font-semibold mb-2">2000 IDRW</div>
                <div className="text-gray-400 mb-4">~$2000</div>
                <div className="flex gap-2 mt-auto">
                  <button className="px-4 py-2 border border-white/20 rounded text-white text-sm">Borrow more</button>
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm">Repay Debt</button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="font-bold">Total Collateral</h1>
              <div className="p-6 bg-[#001524] text-white rounded-lg h-[250px] flex flex-col">
                <div className="text-5xl font-bold mb-2">$3000</div>
                <div className="text-gray-400 mb-4">~$3000</div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <ArrowUp className="h-4 w-4" />
                  <span>3.5%</span>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">ETH</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">USDC</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm">USDT</span>
                </div>
              </div>
            </div>

            <div className="md:sticky md:top-24 space-y-3">
              <h1 className="font-bold">Health Collateral Factor</h1>
              <div className="p-6 bg-[#001524] text-white rounded-lg">
                <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-green-400">
                  <div className="absolute top-0 aspect-square w-full rotate-[calc(72deg-45deg)] bg-gradient-to-tr from-transparent from-50% to-white to-50% transition-transform duration-500"></div>
                  <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-[#001524]"></div>
                  <div className="absolute bottom-0 truncate text-center leading-none space-y-3">
                    <p className="bg-green-300/20 text-green-600 p-2 rounded-full">Healthy</p>
                    <p className="text-5xl font-semibold">40%</p>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex justify-between text-sm mb-2">
                    <span>CURRENT ETH PRICE</span>
                    <span>$3000</span>
                  </div>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">Stable your Collateral</button>
                  <div className="text-center text-xs text-gray-400 mt-2">Powered by AI Agent</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 md:p-6 bg-white rounded-lg border border-gray-200 w-full md:w-8/12">
            <h2 className="text-xl font-semibold mb-4">Collateral Position</h2>
            <div className="overflow-x-auto -mx-4 md:mx-0">
              <div className="min-w-[720px] px-4 md:px-0">
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-gray-500 border-b border-gray-200">
                      <th className="text-left py-4 font-medium w-1/4">ASSETS</th>
                      <th className="text-left py-4 font-medium w-1/4">WALLET</th>
                      <th className="text-left py-4 font-medium w-1/4">DEPOSITED</th>
                      <th className="text-left py-4 font-medium w-1/4">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset) => (
                      <tr key={asset} className="border-b border-gray-200">
                        <td className="py-4">
                          <div className="flex items-center gap-2">
                            <img src={ETH_ICON} className="w-4 h-4" />
                            <span>{asset}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div>1.00</div>
                          <div className="text-sm text-gray-500">$3000</div>
                        </td>
                        <td className="py-4">
                          <div>1.00</div>
                          <div className="text-sm text-gray-500">$3000</div>
                        </td>
                        <td className="py-4">
                          <div className="flex gap-2">
                            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm" onClick={() => setOpenDeposit(!isDepositOpen)}>Deposit</button>
                            <button className="px-4 py-2 border rounded text-sm border-gray-200" onClick={() => setOpenSwap(!isSwapOpen)}>Switch</button>
                            <button className="px-4 py-2 border rounded text-sm border-gray-200" onClick={() => setOpenWithdraw(!isWithdrawOpen)}>Withdraw</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WithdrawForm isOpen={isWithdrawOpen} closeModal={setOpenWithdraw} />
      <DepositForm isOpen={isDepositOpen} closeModal={setOpenDeposit} />
      <CollateralSwap isOpen={isSwapOpen} closeModal={setOpenSwap} />
    </>
  );
}