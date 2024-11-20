import React from "react";

const HeroVector = ({ classNames }: { classNames?: string }) => {
  return (
    <svg
      width="343"
      height="24"
      viewBox="0 0 343 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
    >
      <path
        d="M1 21C37 18.9998 124 -5.50029 205 6.49985C283.458 18.1233 332.5 10.5 341.5 13.5"
        stroke="#0788A5"
        strokeWidth="5"
      />
    </svg>
  );
};

export default HeroVector;
