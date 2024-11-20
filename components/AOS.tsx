"use client";

import Script from "next/script";
import AOS from "aos/dist/aos.js";
import "aos/dist/aos.css";

const AOSSection = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="AOS"
        onReady={() => {
          AOS.init();
        }}
      >
        {`try{AOS.init();} catch(err){}`}
      </Script>
    </>
  );
};

export default AOSSection;
