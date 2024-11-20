import AboutCompanyPage from "@/components/HomePage/AboutCompany";
import ContactFormSection from "@/components/HomePage/ContactForm";
import CustomerReviewsSection from "@/components/HomePage/CustomerReviews";
import FAQSection from "@/components/HomePage/FAQ";
import GetInTouchSection from "@/components/HomePage/GetInTouch";
import HomePageHeroSection from "@/components/HomePage/HomePageHeroSection";
import PartnersSection from "@/components/HomePage/Partners";
import ServiceFeaturesPage from "@/components/HomePage/ServiceFeatures";
import ServicesPage from "@/components/HomePage/Services";
import TechnologiesSection from "@/components/Technologies";


export default function Home() {
  return (
    <main className="max-w-[100vw] overflow-x-hidden">
      <HomePageHeroSection />

      <TechnologiesSection />

      <AboutCompanyPage />

      <ServicesPage />

      <ServiceFeaturesPage />

      <ContactFormSection />

      <CustomerReviewsSection />

      <FAQSection />

      <GetInTouchSection />

      <PartnersSection />
    </main>
  );
}
