import { reactFeatures } from "@/lib/schema/features";

const ReactFeaturesSection = ({
  features,
}: {
  features: typeof reactFeatures;
}) => {
  return (
    <section className="bg-[#F8FAFC] px-3 lg:px-0">
      <div className="container mx-auto py-10 lg:pt-16 lg:px-12 lg:pb-12">
        <div className="flex flex-col align-middle justify-center items-center">
          <h2 className="text-[#000333] font-extrabold text-4xl lg:text-5xl text-center leading-snug tracking-normal">
            Why Your Business Should Use <br /> React Web Design
          </h2>

          <p className="text-[#7A7A7A] text-lg lg:text-xl font-medium text-center my-2 lg:my-6">
            Become Easily Found Online With a Site Optimized for Search
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-7">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col align-middle justify-center bg-white p-7 lg:p-9 rounded-2xl h-full"
            >
              <div className="p-5 rounded-2xl bg-[#AEF0FF] w-fit">
                {feature.Icon}
              </div>
              <h5 className="text-[#000333] font-semibold text-xl pt-5 lg:pt-7">
                {feature.title}
              </h5>

              <p className="text-[#7A7A7A] font-medium text-base pt-2">
                {feature.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReactFeaturesSection;
