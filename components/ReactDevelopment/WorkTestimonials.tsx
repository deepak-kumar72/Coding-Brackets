const details: { id: number; count: string; title: string }[] = [
  { id: 1, title: "Active Clients", count: "330 +" },
  { id: 2, title: "Projects Done", count: "850 +" },
  { id: 3, title: "Team Advisor", count: "25 +" },
  { id: 4, title: "Glorious Years", count: "10 +" },
];

const WorkTestimonialsSection = () => {
  return (
    <section className="container mx-auto px-3 lg:px-0 pb-10">
      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row align-middle justify-between items-center lg:px-28 lg:pb-16">
        {details.map((detail) => (
          <div
            key={detail.id}
            className={`flex flex-col space-y-2 lg:space-y-4 w-fit lg:w-full items-center h-full align-middle py-6 lg:py-2 px-6 ${
              detail.id === details.length
                ? ""
                : "border-b-2 lg:border-b-0 lg:border-r-2 border-[#DEDEDE]"
            }`}
          >
            <h2 className="text-[#000333] font-extrabold text-6xl lg:text-5xl xl:text-6xl">
              {detail.count}
            </h2>
            <h4 className="text-[#FE765D] font-bold text-lg pr-5">
              {detail.title}
            </h4>
          </div>
        ))}
      </div>
      <div className="border-b-2 border-[#F0EFEF] w-[70%] mx-auto" />
    </section>
  );
};

export default WorkTestimonialsSection;
