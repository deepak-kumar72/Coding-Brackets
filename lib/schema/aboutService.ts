export interface AboutService {
  imagePath: string;
  title: string;
  subHeading: string;
  details: string;
}

export const aboutReactService: AboutService = {
  imagePath: "/ReactDevelopmentImage.png",
  title: "Why Choose ReactJS?",
  subHeading: "We deliver Results!",
  details:
    "ReactJS isn't just a library; it's a revolution in web development. Known for its speed, flexibility, and component-based architecture, ReactJS allows us to build modern web applications that engage users and drive conversions. Join the ReactJS revolution and experience the difference.",
};

export const detailsReactSevice: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Customized ReactJS Development",
    description:
      "We breathe oxygen into your ideas with tailor-made ReactJS solutions that align perfectly with your business objectives.",
  },
  {
    id: 1,
    title: "Responsive ReactJS UI/UX Design",
    description:
      "Your users deserve the best! We craft intuitive and User-Friendly interfaces plus seamless experiences that keep visitors engaged across all devices.",
  },
  {
    id: 1,
    title: "Single Page Applications (SPAs)",
    description:
      "Harness the potential of SPAs for quicker loading times and smoother navigation. Let's create an intuitive user experience.",
  },
  {
    id: 1,
    title: "Integration Expertise",
    description:
      "Seamlessly integrate ReactJS with backend technologies NodeJS/ Python, APIs, and third-party services to unlock endless possibilities.",
  },
  {
    id: 1,
    title: "Performance Optimization",
    description:
      "We don't just build websites; we optimize them for speed, scalability, and performance to ensure peak efficiency as well.",
  },
  {
    id: 1,
    title: "ReactJS Frontend Development",
    description:
      "We create theme-based Interface designs for applications or websites. Even perform Plugin Development and Migration for our potential clients.",
  },
  {
    id: 1,
    title: "ReactJS Testing",
    description:
      "With the ReactJS Testing environment, CodingBrackets ensures the development process and the results according to the demand of the customers.",
  },
];
