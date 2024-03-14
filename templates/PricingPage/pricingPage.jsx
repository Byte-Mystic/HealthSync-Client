import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PricingPage = () => {
  return (
    <div className="h-screen w-screen p-10 flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-5xl font-extrabold text-slate-700 tracking-wider">
          Pricing Plans
        </h1>
        <p className="text-sm font-medium text-slate-500">
          Choose the that suits you the most!
        </p>
      </div>
      {/* Plans */}
      <div className="h-full flex items-center justify-evenly">
        <div className="w-1/4 p-6 flex flex-col gap-4 rounded-xl shadow-md shadow-slate-400 cursor-pointer transition ease-in duration-300 delay-75 hover:border-2 hover:border-sky-600 hover:scale-95">
          <span className="flex flex-col">
            <h3 className="font-semibold">Basic</h3>
            <p className="text-xs font-medium text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, illum?
            </p>
          </span>
          <span className=" mb-6 flex flex-col gap-2">
            <span className="block">
              <h2 className="mr-4 text-3xl font-semibold text-slate-800 inline-block">
                Free
              </h2>
              <p className="text-xs text-gray-500 font-medium inline-block">
                /For Forever
              </p>
            </span>
            <button className="p-2 rounded-md bg-sky-500 text-white font-semibold transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
              Get Started!
            </button>
          </span>
          <ul className="flex flex-col gap-2 list-none">
            <p className="text-sm font-semibold text-slate-500 capitalize">
              Features you get:
            </p>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature1</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature2</p>
            </li>
            <li className="flex items-center gap-4">
              <FaTimesCircle className="text-red-600 text-lg" />
              <p className="font-medium text-sm">Feature3</p>
            </li>
            <li className="flex items-center gap-4">
              <FaTimesCircle className="text-red-600 text-lg" />
              <p className="font-medium text-sm">Feature4</p>
            </li>
            <li className="flex items-center gap-4">
              <FaTimesCircle className="text-red-600 text-lg" />
              <p className="font-medium text-sm">Feature5</p>
            </li>
          </ul>
        </div>
        <div className="w-1/4 p-6 flex flex-col gap-4 rounded-xl shadow-md shadow-slate-400 cursor-pointer transition ease-in duration-300 delay-75 hover:border-2 hover:border-sky-600 hover:scale-95">
          <span className="flex flex-col">
            <h3 className="font-semibold">Regular</h3>
            <p className="text-xs font-medium text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, illum?
            </p>
          </span>
          <span className=" mb-6 flex flex-col gap-2">
            <span className="block">
              <h2 className="mr-4 text-3xl font-semibold text-slate-800 inline-block">
                $5.00
              </h2>
              <p className="text-xs text-gray-500 font-medium inline-block">
                /Per Month
              </p>
            </span>
            <button className="p-2 rounded-md bg-sky-500 text-white font-semibold transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
              Get Started!
            </button>
          </span>
          <ul className="flex flex-col gap-2 list-none">
            <p className="text-sm font-semibold text-slate-500 capitalize">
              Features you get:
            </p>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature1</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature2</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature3</p>
            </li>
            <li className="flex items-center gap-4">
              <FaTimesCircle className="text-red-600 text-lg" />
              <p className="font-medium text-sm">Feature4</p>
            </li>
            <li className="flex items-center gap-4">
              <FaTimesCircle className="text-red-600 text-lg" />
              <p className="font-medium text-sm">Feature5</p>
            </li>
          </ul>
        </div>
        <div className="w-1/4 p-6 flex flex-col gap-4 rounded-xl shadow-md shadow-slate-400 cursor-pointer transition ease-in duration-300 delay-75 hover:border-2 hover:border-sky-600 hover:scale-95">
          <span className="flex flex-col">
            <h3 className="font-semibold">Premium</h3>
            <p className="text-xs font-medium text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, illum?
            </p>
          </span>
          <span className=" mb-6 flex flex-col gap-2">
            <span className="block">
              <h2 className="mr-4 text-3xl font-semibold text-slate-800 inline-block">
                $10.00
              </h2>
              <p className="text-xs text-gray-500 font-medium inline-block">
                /Per Month
              </p>
            </span>
            <button className="p-2 rounded-md bg-sky-500 text-white font-semibold transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
              Get Started!
            </button>
          </span>
          <ul className="flex flex-col gap-2 list-none">
            <p className="text-sm font-semibold text-slate-500 capitalize">
              Features you get:
            </p>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature1</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature2</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature3</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature4</p>
            </li>
            <li className="flex items-center gap-4">
              <FaCheckCircle className="text-green-600 text-lg" />
              <p className="font-medium text-sm">Feature5</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
