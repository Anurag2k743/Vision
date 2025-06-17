import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";

const billingData = [
  {
    id: 1,
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476"
  },
  {
    id: 2,
    name: "Lucas Harper",
    company: "Blueberry Pancakes",
    email: "lucas@pancakes.com",
    vat: "FRB6543210"
  },
  {
    id: 3,
    name: "Ethan James",
    company: "Sunset Smoothies",
    email: "amelia@sunset.com",
    vat: "FRB9876543"
  }
];

const Information = () => {
  return (
    <>
      <h3 className="text-lg font-bold">Billing Information</h3>
      <ul className="rounded-2xl">
        {billingData.map((item) => (
          <li
            key={item.id}
            className="[&:nth-child(-n+2)]:mb-10 mt-6 bg-[linear-gradient(127.09deg,_rgba(24,29,60,0.94)_19.41%,_rgba(10,14,35,0.49)_76.65%)] p-6 rounded-2xl"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm">{item.name}</h3>
              </div>
              <div className="flex justify-between items-center gap-6">
                <button className="uppercase flex items-center text-xs text-[#E31A1A]">
                  <MdDelete className="mr-1" /> Delete
                </button>
                <button className="uppercase flex items-center text-xs font-bold">
                  <FaPen className="mr-1" /> Edit
                </button>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="text-xs text-[#6a758c]">
                <span>Company Name: </span> <span>{item.company}</span>
              </div>
              <div className="text-xs text-[#6a758c]">
                <span>Email Address: </span> <span>{item.email}</span>
              </div>
              <div className="text-xs text-[#6a758c]">
                <span>VAT Number: </span> <span>{item.vat}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Information;
