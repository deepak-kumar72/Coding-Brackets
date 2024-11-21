import Link from "next/link";
import { ReactNode } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CodingBracketsLogo from "./svg/CodingBracketsLogo";
import { FaLinkedin } from "react-icons/fa";

const socials: { id: number; href: string; Icon: ReactNode }[] = [
  { id: 1, href: "https://www.facebook.com/profile.php?id=61552930717903", Icon: <FaFacebook className="w-5 h-5 lg:w-6 lg:h-6" /> },
  {
    id: 2,
    href: "https://www.instagram.com/codingbracketspro/",
    Icon: <AiFillInstagram className="w-5 h-5 lg:w-6 lg:h-6" />,
  },
  { id: 3, href: "https://www.linkedin.com/company/codingbracket/?viewAsMember=true", Icon: <FaLinkedin className="w-5 h-5 lg:w-5 lg:h-5" /> },
  { id: 4, href: "", Icon: <FaXTwitter className="w-5 h-5 lg:w-5 lg:h-5" /> },
  { id: 5, href: "", Icon: <FaYoutube className="w-5 h-5 lg:w-6 lg:h-6" /> },
];

const companyLinks: { id: number; href: string; name: string }[] = [
  { id: 1, href: "", name: "About Company" },
  { id: 2, href: "", name: "Terms & Conditions" },
  { id: 3, href: "", name: "Privacy Policy" },
  { id: 4, href: "", name: "Refund Policy" },
  { id: 6, href: "/our-teams", name: "Our teams" },
  { id: 5, href: "/contact-us", name: "Contact Us" },
  { id: 7, href: "/sitemap.xml", name: "Sitemap" },
];

const contacts: { id: number; heading: string; details: string }[] = [
  {
    id: 1,
    heading: "Location",
    details:
      "4/453,Vibhav Khand Gomti Nagar Lucknow 226010 , India (OPEN 24 HOURS)",
  },
  { id: 2, heading: "Phone", details: "+919696510838" },
  { id: 3, heading: "MailTo", details: "sales@codingbrackets.com" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F5F8FF] pt-[80px] md:pt-[130px] footer-skewed">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Column One Sart */}
          <div className="flex flex-col space-y-2 lg:space-y-10 mb-30px lg:mb-[80px]">
            <CodingBracketsLogo classNames="w-[60%] max-w-fit lg:w-[80%]" />

            <p className="text-[#7A7A7A] font-medium text-base lg:text-xl">
              Connect with CodingBrackets{"–"} Your Trusted Web Development
              Partner 🌐 | Let&apos;s turn your digital dreams into reality.
              Contact us for cutting-edge web solutions and tech expertise. 💻 |
            </p>

            <ul className="flex space-x-5">
              {socials.map((social) => (
                <li
                  key={social.id}
                  className="bg-[#0788A5] text-white p-2 rounded-full mt-3 lg:mt-0 lg:rounded-xl flex items-center justify-center align-middle hover:text-[#0788A5] hover:bg-transparent hover:ring-1 hover:ring-[#0788A5] transition-all duration-300 ease-in-out"
                >
                  <Link href={social.href} target="_blank">
                    {social.Icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column One end. */}

          {/* Column two start */}
          <div className="w-full h-full flex align-middle lg:justify-end">
            <ul className="flex flex-col lg:w-[60%] h-full pt-10 pb-5 lg:pt-5 lg:pb-14 align-middle space-y-2 lg:space-y-0 lg:justify-around">
              <h4 className="text-[#000333] font-bold text-lg">Company</h4>
              {companyLinks.map((link) => (
                <li
                  className="text-[#7A7A7A] font-normal text-base hover:text-[#0788A5] hover:font-medium transition-all ease-in-out"
                  key={link.id}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Column two end */}

          {/* Column Three start */}
          <div className="flex lg:justify-end">
            <ul className="flex flex-col lg:w-[70%] h-full pt-5 pb-14 align-middle justify-around">
              <h4 className="text-[#000333] font-bold text-lg">Locations</h4>
              {contacts.map((link) => (
                <li
                  key={link.id}
                  className="text-[#7A7A7A] font-normal text-base my-2 lg:my-0"
                >
                  <div className="flex flex-col space-y-2">
                    <h6 className="text-black font-medium text-base">
                      {link.heading}:
                    </h6>
                    <p>{link.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Clumn Three end. */}
        </div>
      </div>

      <div className="bg-[#E3E9F5] px-3">
     
        <div className="container mx-auto font-medium text-sm md:text-base text-black py-3">
          © 2015 - 2023 QLOUDIN Technologies Pvt Ltd. All Rights Reserved
        </div>
       
      
      </div>
    </footer>
  );
};

export default Footer;
