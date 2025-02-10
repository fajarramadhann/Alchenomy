import { useState } from "react"
import ETH_ICON from "../assets/eth.png"
import SuccessModal from "./Success"
import { ArrowDownUp, ChevronsUpDown } from "lucide-react";
export default function CollateralSwap({ isOpen, closeModal }) {
    const [isSwitched, switchToken] = useState(false)
    const [isSuccess, setSuccess] = useState(false);
    return (
        <>
            <SuccessModal isOpen={isSuccess} closeModal={setSuccess} />
            <>{isOpen && (
                <div className="fixed top-0 w-full bg-black/20 h-screen">
                    <div className="flex items-center justify-center font-body h-full">
                        <div className="w-11/12 md:w-5/12 bg-white rounded-2xl p-4 shadow-lg">
                            <h1 className="text-xl font-semibold mb-6">Switch Collateral</h1>
                            <div className="bg-gray-50 p-6 relative rounded-t-xl">
                                <div className="text-sm text-gray-500 mb-2">CURRENT COLLATERAL</div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                            <img
                                                src={ETH_ICON}
                                                alt="ETH icon"
                                                className="w-5 h-5"
                                            />
                                        </div>
                                        <span className="font-medium">ETH</span>
                                    </div>
                                    <div className="text-right">
                                        <input className="text-lg font-semibold text-right" placeholder="Your ETH..." />
                                        <div className="text-sm text-gray-500">~$3000</div>
                                    </div>
                                </div>
                            </div>

                            {/* Swap Icon */}
                            <div className="relative h-0">
                                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10" onClick={() => switchToken(!isSwitched)}>
                                    <ArrowDownUp className={`transition-transform duration-300 text-white ${isSwitched ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                            </div>

                            {/* New Collateral - Dark Section */}
                            <div className="bg-black p-6 rounded-b-xl">
                                <div className="text-gray-400 text-sm mb-2">NEW COLLATERAL</div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                                            <img
                                                src={ETH_ICON}
                                                alt="USDC icon"
                                                className="w-5 h-5"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-white font-medium">USDC</span>
                                            <ChevronsUpDown className="text-white"/>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-medium">3000 USDC</div>
                                        <div className="text-sm text-gray-400">~$3000</div>
                                    </div>
                                </div>
                            </div>
                            {/* Withdraw Button */}
                            <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors" onClick={() => {
                                setSuccess(true)
                                setTimeout(() => closeModal(false))
                            }}>
                                Switch Collateral
                            </button>
                        </div>
                    </div>
                </div>
            )}</>
        </>
    )
}

