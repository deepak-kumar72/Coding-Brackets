import Image from "next/image";

const cbLogos: { id: number; icon: string; name: string }[] = [
  { id: 9, icon: "/techLogos/reactjs.svg", name: "React Js" },
  { id: 11, icon: "/techLogos/vuejs.svg", name: "Vue Js" },
  { id: 1, icon: "/techLogos/angularjs.svg", name: "Angular Js" },
  { id: 7, icon: "/techLogos/nodejs.svg", name: "Node Js" },
  { id: 6, icon: "/techLogos/nextjs.svg", name: "Next Js" },
  { id: 4, icon: "/techLogos/laravel.svg", name: "Laravel" },
  { id: 13, icon: "/techLogos/wordpress.svg", name: "Wordpress" },
  // { id: 2, icon: "/techLogos/drupal.svg", name: "Drupal" },
  { id: 3, icon: "/techLogos/joomla.svg", name: "Joomla" },
  { id: 5, icon: "/techLogos/magento.svg", name: "Magento" },
  { id: 8, icon: "/techLogos/php.svg", name: "Php" },
  { id: 10, icon: "/techLogos/shopify.svg", name: "Shopify" },
  { id: 12, icon: "/techLogos/woocommerce.svg", name: "Woo Commerce" },
];

const TechnologiesSection = () => {
  return (
    <section className="container mx-auto p-3">
      <div className="flex flex-col space-y-5 lg:space-y-8 align-middle justify-start items-center py-7 lg:py-10 mb-10 xl:mb-0">
        <div className="flex flex-col space-y-3 lg:space-y-6 align-middle justify-start items-center mb-3 lg:mb-5">
          <h4 className="text-[#FE765D] font-extrabold text-lg xl:text-xl 2xl:text-2xl">
            Expertise in Technologies!
          </h4>

          <h2 className="text-[#000333] font-bold text-4xl lg:text-5xl text-center align-middle items-center">
            Technologies we work with
          </h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center w-full min-h-max overflow-y-visible gap-3 px-3 lg:gap-x-3 lg:gap-y-5 xl:gap-x-5 xl:gap-y-6 lg:px-28"
        >
          {cbLogos.map((logo) => (
            <div
              key={logo.id}
              className="self-center object-contain group w-full h-full bg-[#F8FAFC] border border-[#E7E5EA] rounded-lg hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-300 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col space-y-3 max-w-full h-full align-middle justify-center items-center p-5 object-scale-down">
                <Image
                  width={1000}
                  height={1000}
                  quality={100}
                  style={{ position: "static" }}
                  src={logo.icon}
                  alt={logo.name}
                  className="max-w-none w-[60%] h-auto "
                />

                <h4 className="text-[#000333] font-bold text-xl text-center group-hover:text-[#0788A5] transition-all duration-300 ease-in-out">
                  {logo.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
