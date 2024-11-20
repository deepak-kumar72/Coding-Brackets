import React from "react";
import PartnersLogos from "../svg/PartnersLogos";

const PartnersSection = () => {
  return (
    <section className="container mx-auto mb-10 px-3">
      <div className="flex flex-col space-y-2 md:space-y-6 lg:space-y-8 align-middle items-center justify-around">
        <h3 className="text-[#000333] text-lg lg:text-3xl font-extrabold text-center">
          Trusted by nearly 5000+ customers & startups
        </h3>

        <div className="flex lg:space-x-10 align-middle justify-around lg:pt-3">
          <PartnersLogos classNames="px-3 w-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
