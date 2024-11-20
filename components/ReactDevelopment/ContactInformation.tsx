import { ReactNode } from "react";
import { PiChatTeardropTextFill } from "react-icons/pi";
import { FaSkype } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const contacts: {
  id: number;
  Icon: ReactNode;
  title: string;
  detail: string;
  background: string;
  shadow: string;
}[] = [
  {
    id: 1,
    title: "We Will Call You",
    detail: "Your details please!!",
    Icon: <PiChatTeardropTextFill className="w-12 h-12 text-white" />,
    background: "bg-[#E62565]",
    shadow: "hover:shadow-pink-300",
  },
  {
    id: 2,
    title: "Skype Us",
    detail: "live:lorem ipsum",
    Icon: <FaSkype className="w-12 h-12 text-white" />,
    background: "bg-[#587BF8]",
    shadow: "hover:shadow-violet-300",
  },
  {
    id: 3,
    title: "Email Us",
    detail: "Lorem Ipsum Dummy",
    Icon: <MdEmail className="w-12 h-12 text-white" />,
    background: "bg-[#FD9727]",
    shadow: "hover:shadow-amber-300",
  },
  {
    id: 4,
    title: "Let's Talk",
    detail: "+91 85623 0000",
    Icon: <IoIosCall className="w-12 h-12 text-white" />,
    background: "bg-[#2C992D]",
    shadow: "hover:shadow-green-300",
  },
];

const ContactInformationSection = () => {
  return (
    <section className="container mx-auto pt-5 lg:pt-8 px-3 lg:px-10">
      <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl text-center">
        Let&apos;s Talk About Your Requirement
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-5 px-3 lg:px-0 py-14">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`p-7 flex flex-col space-y-2 align-middle justify-center items-center bg-[#F8FAFC] border border-[#E7E5EA] rounded-3xl w-full h-full group hover:-translate-y-2 hover:shadow-xl ${contact.shadow} transition-all duration-300 ease-in-out`}
          >
            <div
              className={`p-6 grid place-items-center rounded-full ${contact.background}`}
            >
              {contact.Icon}
            </div>

            <h4 className="text-[#000333] font-bold text-2xl text-center pt-3">
              {contact.title}
            </h4>

            <p className="text-[#7A7A7A] font-medium text-base text-center">
              {contact.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="border-b-2 border-[#F0EFEF] w-[70%] mx-auto mt-3" />
    </section>
  );
};

export default ContactInformationSection;
