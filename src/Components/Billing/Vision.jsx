import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaPen } from "react-icons/fa6";

const invoiceData = [
    {
        date: "March 01, 2020",
        invoice: "#MS-415646",
        amount: "$180",
        type: "PDF"
    },
    {
        date: "February 10, 2021",
        invoice: "#RV-126749",
        amount: "$250",
        type: "PDF"
    },
    {
        date: "April 05, 2020",
        invoice: "#QW-103578",
        amount: "$120",
        type: "PDF"
    },
    {
        date: "June 25, 2019",
        invoice: "#MS-415646",
        amount: "$180",
        type: "PDF"
    },
    {
        date: "March 01, 2019",
        invoice: "#AR-803481",
        amount: null,
        type: null
    }
];


const Vision = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-6 mt-10'>
                <div className='col-span-12 xl:col-span-8'>
                    <div className='grid grid-cols-12 gap-6'>
                        <div className="rounded-2xl p-8 col-span-12 lg:col-span-6 bg-cover bg-center bg-[url('/public/vissn.webp')]">
                            <div className='flex justify-between'>
                                <h2 className="text-lg font-bold mb-6">Vision UI</h2>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="48px"
                                        height="48px"
                                        className="text-white">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" />
                                            <path d="M12 6.654a6.786 6.786 0 0 1 2.596 5.344A6.786 6.786 0 0 1 12 17.34a6.786 6.786 0 0 1-2.596-5.343A6.786 6.786 0 0 1 12 6.654zm-.87-.582A7.783 7.783 0 0 0 8.4 12a7.783 7.783 0 0 0 2.728 5.926 6.798 6.798 0 1 1 .003-11.854zm1.742 11.854A7.783 7.783 0 0 0 15.6 12a7.783 7.783 0 0 0-2.73-5.928 6.798 6.798 0 1 1 .003 11.854z" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div className=' mt-16'>
                                <div className="text-2xl font-medium tracking-widest">7812 2139 0823 7916</div>
                                <div className="flex gap-5 text-sm mt-4">
                                    <div>
                                        <p className="text-gray-300 font-bold text-xs">VALID THRU</p>
                                        <p>05/24</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 font-bold text-xs">CVV</p>
                                        <p>09X</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl p-6  flex flex-col justify-between col-span-12 lg:col-span-6  bg-[#0f1232]" >

                            <div className="flex justify-between rounded-2xl p-6 bg-[url('/balance.png')] bg-cover bg-center">
                                <div className=' rounded-2xl'>
                                    <p className="text-sm text-gray-400">Credit Balance</p>
                                    <h2 className="text-4xl font-bold">$25,215</h2>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex justify-end'>
                                        <CiMenuKebab fontSize={23} className='transform rotate-90' />
                                    </div>
                                    <div className='mt-4'>
                                        <img src='/public/carv.svg' />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-6'>
                                <p className="text-xs text-gray-400 uppercase">Newest</p>
                                <div className='grid grid-cols-2 justify-between mt-2'>
                                    <div>
                                        <div>
                                        </div>
                                        <div>
                                            <span>Bill & Taxes</span><br />
                                            <span>Today, 16:36</span>
                                        </div>
                                    </div>
                                    <div className='text-end'>
                                        <span className='font-semibold text-sm'>-$154.50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' p-6 rounded-2xl mt-6 bg-[linear-gradient(127.09deg,_rgba(6,11,40,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)] bg-origin-border'>
                        <div className='flex justify-between'>
                            <h4 className='text-lg font-bold'>Payment Method</h4>
                            <button className='py-3 px-6 bg-[#0075ff] rounded-xl text-xs font-bold'>ADD NEW CARD</button>
                        </div>

                        <div className='grid grid-col-1 sm:grid-cols-2 gap-6 mt-6'>
                            <div className='flex justify-between items-center p-6 border-[#4a5568] border rounded-2xl'>
                                <div className='flex gap-6'>
                                    <svg width="21px" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.63158" cy="7.49999" r="6.63158" fill="#EB001B"></circle><circle cx="14.3685" cy="7.49999" r="6.63158" fill="#F79E1B"></circle></svg>
                                    <p>7812 2139 0823 XXXX</p>
                                </div>
                                <FaPen />
                            </div>
                            <div className='flex justify-between items-center p-6 border-[#4a5568] border rounded-2xl'>

                                <div className='flex gap-6'>
                                    <svg width="25px" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.6708 2.96349C12.6568 4.15055 13.653 4.81298 14.4034 5.20684C15.1744 5.61099 15.4333 5.87013 15.4304 6.23147C15.4245 6.78459 14.8153 7.02862 14.2452 7.03812C13.2505 7.05475 12.6723 6.74889 12.2125 6.51753L11.8542 8.32341C12.3155 8.55247 13.1696 8.75217 14.0554 8.76087C16.1345 8.76087 17.4947 7.65543 17.5021 5.94145C17.5102 3.76625 14.7087 3.64579 14.7278 2.67348C14.7344 2.37871 14.9956 2.06408 15.568 1.98406C15.8512 1.94368 16.6332 1.91274 17.5198 2.35252L17.8677 0.605286C17.391 0.418253 16.7782 0.239136 16.0153 0.239136C14.0583 0.239136 12.6819 1.35962 12.6708 2.96349V2.96349ZM21.2115 0.389687C20.8319 0.389687 20.5118 0.628245 20.3691 0.99433L17.3991 8.63249H19.4767L19.8901 7.40183H22.429L22.6689 8.63249H24.5L22.902 0.389687H21.2115ZM21.5021 2.61641L22.1016 5.7116H20.4596L21.5021 2.61641ZM10.1518 0.389687L8.51418 8.63249H10.4939L12.1308 0.389687H10.1518ZM7.22303 0.389687L5.16233 6.00003L4.32878 1.22966C4.23097 0.697187 3.84472 0.389687 3.41579 0.389687H0.0471011L0 0.629037C0.691574 0.790671 1.47729 1.0514 1.95326 1.33033C2.24457 1.50067 2.32775 1.64964 2.42336 2.05458L4.00214 8.63249H6.0945L9.3021 0.389687H7.22303Z" fill="white"></path></svg>
                                    <p>7812 2139 0823 XXXX</p>

                                </div>
                                <FaPen />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-12 xl:col-span-4 bg-[#0c0f2d] rounded-2xl p-6'>
                    <div className='flex justify-between items-center gap-6'>
                        <h6 className='text-lg font-bold'>Invoices</h6>
                        <button className='py-2 px-8 bg-[#0075ff] rounded-xl text-xs font-bold'>VIEW ALL</button>
                    </div>
                    <div>
                        <ul className='mt-8 overflow-x-auto '>
                            {
                                invoiceData.map((invoice, index) => (
                                    <li className='grid grid-cols-12 justify-between gap-6 mb-6 ' key={index} >
                                        <div className='col-span-8'>
                                            <h5 className=' text-md font-semibold mb-2'>{invoice.date}</h5>
                                            <p className='text-xs font-semibold text-[#6e778c]'>{invoice.invoice}</p>
                                        </div>
                                        <div className='flex justify-between gap-6'>
                                            <div className='col-span-1'>
                                                <h5 className='font-semibold text-[#6e778c]'>{invoice.amount}</h5>
                                            </div>
                                            <div className='col-span-1 flex '>
                                                <h5 className='font-semibold text-[#6e778c]'>{invoice.type}</h5>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Vision
