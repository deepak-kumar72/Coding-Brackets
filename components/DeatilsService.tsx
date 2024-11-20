"use client";

import { detailsReactSevice } from "@/lib/schema/aboutService";
import { contactSchema } from "@/lib/validation/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GoDotFill } from "react-icons/go";
import { z } from "zod";
import "./deatils-service.css";

type contact = z.infer<typeof contactSchema>;

const offers = [
  "Engaging in Web Design and Development using ReactJS.",
  "ReactJS Developers with a Decade of Experience.",
  "Our Experts employ the latest trends in the technology of stack.",
];

const DeatilsServicePage = ({ details }: { details: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<contact>({ resolver: zodResolver(contactSchema) });

  return (
    <section className="bg-[#F8FAFC] pt-14 pb-5 my-20" id="ServicesContactForm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          {/* Details */}
          <div
            className="lg:col-span-2 flex flex-col p-5 md:p-10 lg:pr-16 space-y-16"
            dangerouslySetInnerHTML={{ __html: details }}
            id="db-content"
          >
            {/* <div className="flex flex-col space-y-2 lg:space-y-6">
              <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl leading-snug tracking-normal">
                Unleash the Power of ReactJS With Us
              </h2>

              <p className="text-[#7A7A7A] font-medium text-base lg:text-xl pb-3 lg:pb-0 pr-6 lg:pr-20">
                CodingBrackets is the gateway to industry-leading ReactJS
                development. Here, you get dynamic, interactive, and
                blazing-fast web solutions to elevate your Online Presence.
                Let&apos;s craft your website with ReactJS.
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

            <div className="flex flex-col space-y-2 lg:space-y-6">
              <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl leading-snug tracking-normal">
                What We Offer
              </h2>
              <p className="text-[#7A7A7A] font-medium text-base lg:text-xl pb-3 lg:pb-0 pr-6 lg:pr-20">
                Our ReactJS Expert Team offers the best-in-class Technologies
                and creativity! Read the functionalities offered to your website
                application:
              </p>

              <ul className="appearance-none space-y-3">
                {detailsReactSevice.map((detail) => (
                  <li
                    key={detail.id}
                    className="flex flex-col align-middle space-y-1 w-[80%]"
                  >
                    <h5 className="text-[#000333] font-semibold text-2xl pt-5 lg:pt-7">
                      {detail.title}
                    </h5>

                    <p className="text-[#7A7A7A] font-medium text-lg pt-2">
                      {detail.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* Contact form */}
          <div className="p-5 md:p-10 lg:p-0 lg:pt-10 lg:pr-5">
            <form
              onSubmit={handleSubmit(async (data) => {
                try {
                  const res = await axios.post("/api/contactus", data);
                  reset({
                    name: "",
                    requirements: "",
                    comment: "",
                    email: "",
                    phone: "",
                    service_id: "",
                  });
                  toast.success("Form submitted successfully");
                  // console.log(res);
                } catch (error) {
                  if (error instanceof AxiosError) {
                    toast.error(error.response?.data.error);
                    return;
                  }
                  toast.error("Some error occured, please try again");
                  // console.log(error);
                }
              })}
              className=" bg-[#0788A5]/70 backdrop-blur-lg p-8 rounded-xl xl:w-full"
              method="POST"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <div className="w-full flex justify-between pt-0 space-x-7">
                <div className="flex flex-col w-full space-y-3">
                  <label
                    htmlFor="name1"
                    className="text-white font-medium text-lg"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name1"
                    placeholder="Enter Your Name"
                    className="px-4 py-3 w-full rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base placeholder:font-medium outline-none text-gray-700 text-base font-medium focus:ring-0 focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out"
                  />
                  {errors.name && (
                    <p
                      className="text-white tracking-wide text-sm bg-[#000333] py-1 px-3 w-fit rounded-xl"
                      style={{ marginTop: "10px" }}
                    >
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full space-y-3">
                  <label
                    htmlFor="email1"
                    className="text-white font-medium text-lg"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    id="email1"
                    placeholder="Enter Your Email"
                    className="px-4 py-3 rounded-lg w-full placeholder:text-[#B3B3B3] placeholder:text-base placeholder:font-medium outline-none text-gray-700 text-base font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out focus:ring-0"
                  />
                  {errors.email && (
                    <p
                      className="text-white tracking-wide text-sm bg-[#000333] py-1 px-3 w-fit rounded-xl"
                      style={{ marginTop: "10px" }}
                    >
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="w-full flex pt-5 space-x-7">
                <div className="flex flex-col w-full space-y-3">
                  <label
                    htmlFor="phone1"
                    className="text-white font-medium text-lg"
                  >
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone1"
                    placeholder="Enter Your Phone"
                    className="px-4 py-3 w-full rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base placeholder:font-medium outline-none text-gray-700 text-base font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out focus:ring-0"
                  />
                  {errors.phone && (
                    <p
                      className="text-white tracking-wide text-sm bg-[#000333] py-1 px-3 w-fit rounded-xl"
                      style={{ marginTop: "10px" }}
                    >
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col w-full space-y-3">
                  <label
                    htmlFor="services1"
                    className="text-white font-medium text-lg"
                  >
                    Services
                  </label>
                  <select
                    {...register("service_id")}
                    id="services1"
                    className="w-full px-4 py-3 appearance-none rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base placeholder:font-medium outline-none text-gray-700 text-base font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out focus:ring-0"
                  >
                    <option
                      hidden
                      value=""
                      className="text-gray-400 opacity-50"
                    >
                      Select an option
                    </option>
                    <option key={1} value="1">
                      E-commerce
                    </option>
                    <option key={2} value="2">
                      Finance
                    </option>
                    <option key={3} value="3">
                      WordPress
                    </option>
                    <option key={4} value="4">
                      Healthcare
                    </option>
                    <option key={5} value="5">
                      Travel
                    </option>
                    <option key={6} value="6">
                      MLM (Multi-Level Marketing)
                    </option>
                    <option key={7} value="7">
                      Educational
                    </option>
                    <option key={8} value="8">
                      Law Firm
                    </option>
                    <option key={9} value="9">
                      Content Management Systems (CMS)
                    </option>
                    <option key={10} value="10">
                      Other services
                    </option>
                  </select>
                  {errors.service_id && (
                    <p
                      className="text-white tracking-wide text-sm bg-[#000333] py-1 px-3 w-fit rounded-xl"
                      style={{ marginTop: "10px" }}
                    >
                      {errors.service_id.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full space-y-3 pt-5">
                <label
                  htmlFor="requirements1"
                  className="text-white font-medium text-lg"
                >
                  Software requirements
                </label>
                <input
                  {...register("requirements")}
                  type="text"
                  id="requirements1"
                  placeholder="Enter Your Requirements"
                  className="px-4 py-3 rounded-lg w-full placeholder:text-[#B3B3B3] placeholder:text-base placeholder:font-medium outline-none text-gray-700 text-base font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out focus:ring-0"
                />
                {errors.requirements && (
                  <p
                    className="text-white tracking-wide text-sm bg-[#000333] py-1 px-3 w-fit rounded-xl"
                    style={{ marginTop: "10px" }}
                  >
                    {errors.requirements.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col w-full space-y-3 pt-5">
                <label
                  htmlFor="comment1"
                  className="text-white font-medium text-lg"
                >
                  Comment or Message
                </label>
                <textarea
                  {...register("comment")}
                  rows={3}
                  id="comment1"
                  placeholder="Write Us a Message"
                  style={{ resize: "none" }}
                  className="px-4 py-5 rounded-lg placeholder:text-[#B3B3B3] placeholder:text-base placeholder:font-medium outline-none text-gray-700 text-base font-medium focus:shadow-lg focus:shadow-gray-600 transition-all ease-in-out focus:ring-0"
                />
                {errors.comment && (
                  <p
                    className="text-white tracking-wide text-sm bg-[#000333] py-1 px-3 w-fit rounded-xl"
                    style={{ marginTop: "10px" }}
                  >
                    {errors.comment.message}
                  </p>
                )}
              </div>

              <div className="pt-10 w-full flex justify-center align-middle items-center">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="text-[#0788A5] font-bold text-xl items-center align-middle px-7 py-4 rounded-xl bg-white hover:bg-[#0788A5] hover:text-white hover:ring-1 hover:ring-white transition-all ease-in-out disabled:cursor-not-allowed"
                >
                  Request Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeatilsServicePage;
