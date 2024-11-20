export default function TestimonialDesign2() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 md:py-28 lg:py-[190px] lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="text-transparent text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text w-fit mx-auto">
          Testimonials
        </div>

        <figure className="mt-5 md:mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
