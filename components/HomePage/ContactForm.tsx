"use client";

import { contactSchema } from "@/lib/validation/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

type contact = z.infer<typeof contactSchema>;

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<contact>({ resolver: zodResolver(contactSchema) });

  return (
    <section
      id="ContactFormSection"
      className="px-3 xl:px-0 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/ContactFormBg.png)" }}
    >
      <div className="container mx-auto min-h-fit py-10 lg:py-10 overflow-hidden">
        <div className="flex flex-col space-y-4 lg:space-y-5 xl:space-y-7 items-center align-middle justify-center">
          <h5 className="text-white font-extrabold text-base lg:text-xl xl:text-2xl">
            Lets have a project with us!
          </h5>
          <h2 className="text-white text-center font-extrabold text-3xl lg:text-4xl xl:text-5xl">
            Let&apos;s Discuss Your Project
          </h2>

          <Link
            href="/contact-us"
            className="px-7 py-2 text-[#0788A5] bg-white text-lg rounded-lg font-bold text-center w-fit h-fit self-center mx-auto lg:hidden hover:bg-[#0788A5] hover:text-white hover:ring-1 hover:ring-white transition-all duration-300 ease-in-out"
          >
            Contact us &rarr;
          </Link>
        </div>

        <div className="hidden lg:grid grid-cols-2 mt-10 place-items-center">
          <div className="p-7 w-[90%]">
            <Image
              alt=""
              src="/contact-us-image.png"
              width={1000}
              height={1000}
            />
          </div>

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
            className="hidden lg:block bg-white/15 backdrop-blur-lg lg:p-8 rounded-xl xl:w-full"
            method="POST"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="w-full flex justify-between pt-10 space-x-7">
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

            <div className="w-full flex pt-10 space-x-7">
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
                  <option hidden value="" className="text-gray-400 opacity-50">
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

            <div className="flex flex-col w-full space-y-3 pt-10">
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

            <div className="flex flex-col w-full space-y-3 pt-10">
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

            <div className="py-10 w-full flex justify-center align-middle items-center">
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
    </section>
  );
};

export default ContactFormSection;
