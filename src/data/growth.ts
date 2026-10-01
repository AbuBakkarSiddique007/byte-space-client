import type { SplitFeature } from "@/types";

export const growthFeature: SplitFeature = {
  id: "growth",
  headline: "Your Path to Professional Growth Starts Here!",
  paragraph:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
  image: "/assets/feature-growth.png",
  imageAlt:
    "Student with a laptop alongside a course card showing 55 percent progress",
  stats: [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ],
};
