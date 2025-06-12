import React from 'react'
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const Vision = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-8'>
                    <div className='grid grid-cols-12 gap-5'>
                        <div className="rounded-2xl p-8 col-span-6 bg-cover bg-center bg-[url('/public/vissn.webp')]">

                            <h2 className="text-lg font-semibold mb-6">Vision UI</h2>
                            <div className="text-xl font-medium tracking-widest mt-18">7812 2139 0823 7916</div>
                            <div className="flex justify-between text-sm mt-16">
                                <div>
                                    <p className="text-gray-400">VALID THRU</p>
                                    <p>05/24</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">CVV</p>
                                    <p>09X</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#141832] rounded-2xl p-6  flex flex-col justify-between col-span-6" >
                            <div>
                                <p className="text-sm text-gray-400">Credit Balance</p>
                                <h2 className="text-3xl font-bold">$25,215</h2>
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-400 uppercase">Newest</p>
                                <p className="text-sm mt-1">Bill & Taxes</p>
                                <p className="text-xs text-gray-400">Today, 16:36</p>
                            </div>
                            <div className="text-right text-red-400 font-semibold mt-2">- $154.50</div>
                        </div>
                    </div>

                    <div className="bg-[#121a3b] rounded-xl p-6 mt-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Payment Method</h2>
                            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md text-sm">Add New Card</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Mastercard */}
                            <div className="flex items-center justify-between bg-[#0f172a] px-4 py-3 rounded-xl border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <FaCcMastercard size={24} className="text-red-500" />
                                    <span>7812 2139 0823 XXXX</span>
                                </div>
                                <button className="text-gray-400 hover:text-white">✎</button>
                            </div>

                            {/* Visa */}
                            <div className="flex items-center justify-between bg-[#0f172a] px-4 py-3 rounded-xl border border-gray-700">
                                <div className="flex items-center space-x-3">
                                    <FaCcVisa size={24} className="text-blue-400" />
                                    <span>7812 2139 0823 XXXX</span>
                                </div>
                                <button className="text-gray-400 hover:text-white">✎</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-4 bg-blue-700'>

                </div>

            </div>
        </>
    )
}

export default Vision
