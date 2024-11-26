"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { DiCodeigniter } from "react-icons/di";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbSeo } from "react-icons/tb";
import {
  FaDatabase,
  FaGlobe,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoLogoAngular } from "react-icons/io";
import { MdFlipToFront, MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {
  SiDjango,
  SiExpress,
  SiFramework,
  SiPhp,
  SiSymphony,
} from "react-icons/si";
import PopUpForm from "./PopUpForm";
import { SiGoogleads } from "react-icons/si";
import CodingBracketsLogo from "./svg/CodingBracketsLogo";
import Seo from "./svg/seo";
import SocialMedia from "./svg/socialMedia";

const navLinks: { id: number; link: string; href: string }[] = [
  { id: 1, link: "Home", href: "/" },
  { id: 2, link: "Services", href: "#" },
  { id: 4, link: "Portfolios", href: "/portfolios" },
  { id: 5, link: "Testimonials", href: "/testimonials" },
  { id: 6, link: "Our teams", href: "/our-teams" },
  { id: 3, link: "Contact us", href: "/contact-us" },
];

const services: {
  id: number;
  title: string;
  href: string;
  icon?: ReactNode;
}[] = [
  {
    id: 1,
    title: "UI/UX",
    href: "/services/ui-ux-development",
    icon: <CgWebsite className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "FrontEnd Development",
    href: "/services/frontend-development",
    icon: <MdFlipToFront className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Web App Development",
    href: "/services/web-app-development",
    icon: <FaGlobe className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "ReactJS Development",
    href: "/services/react-development",
    icon: <FaReact className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "AngularJS Development",
    href: "/services/angular-development",
    icon: <IoLogoAngular className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "PHP Development",
    href: "/services/php-development",
    icon: <SiPhp className="w-6 h-6" />,
  },
  {
    id: 7,
    title: "WordPress Development",
    href: "/services/wordpress-development",
    icon: <FaWordpress className="w-6 h-6" />,
  },
  {
    id: 8,
    title: "NodeJS Development",
    href: "/services/nodejs-development",
    icon: <FaNodeJs className="w-6 h-6" />,
  },
  // {
  //   id: 9,
  //   title: "Python Development",
  //   href: "/services/python-development",
  //   icon: <FaPython className="w-6 h-6" />,
  // },
  // {
  //   id: 10,
  //   title: "Django Development",
  //   href: "/services/django-development",
  //   icon: <SiDjango className="w-6 h-6" />,
  // },
  {
    id: 9,
    title: "Framework Development",
    href: "/services/framework-development",
    icon: <SiFramework className="w-6 h-6" />,
  },
  // {
  //   id: 12,
  //   title: "Symfony Development",
  //   href: "/services/symfony-development",
  //   icon: <SiSymphony className="w-6 h-6" />,
  // },
  {
    id: 10,
    title: "ExpressJS Development",
    href: "/services/express-development",
    icon: <SiExpress className="w-6 h-6" />,
  },
  {
    id: 11,
    title: "CodeIgniter Development",
    href: "/services/codeigniter-development",
    icon: <DiCodeigniter className="w-6 h-6" />,
  },
  {
    id: 12,
    title: "Laravel Development",
    href: "/services/laravel-development",
    icon: <FaLaravel className="w-6 h-6" />,
  },
  // {
  //   id: 16,
  //   title: "Database Services",
  //   href: "/services/database-services",
  //   icon: <FaDatabase className="w-6 h-6" />,
  // },
  {
    id: 13,  
    title: "SEO",
    href: "/services/search-engine-optimization", 
    icon: <Seo classNames="w-6 h-6"/>, 
  },
  {
    id: 14, 
    title: "Google & Meta Ads",
    href: "/services/google-and-metaAds", 
    icon: <SiGoogleads className="w-6 h-6" />, 
  },
  // {
  //   id: 19, 
  //   title: "Social Media Optimisation",
  //   href: "/services/social-media-optimisation", 
  //   icon: <SocialMedia classNames="w-6 h-6" />, 
  // },

];

const NavBar = () => {
  const pathname = usePathname();
  const [openNav, setNavState] = useState(false);
  const [openServices, setServices] = useState(false);
  const [popUpState, setPopUpState] = useState(false);
  const [servicesMobileView, setServicesMobileView] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setPopUpState(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <nav
        className={`border-b border-gray-40000 sticky bg-white top-0 z-[999999999] px-3 lg:px-5 w-full max-w-[100vw] transition-all duration-300 ease-in-out ${
          openNav && servicesMobileView ? "max-h-screen overflow-y-auto" : ""
        }`}
      >
        <div className="container mx-auto flex w-full justify-between">
          <div className="flex w-full align-middle justify-between lg:justify-start lg:space-x-5 xl:space-x-20">
            <Link href="/" className="py-2">
              <CodingBracketsLogo classNames="h-[70px] w-auto" />
            </Link>
            <ul className="hidden lg:flex lg:space-x-4 xl:space-x-10 items-center font-semibold text-[#8591AF] xl:text-lg text-center">
              {navLinks.map((navItem) => (
                <li
                  key={navItem.id}
                  className="relative h-full flex align-middle justify-center items-center"
                >
                  <Link
                    href={navItem.href}
                    className={
                      " flex align-middle justify-center items-center group " +
                      (navItem.href === pathname ||
                      pathname.includes(navItem.link.toLowerCase())
                        ? "text-[#000333]"
                        : "hover:text-[#0788A5]")
                    }
                    onMouseEnter={() => {
                      if (navItem.link === "Services") {
                        setServices(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (navItem.link === "Services") {
                        setServices(false);
                      }
                    }}
                  >
                    {navItem.link === "Services" ? (
                      <>
                        <span className={openServices ? "text-[#0788A5]" : ""}>
                          {navItem.link}
                        </span>
                        <FaChevronDown
                          className={`w-3 h-3 ml-2 group-hover:-rotate-180 transition-all duration-500 ease-in-out ${
                            openServices ? "-rotate-180 text-[#0788A5]" : ""
                          }`}
                        />
                      </>
                    ) : (
                      navItem.link
                    )}
                  </Link>

                  {navItem.link === "Services" && (
                    <div
                      className={`overflow-hidden absolute h-100 z-[999999999] min-w-fit transition-all duration-300 ease-in-out text-white bg-gradient-to-br from-purple-900/80 to-black/80 backdrop-blur-lg border-[.5px] border-slate-300 rounded-md p-4 lg:bottom-[-145%] xl:bottom-[-450%] left-[-150%] ${
                        openServices
                          ? "block opacity-100 w-[650px]"
                          : "hidden opacity-0"
                      }`}
                      onMouseEnter={() => {
                        if (navItem.link === "Services" && openServices) {
                          setServices(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (navItem.link === "Services") {
                          setServices(false);
                        }
                      }}
                    >
                      <div className="grid grid-cols-2 gap-2 w-full">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            className={`p-2.5 flex space-x-3 align-middle items-center hover:bg-[#000333]/80 w-full text-start rounded-md transition-all duration-200 ease-in-out ${
                              openServices ? "cursor-pointer" : "cursor-default"
                            } `}
                            href={service.href}
                          >
                            {service.icon}
                            <span>{service.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setNavState(!openNav);
                setServicesMobileView(false);
              }}
              className="flex align-middle justify-center items-center my-auto text-gray-700 p-[2px] rounded-md border-[.5px] border-gray-700 transition-all duration-300 ease-in-out lg:hidden"
            >
              {openNav ? (
                <RxCross2 className="w-8 h-8" />
              ) : (
                <MdMenu className="w-8 h-8" />
              )}
            </button>
          </div>

          <button
            onClick={() => setPopUpState(!popUpState)}
            className="hidden lg:block lg:text-nowrap w-fit h-fit my-auto rounded-xl text-white px-8 py-3 bg-[#0788A5] font-semibold text-lg hover:bg-transparent hover:text-[#0788A5] hover:ring-1 hover:ring-[#0788A5] transition-all duration-300 ease-in-out"
          >
            Free Quote!
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out align-middle items-center border-t border-gray-40000 lg:hidden container mx-auto ${
            openNav
              ? "grid-rows-[1fr] opacity-100 py-5"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul
            className={`overflow-hidden flex flex-col space-y-5 border-slate-500/50 rounded-md items-start font-semibold text-[#8591AF] text-lg text-start transition-all duration-300 ease-in-out ${
              openNav ? "border-[0.5px] p-5" : ""
            }`}
          >
            {navLinks.map((navItem) => (
              <li
                key={navItem.id}
                className={
                  "hover:text-[#0788A5] transition-all ease-in-out group " +
                  (navItem.href === pathname ||
                  pathname.includes(navItem.link.toLowerCase())
                    ? "text-[#000333]"
                    : "")
                }
              >
                <Link
                  href={navItem.href}
                  onClick={() => {
                    if (navItem.href === "#") {
                      setServicesMobileView(!servicesMobileView);
                    } else {
                      setNavState(!openNav);
                    }
                  }}
                  className={
                    navItem.link === "Services"
                      ? "flex align-middle items-center justify-start"
                      : ""
                  }
                >
                  {navItem.link === "Services" ? (
                    <>
                      <span>{navItem.link}</span>
                      <FaChevronDown
                        className={`w-3 h-3 ml-2 transition-all duration-500 ease-in-out ${
                          servicesMobileView ? "-rotate-180 text-[#0788A5]" : ""
                        }`}
                      />
                    </>
                  ) : (
                    navItem.link
                  )}
                </Link>

                {navItem.href === "#" && (
                  <div
                    className={
                      openNav
                        ? `grid overflow-hidden w-full transition-all duration-300 ease-in-out text-[#8591AF] ${
                            servicesMobileView
                              ? "grid-cols-[1fr] h-full opacity-100 border-y border-slate-400/50 mt-3"
                              : "grid-cols-[0fr] h-0 opacity-0"
                          }`
                        : "hidden"
                    }
                  >
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        className={`flex space-x-3 align-middle items-center hover:text-[#0788A5] hover:bg-black/10 w-full text-start rounded-md transition-all duration-200 ease-in-out ${
                          servicesMobileView
                            ? "cursor-pointer p-4"
                            : "cursor-default"
                        } `}
                        href={service.href}
                        onClick={() => {
                          setNavState(false);
                          setServicesMobileView(false);
                        }}
                      >
                        {service.icon}
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}

            <button
              onClick={() => setPopUpState(!popUpState)}
              className="w-fit h-fit mx-auto rounded-xl text-white px-8 py-3 bg-[#0788A5] font-semibold text-lg hover:bg-transparent hover:text-[#0788A5] hover:ring-1 hover:ring-[#0788A5] transition-all ease-in-out"
            >
              Free Quote!
            </button>
          </ul>
        </div>
      </nav>

      <div
        className={`${
          popUpState ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <PopUpForm setState={setPopUpState} />
      </div>
    </>
  );
};

export default NavBar;
