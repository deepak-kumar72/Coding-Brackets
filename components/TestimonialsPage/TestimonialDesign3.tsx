import Image from "next/image";
import Quotes from "../svg/Quotes";

const TestimonialDesign3 = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-3 md:px-6 py-14 md:py-24 xl:py-[190px] lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="container mx-auto flex w-full lg:space-x-10 align-middle justify-center">
        <Image
          src={"/Testimonial3.avif"}
          alt="testimonial"
          style={{ position: "static" }}
          quality={100}
          width={1000}
          height={1000}
          className="hidden md:block md:w-[35%] lg:w-[25%] h-fit rounded-2xl place-self-center"
        />

        <div className="md:w-[60%] pl-10 pr-5 lg:px-20 pt-12 md:py-12 flex flex-col align-middle relative">
          <p className="text-black font-semibold text-xl md:text-3xl">
            Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco
            consectetur ipsum elit consequat. Elit sunt proident ea nulla ad
            nulla dolore ad pariatur tempor non. Sint veniam minim et ea.
          </p>

          <div className="text-black font-extrabold text-base md:text-lg mt-5 md:mt-7">
            Judith Black
          </div>
          <div className="text-black/60 font-normal text-sm md:text-base mt-1">
            CEO of Workcation
          </div>

          <Quotes className="absolute w-[170px] h-[170px] -top-[20px] left-0 stroke-black/10" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialDesign3;
