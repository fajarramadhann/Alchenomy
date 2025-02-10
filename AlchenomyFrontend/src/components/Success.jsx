import { ArrowRight } from "lucide-react"
import ETH_ICON from "../assets/eth.png"
export default function SuccessModal({ isOpen, closeModal }) {
    return (
        <>{isOpen && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 font-body">
                <div className="bg-white rounded-2xl w-full max-w-md p-6 animate-fade-in">
                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-center mb-8">Congrats, all done!</h2>

                    {/* Transaction Summary */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between gap-3">
                            {/* Deposited */}
                            <div className="bg-gray-50 w-full p-3 rounded-xl border border-gray-200">
                                <div className="text-sm text-gray-500 mb-2">From</div>
                                <div className="flex items-center gap-2 mb-1">
                                    <img
                                        src={ETH_ICON}
                                        alt="wstETH"
                                        className="w-5 h-5"
                                    />
                                    <span>wstETH</span>
                                </div>
                                <div className="font-medium">10,000.00</div>
                                <div className="text-sm text-gray-500">$32,626,806.27</div>
                            </div>
                            <div className="rounded-full bg-blue-700 p-1 text-white">
                                <ArrowRight size={14}/>
                            </div>
                            {/* Borrowed */}
                            <div className="bg-gray-50 w-full p-3 rounded-xl border border-gray-200">
                                <div className="text-sm text-gray-500 mb-2">To</div>
                                <div className="flex items-center gap-2 mb-1">
                                    <img
                                        src={ETH_ICON}
                                        alt="DAI"
                                        className="w-5 h-5"
                                    />
                                    <span>DAI</span>
                                </div>
                                <div className="font-medium">1,000.00</div>
                                <div className="text-sm text-gray-500">$1,000.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={() => closeModal(false)}
                        className="w-full py-4 rounded-xl text-white font-medium bg-gradient-to-r bg-blue-500 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        )}</>
    )
}

