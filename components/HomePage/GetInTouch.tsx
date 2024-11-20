import Link from "next/link";

const GetInTouchSection = () => {
  return (
    <section className="container mx-auto px-3 lg:px-[100px] xl:px-[180px] lg:mt-16 xl:mt-28 mb-10 xl:mb-20">
      <div
        className="flex flex-col space-y-1 lg:space-y-5 align-middle justify-around items-center px-3 py-7 xl:p-10 bg-cover bg-no-repeat bg-center rounded-xl lg:rounded-3xl"
        style={{ backgroundImage: "url(/GetInTouchBg.png)" }}
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <h4 className="text-white text-base lg:text-2xl font-extrabold text-center">
          Let&apos;s work with us!
        </h4>

        <h2 className="text-white font-extrabold text-2xl lg:text-5xl text-center">
          Let&apos;s Talk About Your Dream Project?
        </h2>

        <p className="text-white text-sm lg:text-xl text-center w-[90%] lg:w-[60%] tracking-normal">
          CodingBrackets a trusted name for providing assistants. Initially
          their main objective was
        </p>

        <div className="flex align-middle justify-center space-x-3 lg:space-x-6 pt-3">
          <Link
            href="/contact-us"
            className="text-[#0788A5] font-bold text-sm lg:text-xl items-center align-middle bg-white px-6 lg:px-16 py-2 lg:py-4 rounded-xl hover:bg-[#0788A5] hover:text-white hover:ring-2 hover:ring-white transition-all duration-200 ease-in-out"
          >
            Get In Touch
          </Link>

          <Link
            href="/#ServicesSection"
            className="text-[#0788A5] font-bold text-sm lg:text-xl items-center align-middle bg-white px-6 lg:px-16 py-2 lg:py-4 rounded-xl hover:bg-[#0788A5] hover:text-white hover:ring-2 hover:ring-white transition-all duration-200 ease-in-out"
          >
            Our Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
