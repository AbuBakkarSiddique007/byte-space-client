import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { CourseShowcase } from "@/components/sections/CourseShowcase";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <HeroSection />
      <CourseShowcase />
    </main>
  );
}
