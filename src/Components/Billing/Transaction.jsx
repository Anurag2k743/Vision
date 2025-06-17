import React from "react";
import { FaArrowUp, FaArrowDown, FaExclamation } from "react-icons/fa";

const transactions = [
  {
    id: 1,
    company: "Netflix",
    date: "27 March 2020, at 12:30 PM",
    amount: "- $2,500",
    type: "debit",
    section: "newest",
  },
  {
    id: 2,
    company: "Apple",
    date: "27 March 2020, at 04:30 AM",
    amount: "+ $2,000",
    type: "credit",
    section: "newest",
  },
  {
    id: 3,
    company: "Stripe",
    date: "26 March 2020, at 13:45 PM",
    amount: "+ $750",
    type: "credit",
    section: "yesterday",
  },
  {
    id: 4,
    company: "HubSpot",
    date: "26 March 2020, at 12:30 PM",
    amount: "+ $1,000",
    type: "credit",
    section: "yesterday",
  },
  {
    id: 5,
    company: "HubSpot",
    date: "26 March 2020, at 08:30 AM",
    amount: "+ $2,500",
    type: "credit",
    section: "yesterday",
  },
  {
    id: 6,
    company: "Webflow",
    date: "26 March 2020, at 05:00 AM",
    amount: "Pending",
    type: "pending",
    section: "yesterday",
  },
];

const Transactions = () => {
  const grouped = {
    newest: transactions.filter((tx) => tx.section === "newest"),
    yesterday: transactions.filter((tx) => tx.section === "yesterday"),
  };

  return (
    <div className="rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Your Transaction's</h2>
        <span className="text-sm text-gray-300">📅 23 - 30 March 2020</span>
      </div>

      {["newest", "yesterday"].map((section) => (
        <div key={section} className="mb-4">
          <h3 className="uppercase text-xs text-gray-400 mb-2 font-bold">
            {section === "newest" ? "Newest" : "Yesterday"}
          </h3>
          <div className="space-y-4">
            {grouped[section].map(({ id, company, date, amount, type }) => (
              <div key={id} className="flex items-center justify-between my-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center rounded-full p-3 border-2
                      ${
                        type === "credit"
                          ? "border-green-400"
                          : type === "debit"
                          ? "border-red-400"
                          : "border-gray-400"
                      }`}
                  >
                    {type === "credit" && (
                      <FaArrowUp className="text-green-400 text-sm" />
                    )}
                    {type === "debit" && (
                      <FaArrowDown className="text-red-400 text-sm" />
                    )}
                    {type === "pending" && (
                      <FaExclamation className="text-gray-400 text-sm" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold">{company}</div>
                    <div className="text-xs text-gray-400 mt-2">{date}</div>
                  </div>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    type === "credit"
                      ? "text-green-400"
                      : type === "debit"
                      ? "text-red-400"
                      : "text-gray-400"
                  }`}
                >
                  {amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
