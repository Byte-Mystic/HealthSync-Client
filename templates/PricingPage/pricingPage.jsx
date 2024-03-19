import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const PricingPage = () => {
  return (
    <div className="h-screen p-6 flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-black text-slate-800 lg:text-5xl">
          Pricing Plans
        </h1>
        <p className="text-xs font-semibold text-slate-500 lg:text-base">
          Choose the plan that suits you the most!
        </p>
      </div>
      <div className="py-6 px-4 flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-evenly md:gap-0">
        <div className="w-full p-4 flex gap-8 rounded-xl shadow-md shadow-slate-400 cursor-pointer md:h-full md:w-1/4 md:flex-col md:p-6">
          <span className="w-1/3 flex flex-col md:w-full">
            <h3 className="font-semibold text-sm">Basic</h3>
            <p className="text-xs font-medium text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, illum?
            </p>
          </span>
          <span className="w-2/3 flex flex-col md:w-full">
            <span className="mb-4 flex flex-col gap-2">
              <span className="block">
                <h2 className="mr-4 text-2xl font-bold text-slate-800 inline-block">
                  Free
                </h2>
                <p className="text-xs text-gray-500 font-semibold inline-block">
                  /For Forever
                </p>
              </span>
              <button className="p-2 rounded-md bg-sky-500 text-white font-semibold transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
                Get Started!
              </button>
            </span>
            <ul className="flex flex-col gap-2 list-none md:mt-6">
              <p className="text-sm font-semibold text-slate-500 capitalize">
                Features you get:
              </p>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 text-lg" />
                <p className="font-semibold text-xs">Feature1</p>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 text-lg" />
                <p className="font-semibold text-xs">Feature2</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature3</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature4</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature5</p>
              </li>
            </ul>
          </span>
        </div>
        <div className="w-full p-4 flex gap-8 rounded-xl shadow-md shadow-slate-400 cursor-pointer md:h-full md:w-1/4 md:flex-col md:p-6">
          <span className="w-1/3 flex flex-col md:w-full">
            <h3 className="font-semibold text-sm">Basic</h3>
            <p className="text-xs font-medium text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, illum?
            </p>
          </span>
          <span className="w-2/3 flex flex-col md:w-full">
            <span className="mb-4 flex flex-col gap-2">
              <span className="block">
                <h2 className="mr-4 text-2xl font-bold text-slate-800 inline-block">
                  Free
                </h2>
                <p className="text-xs text-gray-500 font-semibold inline-block">
                  /For Forever
                </p>
              </span>
              <button className="p-2 rounded-md bg-sky-500 text-white font-semibold transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
                Get Started!
              </button>
            </span>
            <ul className="flex flex-col gap-2 list-none md:mt-6">
              <p className="text-sm font-semibold text-slate-500 capitalize">
                Features you get:
              </p>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 text-lg" />
                <p className="font-semibold text-xs">Feature1</p>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 text-lg" />
                <p className="font-semibold text-xs">Feature2</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature3</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature4</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature5</p>
              </li>
            </ul>
          </span>
        </div>
        <div className="w-full p-4 flex gap-8 rounded-xl shadow-md shadow-slate-400 cursor-pointer md:h-full md:w-1/4 md:flex-col md:p-6">
          <span className="w-1/3 flex flex-col md:w-full">
            <h3 className="font-semibold text-sm">Basic</h3>
            <p className="text-xs font-medium text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, illum?
            </p>
          </span>
          <span className="w-2/3 flex flex-col md:w-full">
            <span className="mb-4 flex flex-col gap-2">
              <span className="block">
                <h2 className="mr-4 text-2xl font-bold text-slate-800 inline-block">
                  Free
                </h2>
                <p className="text-xs text-gray-500 font-semibold inline-block">
                  /For Forever
                </p>
              </span>
              <button className="p-2 rounded-md bg-sky-500 text-white font-semibold transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
                Get Started!
              </button>
            </span>
            <ul className="flex flex-col gap-2 list-none md:mt-6">
              <p className="text-sm font-semibold text-slate-500 capitalize">
                Features you get:
              </p>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 text-lg" />
                <p className="font-semibold text-xs">Feature1</p>
              </li>
              <li className="flex items-center gap-4">
                <FaCheckCircle className="text-green-600 text-lg" />
                <p className="font-semibold text-xs">Feature2</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature3</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature4</p>
              </li>
              <li className="flex items-center gap-4">
                <FaTimesCircle className="text-red-600 text-lg" />
                <p className="font-semibold text-xs">Feature5</p>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
