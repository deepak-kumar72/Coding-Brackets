import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import HeroVector from "../svg/HeroVector";
import HomePageActions from "./HomePageActions";

const offers = [
  "Cover Full-Stack development (front-end, back-end, UX/UI, database and more)",
  "A fully dedicated web development team that works for you 24/7.",
  "100% customer satisfaction guaranteed.",
];

const HomePageHeroSection = () => {
  return (
    <section
      className="max-w-[100vw] lg:bg-top h-fit pt-10 pb-10 lg:py-14 xl:py-20 bg-no-repeat bg-contain bg-top lg:bg-contain px-3 lg:px-5"
      style={{ backgroundImage: "url(/Banner.png)" }}
    >
      <div className="h-full w-full">
        <div className="container h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 justify-center">
          <div className="flex flex-col my-auto space-y-3 lg:space-y-5 xl:space-y-7 ">
            <h3 className="text-[#FE765D] font-bold text-lg xl:text-2xl">
              One-Stop Web solution!
            </h3>

            <div className="space-y-3 xl:space-y-5">
              <h1 className="text-[#000333] font-extrabold text-4xl xl:text-5xl 2xl:text-6xl hero-headline">
                Yo
              </h1>
              <div className="">
                <h1 className="text-[#000333] font-extrabold text-4xl xl:text-5xl 2xl:text-6xl">
                  A{" "}
                  <span className="text-[#0788A5] relative ">
                    Great Website
                    <HeroVector classNames="absolute w-[100%] bottom-[-35%] lg:bottom-[-30%] 2xl:bottom-[-20%] left-0" />
                  </span>
                </h1>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-5 pt-5 lg:pt-3 2xl:pt-5">
              <p className="text-[#7A7A7A] font-medium text-base xl:text-lg xl:pr-16">
                CodingBrackets is a next-gen web development agency, that helps
                you boost your business online by creating a website that is
                both responsive and user-friendly using industry-leading website
                development technologies.
              </p>

              <ul className="appearance-none space-y-3">
                {offers.map((offer, index) => (
                  <li
                    key={index}
                    className="flex align-middle space-x-4 text-[#7A7A7A] font-medium text-base xl:text-lg"
                  >
                    <GoDotFill className="text-[#FE765D] w-4 h-4 self-center shrink-0" />{" "}
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>

            <HomePageActions />
          </div>

          <div className="grid order-first lg:order-none place-items-center">
            <Image
              alt=""
              src={"/HeroImage-2.png"}
              width={1000}
              height={1000}
              loading="eager"
              priority
              className="w-[100%] max-w-[100%] hero-image"
              style={{
                position: "static",
                animation: "sweep 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHeroSection;
