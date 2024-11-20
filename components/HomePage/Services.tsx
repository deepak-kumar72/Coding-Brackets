import { ReactNode } from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { IoHome, IoSchoolSharp } from "react-icons/io5";
import { SiYourtraveldottv } from "react-icons/si";
import { IoGitNetworkSharp } from "react-icons/io5";
import { SiPayloadcms } from "react-icons/si";

const services: {
  id: number;
  Icon: ReactNode;
  background: string;
  title: string;
  dscription: string;
}[] = [
  {
    id: 1,
    Icon: (
      <MdHealthAndSafety className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-[#4669FF]" />
    ),
    background: "DFE5FF",
    title: "HealthCare Website",
    dscription:
      "We create engaging patient experience websites through our amazing healthcare web solutions. Our skilled medical web developers harness the potential of data analytics to provide healthcare websites.",
  },
  {
    id: 2,
    Icon: (
      <IoHome className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-[#DB58B4]" />
    ),
    background: "FFD3F2",
    title: "Real Estate Website",
    dscription:
      "Get the tech-driven real estate websites that meet your business needs from online property bookings, home search and lead management to brokerage handling as well. Our Team uses AR/VR to create an engaging website.",
  },
  {
    id: 3,
    Icon: (
      <GoLaw className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-[#408B33]" />
    ),
    background: "D1EECC",
    title: "Law Firm Websites",
    dscription:
      "Here, at CodingBrackets, get a reliable law firm website, giving you a smooth way to communicate with clients in real time. Invest in an exclusive client portal for your website to protect confidential court cases.",
  },
  {
    id: 4,
    Icon: (
      <SiYourtraveldottv className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-[#03709F]" />
    ),
    background: "88DBFF",
    title: "Travel Websites",
    dscription:
      "Embark on your journey with immersive travel websites. Discover, plan, and experience the world like never before.",
  },
  {
    id: 5,
    Icon: (
      <IoSchoolSharp className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-[#CF6022]" />
    ),
    background: "FFDBC7",
    title: "Educational Websites",
    dscription:
      "Get professional and virtual learning websites that ensure student engagement. We provide study guides, e-learning tools, online books, and multimedia content to lure your viewers. Contact the sales team now!",
  },
  {
    id: 6,
    Icon: (
      <GiShoppingCart className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-[#3295AC]" />
    ),
    background: "AEF0FF",
    title: "E-commerce Websites",
    dscription:
      "Boost your e-commerce website by embedding detailed product information that, in turn, helps you access new clients. We build a secure e-transaction channel and let you engage with your clients 24/7. Get your e-commerce website built Now!",
  },
  {
    id: 7,
    Icon: (
      <IoGitNetworkSharp className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-yellow-600" />
    ),
    background: "FFECA1",
    title: "MLM Website",
    dscription:
      "Build Profiles of every recruit and track their sales to calculate the KPIs of your downline members with a responsive dashboard and a user-friendly interface. Contact Us to transform your idea into reality.",
  },
  {
    id: 8,
    Icon: (
      <SiPayloadcms className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-emerald-600" />
    ),
    background: "AEE199",
    title: "CMS Website",
    dscription:
      "We create blogging, wordpress and portfolio websites as per your requirement helping you get online viewers from all across the globe. Put SEO-friendly content that ranks your website in the search engines.",
  },
];

const ServicesPage = () => {
  return (
    <section
      id="ServicesSection"
      className="container mx-auto mt-14 xl:mt-5 xl:mb-16"
    >
      <div
        className="h-full w-full bg-cover bg-top lg:bg-contain lg:bg-top bg-no-repeat px-3"
        style={{ backgroundImage: "url(/ServicesSectionBg.png)" }}
      >
        <div className="flex flex-col space-y-3 lg:space-y-5 text-center py-8 lg:py-14 align-middle justify-center">
          <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl ">
            What You Get with Our Services
          </h2>

          <p className="text-[#7A7A7A] font-medium text-base lg:text-lg lg:w-[80%] xl:text-xl xl:w-[78%] self-center">
            We craft extremely responsive websites that are tailored
            specifically to take care of your e-firm be it educational, Real
            Estate, Hotels & SPA websites and others as well. In a nutshell! We
            help you get the best.
            <br />
            Below is the list of websites that we build exclusively meeting our
            client’s demand.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center align-middle md:px-24 xl:px-10 2xl:px-16 gap-x-2 md:gap-x-5 xl:gap-x-5 2xl:gap-x-12 transition-all duration-300 ease-in-out"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer flex flex-col text-ellipsis max-h-[80%] h-[80%] hover:max-h-none hover:h-full group space-y-2 lg:space-y-4 xl:space-y-5 text-center align-middle justify-start items-center bg-white px-3 py-4 lg:px-5 lg:py-5 xl:py-8 xl:px-7 rounded-lg xl:rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:shadow-cyan-300 transition-all duration-300 ease-in-out"
            >
              <div
                className="p-3 lg:p-4 xl:p-5 flex align-middle justify-center items-center rounded-full"
                style={{ background: `#${service.background}` }}
              >
                {service.Icon}
              </div>

              <h4 className="text-[#000333] font-semibold text-center text-base lg:text-lg xl:text-xl align-middle">
                {service.title}
              </h4>

              <p className="text-[#7A7A7A] font-medium text-center text-xs lg:text-sm xl:text-base align-middle overflow-hidden transition-all duration-300 ease-in-out">
                {service.dscription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
