import { ContactSection } from "@/components/contact-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ReviewsSection } from "@/components/reviews-section";
import { Header } from "@/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <ExpertiseSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
    </>
  );
}
