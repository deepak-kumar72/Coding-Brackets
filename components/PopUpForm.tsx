"use client";

import { contactSchema } from "@/lib/validation/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoMdCloseCircle } from "react-icons/io";
import { z } from "zod";

type contact = z.infer<typeof contactSchema>;

const PopUpForm = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<contact>({ resolver: zodResolver(contactSchema) });

  return (
    <div className="fixed top-0 left-0 z-[9999999999] h-screen w-screen max-h-screen max-w-[100vw] grid place-items-center bg-black/0 backdrop-blur-md p-3 md:p-0 transition-all duration-300 ease-in-out">
      <div className="w-full h-fit bg-[#0788A5'] bg-neutral-950 rounded-2xl max-w-max max-h-fit min-h-fit min-w-[40%] overflow-hidden">
        <div className="flex align-middle justify-between w-full px-4 md:px-6 pt-4 pb-3 md:py-5 border-b-[0.5px] border-slate-600 bg-gradient-to-r from-purple-700/50 to-transparent">
          <h2 className="text-lg md:text-2xl font-semibold text-white">
            Request a Free Quote!
          </h2>

          <button onClick={() => setState(false)} className="">
            <IoMdCloseCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
        </div>

        {/* Contact Form */}
        <form
          method="post"
          className="w-full h-full px-4 py-5 md:px-16 md:py-10 space-y-5 md:space-y-6 appearance-none"
          onSubmit={handleSubmit(async (data) => {
            try {
              await axios.post("/api/contactus", data);
              reset({
                name: "",
                email: "",
                phone: "",
                requirements: "",
                service_id: "",
              });
              toast.success("Form submitted successfully");
              setState(false);
            } catch (error) {
              if (error instanceof AxiosError) {
                toast.error(error.response?.data.error);
                return;
              }
              toast.error("Some error occured, please try again");
            }
          })}
        >
          <div className="flex align-middle justify-between space-x-5">
            {/* Name */}
            <div className="flex flex-col align-middle space-y-1 w-full">
              <label
                htmlFor="name"
                className="text-white text-sm md:text-base font-medium ml-1"
              >
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full px-3 py-2 md:px-5 md:py-2 rounded-lg outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
                placeholder="Enter Your Name"
              />
              {errors.name && (
                <p
                  className="text-white tracking-wide text-xs bg-purple-600 py-1 px-3 w-fit rounded-xl"
                  style={{ marginTop: "10px" }}
                >
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col align-middle space-y-1 w-full">
              <label
                htmlFor="email"
                className="text-white text-sm md:text-base font-medium ml-1"
              >
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                className="w-full px-3 py-2 md:px-5 md:py-2 rounded-lg outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
                placeholder="Enter Your Email"
              />
              {errors.email && (
                <p
                  className="text-white tracking-wide text-xs bg-purple-600 py-1 px-3 w-fit rounded-xl"
                  style={{ marginTop: "10px" }}
                >
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex align-middle justify-between space-x-5">
            {/* Phone */}
            <div className="flex flex-col align-middle space-y-1 w-full">
              <label
                htmlFor="phone"
                className="text-white text-sm md:text-base font-medium ml-1"
              >
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                id="phone"
                className="w-full px-3 py-2 md:px-5 md:py-2 rounded-lg outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base"
                placeholder="Enter Your Phone"
              />
              {errors.phone && (
                <p
                  className="text-white tracking-wide text-xs bg-purple-600 py-1 px-3 w-fit rounded-xl"
                  style={{ marginTop: "10px" }}
                >
                  {errors.phone.message}
                </p>
              )}
            </div>
            {/* Services */}
            <div className="flex flex-col align-middle space-y-1 w-full">
              <label
                htmlFor="Services"
                className="text-white text-sm md:text-base font-medium ml-1"
              >
                Services
              </label>
              <select
                {...register("service_id")}
                id="services"
                className="w-full px-3 py-2 md:px-5 md:py-2 rounded-lg outline-none placeholder:text-sm md:placeholder:text-base appearance-none text-sm md:text-base"
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  hidden
                  className="text-gray-300 text-sm"
                >
                  select an option
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
                  className="text-white tracking-wide text-xs bg-purple-600 py-1 px-3 w-fit rounded-xl"
                  style={{ marginTop: "10px" }}
                >
                  {errors.service_id.message}
                </p>
              )}
            </div>
          </div>

          {/* requirements */}
          <div className="flex flex-col align-middle space-y-1 w-full">
            <label
              htmlFor="requirements"
              className="text-white text-sm md:text-base font-medium ml-1"
            >
              Software requirements
            </label>
            <textarea
              {...register("requirements")}
              rows={2}
              id="requirements"
              className="w-full px-3 py-2 md:px-5 md:py-2 rounded-lg outline-none text-sm md:text-base placeholder:text-sm md:placeholder:text-base appearance-none"
              placeholder="Enter Your Requirements"
              style={{ resize: "none" }}
            />
            {errors.requirements && (
              <p
                className="text-white tracking-wide text-xs bg-purple-600 py-1 px-3 w-fit rounded-xl"
                style={{ marginTop: "10px" }}
              >
                {errors.requirements.message}
              </p>
            )}
          </div>

          <div className="w-full flex justify-center align-middle pt-2 md:pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 w-fit font-semibold text-sm md:text-lg rounded-lg bg-white text-[#0788A5'] text-black hover:bg-black hover:text-white hover:ring-1 hover:ring-white disabled:bg-gray-300 disabled:cursor-wait transition-all duration-300 ease-in-out"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
