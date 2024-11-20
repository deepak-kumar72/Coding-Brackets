import CustomerReviewsSection from "@/components/HomePage/CustomerReviews";
import FAQSection from "@/components/HomePage/FAQ";
import GetInTouchSection from "@/components/HomePage/GetInTouch";
import PartnersSection from "@/components/HomePage/Partners";
import InProgressSection from "@/components/InProgress";
import TestimonialDesign from "@/components/TestimonialsPage/TestimonialDesign";
import TestimonialDesign2 from "@/components/TestimonialsPage/TestimonialDesign2";
import TestimonialDesign3 from "@/components/TestimonialsPage/TestimonialDesign3";
import TestimonialDesign4 from "@/components/TestimonialsPage/TestimonialDesign4";
import TestimonialDesign5 from "@/components/TestimonialsPage/TestimonialDesign5";

const TestimonialsPage = () => {
  if (false) {
    return <InProgressSection />;
  }

  return (
    <>
      <TestimonialDesign2 />

      <TestimonialDesign />

      <TestimonialDesign4 />

      <TestimonialDesign3 />

      <TestimonialDesign5 />

      <CustomerReviewsSection />

      <FAQSection />

      <GetInTouchSection />

      <PartnersSection />
    </>
  );
};

export default TestimonialsPage;
