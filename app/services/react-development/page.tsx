import AboutServicePage from "@/components/AboutService";
import DeatilsServicePage from "@/components/DeatilsService";
import DevelopmentSection from "@/components/Development";
import PartnersSection from "@/components/HomePage/Partners";
import { aboutReactService, AboutService } from "@/lib/schema/aboutService";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

const ReactDevelopmentPage = async () => {
  let data = await prisma.services_pages.findFirst({
    where: {
      name: "React",
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

      {/* <ReactFeaturesSection features={reactFeatures} />

      <PortfolioSection />

      <OffsoreDevelopmentSolutionsSection />

      <WorkTestimonialsSection />

      <ContactInformationSection />

      <CustomerReviewsSection />

      <FAQSection />

      <GetInTouchSection /> */}

      <PartnersSection />
    </main>
  );
};

export const dynamic = "force-dynamic";

export default ReactDevelopmentPage;
