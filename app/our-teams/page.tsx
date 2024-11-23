import DevelopmentSection from "@/components/Development";
import CustomerReviewsSection from "@/components/HomePage/CustomerReviews";
import FAQSection from "@/components/HomePage/FAQ";
import GetInTouchSection from "@/components/HomePage/GetInTouch";
import PartnersSection from "@/components/HomePage/Partners";
import Image from "next/image";


const teams: { id: number; name: string; role: string; image: string }[] = [
  {
    id: 1,
    name: "Rajesh Chauhan",
    role: "Founder",
    image: "/teams-7.png",
  },
 
  {
    id: 2,
    name: "Ranjan Chatterjee",
    role: "Server & Technical Head",
    image: "/teams-6.png",
  },
  
  {
    id: 3,
    name: "Balbeer Verma",
    role: "Web Developer",
    image: "/teams-3.png",
  },
  {
    id: 4,
    name: "Garima Dubey",
    role: "Business Analyst",
    image: "/teams-2.jpg",
  },
  {
    id: 5,
    name: "Alekh Banshwar",
    role: "Full Stack Developer",
    image: "teams-8.jpg",
  },
  {
    id: 6,
    name: "Deepak Kumar kushwaha",
    role: "Web Developer",
    image: "/teams-7.jpg",
  }
];



const TeamsPage = () => {
  return (
    <>
    
   
    <section className="">
      <DevelopmentSection title="Our Teams" />

      <div className="container mx-auto my-20 px-3 2xl:px-20">
        {/* <div className="flex flex-col align-middle items-center justify-center space-y-6">
          <h3 className="text-4xl font-extrabold text-[#000333] text-start w-full">
            Our team
          </h3>
          <p className="text-lg font-medium text-[#7a7a7a] text-start w-full">
            We're a dynamic group of individuals who are passionate about what
            we do
            <br /> and dedicated to delivering the best results for our clients.
          </p>
        </div> */}

        <div className="grid lg:grid-cols-2 place-items-center xl:grid-cols-3 gap-y-16 lg:gap-y-20 gap-x-16 mt-20">
          {teams.map((member) => (
            <div
              key={member.id}
              className="group p-4 rounded-[20px] border border-gray-200/50 w-fit bg-gray-500/5 backdrop-blur-md shadow-inner hover:bg-[#171717] transition-colors duration-[400ms] ease-in-out"
            >
              <div className="flex flex-col space-y-8 min-h-max">
                <Image
                  alt={member.name}
                  src={member.image}
                  width={384}
                  height={256}
                  quality={100}
                  loading="eager"
                  className=" rounded-2xl w-[384px] h-[256px] object-cover group-hover:ring-2 group-hover:ring-[#0788A5] ring-offset-[10px] group-hover:scale-105 transition-all duration-[400ms] ease-in-out"
                />

                <div className="">
                  <h5 className="text-xl font-bold text-[#171717] group-hover:text-white transition-all duration-[400ms] ease-in-out">
                    {member.name}
                  </h5>
                  <p className="text-[rgb(75,85,99)] text-base font-medium mt-1 mb-5 group-hover:text-gray-300 transition-all duration-[400ms] ease-in-out">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CustomerReviewsSection />

      <FAQSection />

      <GetInTouchSection />

      <PartnersSection />
    </section>
    </>
  );
};

export default TeamsPage;
