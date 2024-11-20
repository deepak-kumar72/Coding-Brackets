import Image from "next/image";
import React from "react";

const themes = [1, 2, 3, 4, 5, 6];

const PortfolioSection = () => {
  return (
    <section className="container mx-auto px-3 lg:px-0 my-10 lg:my-16 min-h-max">
      <div className="flex flex-col space-y-3 lg:space-y-7 align-middle justify-center items-center">
        <h4 className="text-[#FE765D] font-extrabold text-lg lg:text-2xl text-center">
          OUR PORTFOLIO
        </h4>

        <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl text-center">
          Codingbrackets React Sample Websites
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-24 px-10 lg:px-16 xl:px-28 mt-12 lg:mt-20 w-full">
        {themes.map((theme) => (
          <div
            key={theme}
            className="flex flex-col bg-[#F8FAFC] border border-[#E7E5EA] rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-cyan-200 hover:shadow-xl transition-all duration-200 ease-in-out"
          >
            <div className="h-[60%]">
              <Image
                alt=""
                src={"/Maskgroup.png"}
                width={1000}
                height={1000}
                style={{ position: "static" }}
                quality={100}
                className="max-h-full object-cover object-top"
              />
            </div>

            <div className="w-full h-full p-5 flex flex-col">
              <h4 className="text-[#000333] font-semibold text-2xl">
                Theme {theme}
              </h4>

              <p className="text-[#7A7A7A] pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                eos voluptatem.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
