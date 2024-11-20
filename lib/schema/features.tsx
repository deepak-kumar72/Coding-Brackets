import { ReactNode } from "react";
import { BsPlugin } from "react-icons/bs";
import { SiReactos, SiSemanticuireact, SiWebmoney } from "react-icons/si";

interface features {
  id: number;
  title: string;
  details: string;
  Icon: ReactNode;
}

export const reactFeatures: features[] = [
  {
    id: 1,
    title: "WordPress Web Design Flexibility",
    details:
      "In the hands of a WordPress expert, you have a fully customizable web platform that is an ideal tool for creating virtually any kind of website. Showcase your business site, blog or eCommerce store the way you want with WordPress web design. There are more than 5,000 free WordPress themes that benchmark how to design a WordPress website the right way and a WordPress developer can build one uniquely for you.",
    Icon: (
      <SiReactos
        className="w-10 h-10 text-[#3295AC]"
        style={{ width: "40px", height: "40px" }}
      />
    ),
  },
  {
    id: 2,
    title: "Easy-to-Use Content Management System",
    details:
      "Your site administration shouldn't have to be complicated. The core WordPress development team specifically designed the platform to cater to a non-technical audience. The WordPress CMS is so intuitive that it can make anyone feel like a WordPress web developer. All it takes is logging on to your WordPress admin dashboard, add or update your web content and see the changes immediately when you refresh the page.",
    Icon: (
      <SiWebmoney
        className="w-10 h-10 text-[#3295AC]"
        style={{ width: "40px", height: "40px" }}
      />
    ),
  },
  {
    id: 3,
    title: "Powerful WordPress Website Plugins",
    details:
      "WordPress is known as a simple visual editor, but the extent of its WordPress web design capabilities holds much power. With plugins, you can add custom forms, visual sliders and other eye-catching elements to your website in addition to powerful analytics and WordPress SEO tools. The 50,000 (and counting) free plugins streamline how to build a WordPress website with complete functionality.",
    Icon: (
      <BsPlugin
        className="w-10 h-10 text-[#3295AC]"
        style={{ width: "40px", height: "40px" }}
      />
    ),
  },
  {
    id: 4,
    title: "SEO-Ready WordPress Web Design",
    details:
      "In addition to great WordPress SEO plugins, the platform is structured to make optimizing your site as easy as possible. You can easily include your keywords in your permalinks, add metadata on all posts and optimize your images with alt text — building a solid WordPress SEO foundation. Best of all, WordPress themes and plugins are known to provide excellent user experience that Google rewards with higher search rankings.",
    Icon: (
      <SiSemanticuireact
        className="w-10 h-10 text-[#3295AC]"
        style={{ width: "40px", height: "40px" }}
      />
    ),
  },
];
