import { serviceFeatures } from "@/lib/schema/serviceFeatures";
import Image from "next/image";
import Link from "next/link";

const ServiceFeaturesPage = () => {
  return (
    <section className="container mx-auto py-16 px-3">
      <div className="flex flex-col space space-y-3 xl:space-y-6 items-center align-middle justify-center text-center mb-6 xl:mb-10">
        <h3 className="text-[#FE765D] font-extrabold text-lg xl:text-2xl">
          Comprehensive Service Offerings
        </h3>

        <h2 className="text-[#000333] font-extrabold text-4xl xl:text-5xl tracking-normal">
          What Included With Our Services
        </h2>
      </div>

      <div className="space-y-5">
        {serviceFeatures.map((feature) => (
          <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:px-[140px] py-8 xl:py-16 place-items-center gap-10"
            key={feature.id}
          >
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className={`flex flex-col space-y-4 lg:space-y-7 align-middle justify-center px-2 ${
                feature.id % 2 === 0 ? "order-last" : ""
              }`}
            >
              <h2 className="text-[#000333] font-extrabold text-3xl xl:text-4xl text-wrap lg:leading-snug">
                {feature.title}
              </h2>
              <p className="text-[#7A7A7A] font-medium text-base xl:text-lg ">
                {feature.description}
              </p>

              <Link href={feature.href} className="w-fit">
                <button className="bg-[#000333] max-w-fit px-5 py-2 lg:py-3 rounded-xl text-white font-bold text-base lg:text-xl text-center align-middle items-center justify-center hover:bg-transparent hover:text-[#000333] hover:ring-1 hover:ring-[#000333] transition-all ease-in-out">
                  Get Started
                </button>
              </Link>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="relative grid place-items-center h-full w-auto order-first lg:order-none px-8 lg:px-0"
            >
              <Image
                alt={feature.title}
                src={feature.image}
                quality={100}
                style={{ position: "static" }}
                className="h-full max-h-full lg:my-auto self-center w-auto z-10"
                width={1000}
                height={1000}
              />

              {feature.id % 2 !== 0 && (
                <Image
                  alt=""
                  src={"/Ellipse1.png"}
                  style={{
                    top: "-120px",
                    left: "-140px",
                    position: "absolute",
                    zIndex: -99,
                  }}
                  className="w-[900px] h-[700px] max-w-none"
                  width={1000}
                  height={1000}
                />
              )}

              {feature.id % 2 === 0 && (
                <Image
                  alt=""
                  src={"/Ellipse2.png"}
                  style={{
                    top: "-120px",
                    left: "-350px",
                    position: "absolute",
                    zIndex: -99,
                  }}
                  className="w-[900px] h-[700px] max-w-none"
                  width={1000}
                  height={1000}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeaturesPage;
