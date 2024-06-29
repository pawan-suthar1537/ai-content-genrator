"use client";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { handler } from "tailwindcss-animate";

const Billing = () => {
  const [load, setload] = useState(false);
  const CreateSUbcription = () => {
    setload(true);
    axios.post("/api/create-subcription", {}).then(
      (res) => {
        console.log(res.data);
        onPay(res.data.id);
      },
      (error) => {
        setload(false);
        console.log(error);
      }
    );
  };

  const onPay = (subid: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      subscription_id: subid,
      name: "AI content generator",
      description: "Monthly Plan",
      handler: async (res: any) => {
        console.log(res);
        setload(false);
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="text-center py-8">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script> 
      <h1 className="text-6xl font-bold mt-10 mb-16">
        Upgrade With Monthly Plan
      </h1>
      <div className="flex justify-center space-x-8">
        <div className="border border-gray-300 rounded-lg p-6 w-80 shadow-lg">
          <h2 className="text-2xl font-semibold">Free</h2>
          <p className="text-3xl font-bold text-black mt-4 mb-4">
            ₹0<span className="text-lg font-medium">/month</span>
          </p>
          <ul className="list-none p-0 mb-6">
            <li className="mb-2">10,000 Words/Month</li>
            <li className="mb-2">50+ Content Templates</li>
            <li className="mb-2">Unlimited Download & Copy</li>
            <li className="mb-2">1 Month of History</li>
          </ul>
          <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg cursor-not-allowed">
            Currently Active Plan
          </button>
        </div>
        <div className="border border-gray-300 rounded-lg p-6 w-80 shadow-lg">
          <h2 className="text-2xl font-semibold">Yearly</h2>
          <p className="text-3xl font-bold text-black mt-4 mb-4">
            ₹4999<span className="text-lg font-medium">/Yearly</span>
          </p>
          <ul className="list-none p-0 mb-6">
            <li className="mb-2">100,000 Words/Month</li>
            <li className="mb-2">50+ Template Access</li>
            <li className="mb-2">Unlimited Download & Copy</li>
            <li className="mb-2">1 Year of History</li>
          </ul>
          <button
            disabled={load}
            onClick={() => CreateSUbcription()}
            className="bg-blue-500 text-white flex gap-2 items-center py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            {load && <Loader2 className="animate-spin" />}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
