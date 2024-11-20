"use client";

import { contactUsSchema } from "@/lib/validation/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";


type contactUs = z.infer<typeof contactUsSchema>;

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<contactUs>({ resolver: zodResolver(contactUsSchema) });

  return (
    <section className="lg:pb-16">
      <section className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center  overflow-hidden">
          <div className="flex align-middle justify-center px-5 h-full w-full">
            <Image
              alt="Contact Us"
              src={"/contact-us.svg"}
              width={500}
              height={500}
              quality={100}
              loading="eager"
              className="w-[80%]"
            />
          </div>

          <div className="isolate px-6 pb-14 lg:py-20 lg:px-8 w-full">
            <div className="mx-auto max-w-2xl text-center pb-7 md:pb-14 lg:pb-0">
              <div className="flex flex-col space-y-1 lg:space-y-3 text-transparent bg-gradient-to-br from-stone-900/30 to-slate-900 bg-clip-text items-center align-middle justify-center">
                <h2 className="font-extrabold text-4xl lg:text-5xl">
                  Contact Us
                </h2>

                <h5 className="font-extrabold text-xl lg:text-2xl">
                  Let&apos;s Discuss Your Project
                </h5>
              </div>
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
              method="POST"
              className="mx-auto max-w-xl lg:mt-16"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name2"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      {...register("name")}
                      type="text"
                      id="name2"
                      autoComplete="off"
                      className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm sm:leading-6"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 pt-1 pl-1">
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email2"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      {...register("email")}
                      type="text"
                      id="email2"
                      autoComplete="off"
                      className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm sm:leading-6"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 pt-1 pl-1">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="services2"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Services
                  </label>
                  <div className="mt-2.5">
                    <select
                      {...register("service_id")}
                      defaultValue=""
                      id="services2"
                      autoComplete="off"
                      className="appearance-none outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm sm:leading-6"
                    >
                      <option value="" hidden disabled>
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
                      <p className="text-xs text-red-500 pt-1 pl-1">
                        {errors.service_id?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="requirements2"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Software requirements
                  </label>
                  <div className="mt-2.5">
                    <input
                      {...register("requirements")}
                      type="text"
                      id="requirements2"
                      autoComplete="off"
                      className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm sm:leading-6"
                    />
                    {errors.requirements && (
                      <p className="text-xs text-red-500 pt-1 pl-1">
                        {errors.requirements?.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number2"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="country" className="sr-only">
                        Country
                      </label>
                      <select
                        {...register("country")}
                        id="country"
                        defaultValue="+91"
                        className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-3 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm"
                      >
                        <option value="+91">IN</option>
                        <option value="+01">US</option>
                        <option value="+">EU</option>
                      </select>
                    </div>
                    <input
                      {...register("phone")}
                      type="text"
                      id="phone-number2"
                      autoComplete="off"
                      className="outline-none block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 pt-1 pl-1">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message2"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      {...register("comment")}
                      id="message2"
                      rows={4}
                      className="outline-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0788A5] sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                    {errors.comment && (
                      <p className="text-xs text-red-500 pt-1 pl-1">
                        {errors.comment?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block w-full rounded-xl bg-[#0788A5] px-3.5 py-4 text-center text-xl font-semibold text-white shadow-sm hover:bg-white hover:text-[#0788A5] hover:ring-1 hover:ring-[#0788A5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0788A5] disabled:cursor-wait"
                >
                  Let&apos;s talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUsSection;
