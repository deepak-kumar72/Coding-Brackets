import AboutServicePage from "@/components/AboutService";
import DeatilsServicePage from "@/components/DeatilsService";
import DevelopmentSection from "@/components/Development";
import PartnersSection from "@/components/HomePage/Partners";
import { AboutService } from "@/lib/schema/aboutService";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Reliable WordPress Website Services – Design, Development, & Maintenance",
  description:
    "From design to maintenance, we provide complete WordPress website services to help your business thrive online. Enjoy seamless performance and support. Get started now!",
};

const WordPressDevelopmentPage = async () => {
  let data = await prisma.services_pages.findFirst({
    where: {
      name: "Wordpress",
    },
  });

  if (!data) {
    return notFound();
  }

  data.description = data.description.replace(
    "contenteditable",
    "aria-readonly"
  );

  const aboutService: AboutService = {
    title: data.title,
    subHeading: data.sub_title,
    details: data.short_description,
    imagePath: data.banner_img,
  };

  return (
    <main className="max-w-[100vw] overflow-x-hidden">
      <DevelopmentSection title={`${data?.name} Development`} />

      <AboutServicePage aboutService={aboutService} />

      <DeatilsServicePage details={data.description} />

      <PartnersSection />
    </main>
  );
};

export const dynamic = "force-dynamic";

export default WordPressDevelopmentPage;
