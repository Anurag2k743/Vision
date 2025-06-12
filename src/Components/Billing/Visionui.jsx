import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const Visionui = () => {
  return (
    <div className="min-h-screen p-6  text-white space-y-6">

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Credit Card */}
        <div className="bg-gradient-to-br from-[#1b2d80] to-[#12164f] rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-6">Vision UI</h2>
          <div className="text-2xl font-medium tracking-widest mb-4">7812 2139 0823 7916</div>
          <div className="flex justify-between text-sm">
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

        {/* Credit Balance */}
        <div className="bg-[#141832] rounded-xl p-6 shadow-lg flex flex-col justify-between">
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

        {/* Invoices */}
        <div className="bg-[#0F1328] rounded-xl p-6 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Invoices</h2>
            <button className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md">View All</button>
          </div>
          {[
            { date: "March, 01, 2020", id: "#MS-415646", amount: 180 },
            { date: "February, 10, 2021", id: "#RV-126749", amount: 250 },
            { date: "April, 05, 2020", id: "#QW-103578", amount: 120 },
            { date: "June, 25, 2019", id: "#MS-415646", amount: 180 },
            { date: "March, 01, 2019", id: "#AR-803481", amount: 300 },
          ].map((invoice, idx) => (
            <div key={idx} className="flex justify-between items-center text-sm py-2 border-b border-gray-700">
              <div>
                <p>{invoice.date}</p>
                <p className="text-gray-400">{invoice.id}</p>
              </div>
              <div className="flex items-center space-x-2">
                <p>${invoice.amount}</p>
                <HiOutlineDocumentText />
                <span className="text-xs">PDF</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-[#121a3b] rounded-xl p-6">
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
  );
};

export default Visionui;
