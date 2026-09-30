import Link from "next/link";
import {
  Building2,
  Camera,
  Code,
  Laptop,
  Megaphone,
  PencilRuler,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { learningPaths } from "@/data";
import type { LearningPath } from "@/types";

const pathIcons: Record<LearningPath["iconName"], LucideIcon> = {
  "pencil-ruler": PencilRuler,
  code: Code,
  laptop: Laptop,
  "building-2": Building2,
  megaphone: Megaphone,
  camera: Camera,
};

export function LearningPaths() {
  return (
    <section className="w-full bg-surface-gray py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-heading leading-[1.2] tracking-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-5 max-w-3xl text-sm sm:text-base text-muted-body leading-[1.6]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-10">
          {learningPaths.map((path) => {
            const Icon = pathIcons[path.iconName];

            return (
              <Link
                key={path.id}
                href={path.href}
                className="group flex h-[167px] w-[167px] shrink-0 flex-col items-center justify-center gap-2 rounded-3xl border border-border-subtle bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-lime hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-lime text-dark-heading transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-sm font-bold text-dark-heading">
                  {path.title}
                </h3>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
