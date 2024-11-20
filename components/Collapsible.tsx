"use client";

import { type faqs } from "@/lib/schema/faq";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Collapsible = ({ faq }: { faq: (typeof faqs)[0] }) => {
  const [isOpen, setFaqOpen] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  return (
    <div
      className={`my-5 border-[#E7E5EA] border rounded-xl lg:rounded-3xl group hover:bg-[#F8FAFC] hover:shadow-md transition-all duration-300 ease-in-out ${
        isOpen ? "bg-[#F8FAFC]" : "bg-transparent"
      }`}
      data-aos={isLoaded ? "" : "zoom-in-up"}
      data-aos-duration={isLoaded ? "" : "1000"}
    >
      <button
        className="w-full px-3 py-2 lg:px-7 lg:py-6"
        onClick={() => {
          setLoaded(true);
          setFaqOpen(!isOpen);
        }}
      >
        <div className="flex justify-between align-middle space-x-2">
          <div className="flex space-x-2 lg:space-x-4 align-middle justify-center my-auto">
            <span className="flex shrink-0 align-middle w-4 h-4 lg:w-6 lg:h-6 justify-center items-center text-xs lg:text-sm bg-[#0788A5] text-white font-semibold p-1 rounded-full my-auto">
              {faq.id}
            </span>

            <span className="flex align-middle justify-center font-semibold text-sm lg:text-xl text-black my-auto">
              {faq.question}
            </span>
          </div>

          {isOpen ? (
            <FaAngleUp className="shrink-0 w-4 h-4 lg:w-6 lg:h-6 my-auto group-hover:text-[#0788A5] transition-all duration-300 ease-in-out" />
          ) : (
            <FaAngleDown className="shrink-0 w-4 h-4 lg:w-6 lg:h-6 my-auto group-hover:text-[#0788A5] transition-all duration-300 ease-in-out" />
          )}
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#818DAC] text-start text-xs lg:text-lg ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pt-1 pl-2 lg:pt-2 lg:pl-9"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">{faq.answer}</div>
        </div>
      </button>
    </div>
  );
};

export default Collapsible;
