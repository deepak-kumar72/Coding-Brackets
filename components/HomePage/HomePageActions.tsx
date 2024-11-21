"use client";

import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import PopUpForm from "../PopUpForm";
import Link from "next/link";

const HomePageActions = () => {
  const [popUpState, setPopUpState] = useState(false);
  return (
    <div className="flex flex-col space-y-5 pt-5 lg:pt-0 lg:space-y-0 lg:flex-row lg:space-x-7">
      <button
        onClick={() => setPopUpState(!popUpState)}
        className="px-5 py-3 rounded-xl bg-[#0788A5] text-white font-bold text-base xl:text-xl text-center align-middle items-center hover:text-[#0788A5] hover:bg-white hover:ring-1 hover:ring-[#0788A5] transition-all duration-300 ease-in-out"
      >
        Request a Free Quote!
      </button>
      <Link
        href="tel:+919696510838"
        className="flex justify-center px-5 py-3 rounded-xl bg-[#000333] text-white font-bold text-base xl:text-xl text-center align-middle items-center hover:text-[#000333] hover:bg-white hover:ring-1 hover:ring-[#000333] transition-all duration-300 ease-in-out"
      >
        <BiSolidPhoneCall className="w-7 h-7 lg:w-8 lg:h-8 mr-3" />{" "}
        <span>+91 9696510838</span>
      </Link>

      <div
        className={`${
          popUpState ? "relative" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <PopUpForm setState={setPopUpState} />
      </div>
    </div>
  );
};

export default HomePageActions;
