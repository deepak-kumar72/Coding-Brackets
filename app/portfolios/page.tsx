import DevelopmentSection from "@/components/Development";
import CustomerReviewsSection from "@/components/HomePage/CustomerReviews";
import FAQSection from "@/components/HomePage/FAQ";
import GetInTouchSection from "@/components/HomePage/GetInTouch";
import PartnersSection from "@/components/HomePage/Partners";
import PortfolioGridSection from "@/components/Portfolios/PortfolioGrid";
import prisma from "@/prisma/client";



const PortfoliosPage = async () => {
  const portfolios = await prisma.portfolio.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
  const categories = await prisma.project_category.findMany({});

  return (
    <section className="">
      <DevelopmentSection title="Our Portfolios" />

      <PortfolioGridSection portfolios={portfolios} categories={categories} />

      <CustomerReviewsSection />

      <FAQSection />

      <GetInTouchSection />

      <PartnersSection />
    </section>
  );
};

export const dynamic = "force-dynamic";

export default PortfoliosPage;
