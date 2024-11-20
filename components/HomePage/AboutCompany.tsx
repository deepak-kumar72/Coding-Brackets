import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCompanyPage = () => {
  return (
    <section className="container mx-auto mt-3 mb-10 lg:mb-16 px-3">
      <div className="flex justify-center align-middle w-full h-full ">
        <div className="grid grid-cols-1 gap-0 lg:gap-0 lg:grid-cols-2 place-items-center">
          <div
            className="object-contain w-full order-last lg:order-first"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              alt="About Company"
              src={"/AboutCompanyImage-2.png"}
              quality={100}
              style={{ position: "static" }}
              className="max-h-full mx-auto md:w-[90%]"
              width={1000}
              height={1000}
            />
          </div>

          <div
            className="flex flex-col space-y-2 lg:space-y-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="text-[#FE765D] font-extrabold text-lg lg:text-2xl ">
              About Our Company!
            </h3>

            <h2 className="text-[#000333] font-extrabold text-4xl xl:text-5xl lg:leading-snug tracking-normal">
              About CodingBrackets
            </h2>

            <p className="text-[#7A7A7A] font-medium text-base pt-4 lg:pt-0 lg:text-lg xl:pr-20">
              CodingBrackets is the best website development company that
              delivers responsive websites and helps you boost your business
              online by resolving digital challenges with industry-leading
              innovations.
              <br />
              <br />
              Here, at CodingBrackets, we prioritize web security, securing your
              website&apos;s content with full encryption.
              <br />
              Our experts tirelessly work to provide you with the best web
              solutions instantly and develop a web presence that is accessible
              at all times.
            </p>

            <Link className="w-fit pt-3 lg:pt-0" href="#ContactFormSection">
              <button className="flex px-5 py-2 lg:py-3 rounded-xl justify-center items-center align-middle text-white font-bold text-lg lg:text-xl bg-[#000333] max-w-fit hover:bg-transparent hover:text-[#000333] hover:ring-1 hover:ring-[#000333] transition-all ease-in-out">
                Request a Free Quote!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanyPage;
