const solutions: { id: number; title: string }[] = [
  { id: 1, title: "State of the art IT infrastructure" },
  { id: 2, title: "500+ clients across 20 countries" },
  { id: 3, title: "Technology Solutions" },
  { id: 4, title: "Software Development" },
  { id: 5, title: "Mobile application Development" },
  { id: 6, title: "Enterprise Application Development" },
  { id: 7, title: "E-Commerce Solutions" },
  { id: 8, title: "IT Outsourcing Solutions" },
];

const OffsoreDevelopmentSolutionsSection = () => {
  return (
    <section className="container mx-auto my-12 lg:my-20">
      <div
        className="w-full bg-no-repeat bg-center bg-cover px-3 lg:px-10 xl:px-16 pb-12 rounded-[30px]"
        style={{ backgroundImage: "url(/ServicesSectionBg.png)" }}
      >
        <div className="flex flex-col space-y-3 lg:space-y-5 text-center py-8 lg:py-14 align-middle justify-center">
          <h2 className="text-[#000333] font-extrabold text-3xl lg:text-5xl ">
            Offshore Development Solutions
          </h2>

          <p className="text-[#7A7A7A] font-medium text-lg lg:text-2xl ">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and
            <br /> publishing industries for previewing layouts and visual
            mockups
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-7 lg:px-0 gap-8 lg:gap-x-8 auto-rows-min">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`flex flex-col shrink-0 lg:h-full lg:w-full xl:h-[350px] space-y-7 align-middle justify-center items-center px-5 py-14 lg:p-12 xl:py-16 bg-white bg-no-repeat bg-cover bg-center rounded-3xl lg:max-h-[88%] hover:shadow-xl hover:shadow-cyan-400 hover:-translate-y-2 transition-all duration-300 ease-in-out ${
                solution.id % 2 === 0 ? "lg:place-self-end" : ""
              }`}
              style={{
                backgroundImage: `url(/offsoreDevSol@${solution.id}.png)`,
              }}
            >
              <div className="h-16 w-16 bg-[#0788A5] rounded-full flex justify-center align-middle items-center shrink-0 text-white text-3xl font-extrabold">
                {solution.id}
              </div>

              <h4 className="text-[#000333] font-bold shrink-0 text-2xl text-center">
                {solution.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffsoreDevelopmentSolutionsSection;
