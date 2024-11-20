import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

const DevelopmentSection = ({ title }: { title: string }) => {
  return (
    <section
      className="w-full bg-no-repeat bg-center bg-cover px-3"
      style={{ backgroundImage: "url(/DevelopmentBg.png)" }}
    >
      <div className="container mx-auto h-full flex flex-col space-y-3 md:space-y-6 align-middle items-center justify-center py-16 md:py-20 lg:py-28">
        <h1 className="text-[#000333] font-extrabold text-4xl lg:text-5xl text-center">
          {title}
        </h1>
        <div className="flex space-x-2 lg:space-x-5 align-middle justify-center items-center">
          <Link
            href="/"
            className="text-[#0788A5] font-medium text-lg md:text-xl border-b-2 border-transparent hover:border-b-2 hover:border-[#0788A5]"
          >
            Home
          </Link>

          <IoChevronForwardOutline className="w-4 h-4 md:w-5 md:h-5 self-center text-[#0788A5]" />

          <p className="text-[#7A7A7A] font-medium text-lg md:text-xl">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentSection;
