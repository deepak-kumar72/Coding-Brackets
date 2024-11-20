import { AboutService } from "@/lib/schema/aboutService";
import Image from "next/image";
import Link from "next/link";

interface Props {
  aboutService: AboutService;
}

const AboutServicePage = ({
  aboutService: { imagePath, details, title, subHeading },
}: Props) => {
  return (
    <section className="container mx-auto my-12 lg:my-24 px-3">
      <div className="flex justify-center align-middle w-full h-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 place-items-center">
          <div className="flex flex-col space-y-2 lg:space-y-6">
            <h3 className="text-[#FE765D] font-extrabold text-lg lg:text-2xl ">
              {subHeading}
            </h3>

            <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl leading-snug tracking-normal">
              {title}
            </h2>

            <p className="text-[#7A7A7A] font-medium text-base lg:text-xl pb-3 lg:pb-0 pr-6 lg:pr-20">
              {details}
            </p>

            <Link className="w-fit" href="#ServicesContactForm">
              <button className="flex px-5 py-2 lg:py-3 rounded-xl justify-center items-center align-middle text-white font-bold text-lg lg:text-xl bg-[#000333] max-w-fit hover:bg-transparent hover:text-[#000333] hover:ring-1 hover:ring-[#000333] transition-all ease-in-out">
                Request a Free Quote!
              </button>
            </Link>
          </div>

          <div className="relative object-contain flex justify-center w-full">
            <Image
              alt={title}
              src={`https://codingbrackets.com/admin/${imagePath}`}
              quality={100}
              style={{ position: "static" }}
              className="max-h-full w-[80%]"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServicePage;
