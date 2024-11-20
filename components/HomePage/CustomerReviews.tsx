import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const reviews: {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}[] = [
  {
    id: 1,
    name: "Ernest Smith",
    role: "Developer at Unixity",
    image: "/review@1.png",
    rating: 5,
    comment:
      "Outstanding dedication to excellence, exceptional support received. Impressive service!",
  },
  {
    id: 2,
    name: "Stella Smith",
    role: "Engineer at Unify",
    image: "/review@2.png",
    rating: 5,
    comment:
      "Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.",
  },
  {
    id: 3,
    name: "Thomas Smith",
    role: "Designer at Converta",
    image: "/review@3.png",
    rating: 5,
    comment:
      "I highly recommend this agency. Testing for our project was done everything top-notch",
  },
  {
    id: 4,
    name: "Ernest Smith",
    role: "Developer at Unixity",
    image: "/review@1.png",
    rating: 5,
    comment:
      "Outstanding dedication to excellence, exceptional support received. Impressive service!",
  },
  {
    id: 5,
    name: "Stella Smith",
    role: "Engineer at Unify",
    image: "/review@2.png",
    rating: 5,
    comment:
      "Expertise made all the difference, absolute pleasure to work with. Exceeded our expectations.",
  },
  {
    id: 6,
    name: "Thomas Smith",
    role: "Designer at Converta",
    image: "/review@3.png",
    rating: 5,
    comment:
      "I highly recommend this agency. Testing for our project was done everything top-notch",
  },
];

const CustomerReviewsSection = () => {
  return (
    <section className="pt-14 lg:py-20 block">
      <div className="flex justify-center align-middle items-center w-full">
        <h2 className="text-3xl text-center lg:text-4xl xl:text-5xl font-extrabold text-[#000333]">
          What our customers are saying
        </h2>
      </div>

      <div className="flex justify-between align-middle items-center overflow-x-hidden space-x-5 w-full max-w-full my-5 lg:my-16 reviews-container">
        {/* <div className="border border-[#0788A5] rounded-full p-2 lg:p-4 flex align-middle justify-center items-center cursor-pointer group hover:bg-[#0788A5] hover:text-white transition-all ease-in-out">
          <FaAngleLeft className="w-4 h-4 lg:w-6 lg:h-6 text-[#0788A5] group-hover:text-white" />
        </div> */}

        <div className="flex py-5 w-fit space-x-5 justify-evenly align-middle items-center CustomerReviews">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col space-y-2 lg:space-y-6 w-full min-w-[300px] lg:min-w-[350px] h-full min-h-[270px] lg:min-h-[300px] align-middle justify-start bg-[#F8FAFC] py-8 px-8 border border-[#E7E5EA] rounded-[40px] hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-300 transition-all duration-300 ease-in-out"
            >
              <div className="flex space-x-2 lg:space-x-3 h-full w-full align-middle justify-start">
                <div className="shrink-0 w-[70px] lg:w-[90px]">
                  <Image
                    alt={review.name}
                    src={review.image}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="static max-h-full"
                  />
                </div>

                <div className="flex flex-col space-y-1 lg:space-y-2 align-middle">
                  <h4 className="text-[#000333] text-lg lg:text-2xl font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-[#A7AFC5] font-medium text-base lg:text-xl truncate">
                    {review.role}
                  </p>

                  <div className="flex space-x-2 lg:space-x-3 align-middle justify-start">
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                  </div>
                </div>
              </div>

              <p className="text-[#818DAC] text-base lg:text-xl font-medium text-wrap overflow-ellipsis">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <div className="flex py-5 w-fit space-x-5 justify-evenly align-middle items-center CustomerReviews">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col space-y-2 lg:space-y-6 w-full min-w-[300px] lg:min-w-[350px] h-full min-h-[270px] lg:min-h-[300px] align-middle justify-start bg-[#F8FAFC] py-8 px-8 border border-[#E7E5EA] rounded-[40px] hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-300 transition-all duration-300 ease-in-out"
            >
              <div className="flex space-x-2 lg:space-x-3 h-full w-full align-middle justify-start">
                <div className="shrink-0 w-[70px] lg:w-[90px]">
                  <Image
                    alt={review.name}
                    src={review.image}
                    width={1000}
                    height={1000}
                    quality={100}
                    className="static max-h-full"
                  />
                </div>

                <div className="flex flex-col space-y-1 lg:space-y-2 align-middle">
                  <h4 className="text-[#000333] text-lg lg:text-2xl font-semibold">
                    {review.name}
                  </h4>
                  <p className="text-[#A7AFC5] font-medium text-base lg:text-xl truncate">
                    {review.role}
                  </p>

                  <div className="flex space-x-2 lg:space-x-3 align-middle justify-start">
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                    <FaStar className="w-4 h-4 text-[#FFC107]" />
                  </div>
                </div>
              </div>

              <p className="text-[#818DAC] text-base lg:text-xl font-medium text-wrap overflow-ellipsis">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="border border-[#0788A5] rounded-full p-2 lg:p-4 flex align-middle justify-center items-center cursor-pointer group hover:bg-[#0788A5] hover:text-white transition-all ease-in-out">
          <FaAngleRight className="w-4 h-4 lg:w-6 lg:h-6 text-[#0788A5] group-hover:text-white" />
        </div> */}
      </div>

      <div className="h-[3px] w-[75%] bg-[#F0EFEF] mx-auto"></div>
    </section>
  );
};

export default CustomerReviewsSection;
