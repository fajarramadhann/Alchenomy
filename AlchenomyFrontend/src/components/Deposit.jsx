import ETH_ICON from "../assets/eth.png"
export default function WithdrawForm({ isOpen, closeModal}) {
    return (
        <>{isOpen && (
            <div className="fixed top-0 w-full bg-black/20 h-screen">
                <div className="flex items-center justify-center font-body h-full">
                    <div className="w-11/12 md:w-5/12 bg-white rounded-2xl p-4 shadow-lg">
                        {/* Header */}
                        <h1 className="text-xl font-semibold mb-6">Deposit</h1>

                        {/* Amount Section */}
                        <div className="bg-[#E7FAE9] rounded-2xl p-4 mb-6">
                            <p className="text-sm text-gray-600 mb-3">Amount</p>
                            <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                        <img
                                            src={ETH_ICON}
                                            alt="ETH"
                                            className="w-4 h-4"
                                        />
                                    </div>
                                    <span className="font-medium">ETH</span>
                                </div>
                                <div className="text-right">
                                    <input className="text-lg font-semibold text-right" placeholder="1000 ETH"/>
                                    <div className="text-sm text-gray-500">~$3000</div>
                                </div>
                            </div>
                        </div>
                        {/* Withdraw Button */}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors" onClick={()=>closeModal(false)}>
                            Deposit Coin
                        </button>
                    </div>
                </div>

            </div>
        )}</>
    )
}

