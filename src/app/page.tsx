import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { CourseShowcase } from "@/components/sections/CourseShowcase";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { GrowthFeature } from "@/components/sections/GrowthFeature";
import { CreatorFeature } from "@/components/sections/CreatorFeature";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <CourseShowcase />
      <LearningPaths />
      <GrowthFeature />
      <CreatorFeature />
      <CtaBanner />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
