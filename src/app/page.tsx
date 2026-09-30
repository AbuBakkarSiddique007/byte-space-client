import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { CourseShowcase } from "@/components/sections/CourseShowcase";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <CourseShowcase />
      <LearningPaths />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
