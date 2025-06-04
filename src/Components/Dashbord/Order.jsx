import { div } from 'framer-motion/client';
import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";




const Order = () => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Orders overview</h2>
            <p className="flex items-center gap-2">
                <IoCheckmarkCircleOutline fontSize={20} className="bg-green-700 rounded-full" />
                30 done this month
            </p>

            <div>
                <div className='flex  gap-4 mt-8'>
                    <div>
                        <FaBell fontSize={20} className="text-blue-600 " />
                    </div>
                    <div>
                        <h3 className='text-[14px] font-bold'>$2400, Design changes</h3>
                        <p className='text-[12px] mt-1 font-bold'>22 DEC 7:20 PM</p>
                    </div>
                </div>

                <div className='flex  gap-4 mt-7'>
                    <div>
                        <FaHtml5 fontSize={20} className="text-red-600 " />
                    </div>
                    <div>
                        <h3 className='text-[14px] font-bold'>New order #1832412</h3>
                        <p className='text-[12px] mt-1 font-bold'>21 DEC 11 PM</p>
                    </div>
                </div>
                <div className='flex  gap-4 mt-7'>
                    <div>
                        <IoCart fontSize={20} className="text-blue-600  " />
                    </div>
                    <div>
                        <h3 className='text-[14px] font-bold'>Server payments for April</h3>
                        <p className='text-[12px] mt-1 font-bold'>21 DEC 9:34 PM</p>
                    </div>
                </div>

                <div className='flex  gap-4 mt-7'>
                    <div>
                        <FaCreditCard fontSize={20} className="text-yellow-600  " />
                    </div>
                    <div>
                        <h3 className='text-[14px] font-bold'>New card added for order #4395133</h3>
                        <p className='text-[12px] mt-1 font-bold'>20 DEC 2:20 AM</p>
                    </div>
                </div>

                <div className='flex  gap-4 mt-7'>
                    <div>
                        <FaAddressCard fontSize={20} className="text-purple-600  " />
                    </div>
                    <div>
                        <h3 className='text-[14px] font-bold'>New card added for order #4395133</h3>
                        <p className='text-[12px] mt-1 font-bold'>18 DEC 4:54 AM</p>
                    </div>
                </div>

                                <div className='flex  gap-4 mt-7'>
                    <div>
                        <SiAdobexd fontSize={20} className="text-pink-800  " />
                    </div>
                    <div>
                        <h3 className='text-[14px] font-bold'>New order #9583120</h3>
                        <p className='text-[12px] mt-1 font-bold'>17 DEC</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Order
