import Quotes from "@/components/svg/Quotes";
import Image from "next/image";

const TestimonialDesign = () => {
  return (
    <section className="bg-[#111827] md:h-[500px] overflow-y-visible py-10 md:py-0">
      <div className="container mx-auto flex align-middle justify-around overflow-y-visible">
        <div className="hidden md:block relative h-[600px] md:w-[40%] lg:w-[30%] overflow-y-visible">
          <Image
            src={"/TestimonialImg.avif"}
            alt="Testimonial"
            fill
            className="h-full w-full min-w-full object-cover rounded-[25px] z-[9999]"
            style={{ top: "-45px", left: "30px" }}
          />
        </div>

        <div className="md:w-[70%] lg:w-[60%] px-10 md:pl-20 lg:px-20 py-10 md:py-12 flex flex-col align-middle md:h-[70%] md:mt-[70px] lg:mt-[50px] xl:mt-[70px] relative">
          <p className="text-white font-semibold text-xl md:text-2xl lg:text-3xl">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at
            porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor
            posuere. Nunc eu scelerisque interdum eget tellus non nibh
            scelerisque bibendum.
          </p>

          <div className="text-white font-extrabold text-lg mt-7">
            Judith Black
          </div>
          <div className="text-[#9ca3af] font-normal text-base mt-1">
            CEO of Workcation
          </div>

          <Quotes className="absolute w-[170px] h-[170px] -top-[20px] left-0 stroke-white/20" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialDesign;
