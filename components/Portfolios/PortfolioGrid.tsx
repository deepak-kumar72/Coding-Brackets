"use client";

import { project_category } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const PortfolioGridSection = ({
  portfolios,
  categories,
}: {
  portfolios?: ({
    category: {
      id: number;
      name: string;
      status: number;
      created_at: Date;
    };
  } & {
    id: number;
    cat_id: number;
    title: string;
    description: string;
    portfolio_image: string;
    createdAt: Date;
  })[];
  categories?: project_category[];
}) => {
  const [filter, setFilter] = useState<number>(-1);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="container mx-auto grid grid-cols-5 my-12 lg:my-20 px-3 lg:px-5">
      <div className="w-full h-full col-span-5 lg:col-span-1 mb-7 lg:mb-0">
        <ul className="border border-gray-300/60 rounded-md h-fit max-h-fit hidden lg:block last:border-none">
          <li
            key={-1}
            className={`text-xl font-medium px-5 py-[15px] cursor-pointer border-b border-gray-300/30 hover:bg-black/5 hover:text-[#0788A5] transition-all duration-300 ease-in-out ${
              filter === -1 ? "text-[#0788A5] bg-black/5" : "text-[#7A7A7A]"
            }`}
            onClick={() => {
              setFilter(-1);
            }}
          >
            All
          </li>
          {categories &&
            categories.map((item) => (
              <li
                key={item.id}
                className={`text-xl font-medium px-5 py-[15px] cursor-pointer border-b border-gray-300/30 hover:bg-black/5 hover:text-[#0788A5] transition-all duration-300 ease-in-out ${
                  filter === item.id
                    ? "text-[#0788A5] bg-black/5"
                    : "text-[#7A7A7A]"
                }`}
                onClick={() => {
                  setFilter(item.id);
                }}
              >
                {item.name}
              </li>
            ))}
        </ul>

        <div className="relative w-full inline-block lg:hidden">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="w-[50%] flex align-middle items-center justify-between px-5 py-3 text-start text-lg border border-gray-200 text-[#0788A5] bg-black/5 hover:bg-black/10 rounded-md transition-all ease-in-out duration-200"
          >
            {filter === -1
              ? "All"
              : categories &&
                categories.filter((item) => item.id === filter)[0].name}
            <BiChevronDown
              className={`w-6 h-6 transition-all duration-300 ease-out ${
                dropdown && "rotate-180"
              }`}
            />
          </button>
          <ul
            className={`absolute z-1 w-[50%] rounded-md overflow-hidden last:border-none transition-all duration-300 ease-out ${
              dropdown
                ? "h-fit opacity-100 translate-y-[0px]"
                : "opacity-0 translate-y-[-30px] h-0"
            }`}
          >
            <li
              key={-1}
              onClick={() => {
                setFilter(-1);
                setDropdown(false);
              }}
              className="w-full px-3 py-3 text-start border-b border-b-slate-600/10 text-slate-500 bg-[#f0f0f0] hover:bg-gray-200  hover:text-[#0788A5] transition-all ease-in-out duration-200"
            >
              All
            </li>
            {categories &&
              categories.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setFilter(item.id);
                    setDropdown(false);
                  }}
                  className="w-full px-3 py-3 text-start border-b border-b-slate-600/10 text-slate-500 bg-[#f0f0f0] hover:bg-gray-200  hover:text-[#0788A5] transition-all ease-in-out duration-200"
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="col-span-5 lg:col-span-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14 lg:pl-8 min-h-[400px] lg:min-h-full">
        {portfolios && filter === -1
          ? portfolios.map((portfolio) => (
              <div
                key={portfolio.id}
                className="flex flex-col h-full w-full rounded-2xl overflow-hidden bg-[#0000000a] hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 ease-out"
              >
                <div className="overflow-hidden bg-[#fc806670]">
                  <Image
                    alt={portfolio.title}
                    src={
                      "https://codingbrackets.com/admin/" +
                      portfolio.portfolio_image
                    }
                    width={1000}
                    height={1000}
                    className="static"
                  />
                </div>

                <div className="flex flex-col space-y-5 px-5 pb-8">
                  <div className="bg-[#0788a5] rounded-full py-1 mt-5 px-3 w-fit text-sm font-normal text-[#fff] uppercase">
                    {portfolio.category.name}
                  </div>

                  <h3 className="text-[#111827] text-xl font-semibold">
                    {portfolio.title}
                  </h3>
                  <p className="text-[#4b5563] font-normal text-base">
                    {portfolio.description}
                  </p>
                </div>
              </div>
            ))
          : portfolios &&
            portfolios
              .filter((portfolio) => portfolio.cat_id === filter)
              .map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="flex flex-col h-full w-full rounded-2xl overflow-hidden bg-[#0000000a]"
                >
                  <div className="overflow-hidden bg-[#fc806670]">
                    <Image
                      alt={portfolio.title}
                      src={
                        "https://codingbrackets.com/admin/" +
                        portfolio.portfolio_image
                      }
                      width={1000}
                      height={1000}
                      className="static"
                    />
                  </div>

                  <div className="flex flex-col space-y-5 px-5 pb-8">
                    <div className="bg-[#0788a5] rounded-full py-1 mt-5 px-3 w-fit text-sm font-normal text-[#fff] uppercase">
                      {portfolio.category.name}
                    </div>

                    <h3 className="text-[#111827] text-xl font-semibold">
                      {portfolio.title}
                    </h3>
                    <p className="text-[#4b5563] font-normal text-base">
                      {portfolio.description}
                    </p>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
};

export default PortfolioGridSection;
