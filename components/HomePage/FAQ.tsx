import { faqs } from "@/lib/schema/faq";
import Collapsible from "../Collapsible";

const FAQSection = () => {
  return (
    <section className="container mx-auto py-14 lg:py-0">
      <div className="px-3 xl:px-20">
        <div className="flex flex-col space-y-3 lg:space-y-6 w-full justify-center align-middle items-center mb-8 lg:mb-14">
          <h4 className="text-[#FE765D] font-bold text-lg lg:text-2xl text-center ">
            Get extra benefits!
          </h4>

          <h2 className="text-[#000333] font-extrabold text-4xl xl:text-5xl text-center">
            Frequently asked qestions!
          </h2>
        </div>

        <div className="lg:px-[50px] xl:px-[100px]">
          {faqs.map((faq) => (
            <Collapsible key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
