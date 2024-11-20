import ContactUsSection from "@/components/ContactUsPage/ContactUsSection";
import FAQSection from "@/components/HomePage/FAQ";
import GetInTouchSection from "@/components/HomePage/GetInTouch";
import PartnersSection from "@/components/HomePage/Partners";



export default function Example() {
  return (
    <main className="md:pb-10">
      <ContactUsSection />

      <FAQSection />

      <GetInTouchSection />

      <PartnersSection />
    </main>
  );
}
