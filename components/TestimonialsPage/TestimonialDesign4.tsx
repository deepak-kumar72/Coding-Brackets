const ratings = [1, 2, 3, 4, 5];

const TestimonialDesign4 = () => {
  return (
    <section className="container mx-auto pt-[50px] md:pt-[130px] lg:pt-[180px] px-3 md:px-0">
      <div className="flex flex-col align-middle justify-center md:w-[80%] mx-auto border-2 border-[#E7E5EA] p-7 md:py-16 md:px-14 rounded-3xl">
        <div className="flex align-middle space-x-1 md:space-x-2">
          {ratings.map((rating) => (
            <svg
              key={rating}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="rgb(79 70 229)"
              aria-hidden="true"
              className="w-5 h-5 md:w-8 md:h-8"
            >
              <path
                fill-rule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clip-rule="evenodd"
              ></path>
            </svg>
          ))}
        </div>

        <div className="text-black font-semibold text-xl md:text-3xl mt-3 md:mt-9">
          “Qui dolor enim consectetur do et non ex amet culpa sint in ea non
          dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip.
          Amet elit laborum culpa irure incididunt adipisicing culpa amet
          officia exercitation. Eu non aute velit id velit Lorem elit anim
          pariatur.”
        </div>

        <div className="text-black font-extrabold text-base md:text-lg mt-5 md:mt-9">
          Judith Black
        </div>
        <div className="text-[#9ca3af] font-normal text-sm md:text-base mt-1">
          CEO of Workcation
        </div>
      </div>
    </section>
  );
};

export default TestimonialDesign4;
