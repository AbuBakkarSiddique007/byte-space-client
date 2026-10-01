import Image from "next/image";
import Link from "next/link";
import { Star, BookOpen, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data";
import type { Course } from "@/types";
import { cn } from "@/lib/utils";

const thumbnailGradients: Record<string, string> = {
  "ui-ux-design": "from-primary-blue via-primary-blue to-primary-blue-hover",
  "graphic-design": "from-accent-lime-hover via-accent-lime to-accent-lime",
  "data-science": "from-dark-heading via-dark-heading to-primary-blue",
  productivity: "from-primary-blue via-primary-blue-hover to-dark-heading",
  marketing: "from-accent-lime via-accent-lime to-primary-blue",
  freelance: "from-dark-heading via-primary-blue to-accent-lime",
};

const metaPillClass =
  "inline-flex items-center gap-1 rounded-full bg-linear-to-b from-white/75 to-white/40 px-2.5 py-1 text-xs font-semibold text-dark-heading shadow-sm shadow-black/5 backdrop-blur-md backdrop-saturate-150";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  const categoryName =
    categories.find((item) => item.id === course.category)?.name ?? course.category;
  const gradient =
    thumbnailGradients[course.category] ?? thumbnailGradients["ui-ux-design"];

  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-3xl border border-border-subtle bg-white",
          "shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
          className,
        )}
      >
        <div className="relative h-44 w-full overflow-hidden bg-surface-gray">
          {course.imageThumbnail ? (
            <Image
              src={course.imageThumbnail}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className={cn("absolute inset-0 bg-linear-to-br", gradient)}>
              <span
                aria-hidden
                className="absolute -right-2 -bottom-8 text-[7rem] leading-none font-extrabold text-white/20 select-none"
              >
                {course.title.charAt(0).toUpperCase()}
              </span>
              <span className="absolute top-4 left-4 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                {categoryName}
              </span>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/35 to-transparent" />

          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
            <span className={metaPillClass}>
              <BookOpen className="h-3 w-3" />
              {course.lessonsCount} Lessons
            </span>
            <span className={metaPillClass}>
              <Clock className="h-3 w-3" />
              {course.duration}
            </span>
            <span className={metaPillClass}>
              <MessageCircle className="h-3 w-3" />
              {course.commentsCount}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold leading-snug text-dark-heading line-clamp-2 flex-1">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <span className="text-sm font-semibold text-dark-heading">
                {course.rating.toFixed(1)}
              </span>
              <Star className="h-3.5 w-3.5 fill-[#CED0D3] text-[#CED0D3]" />
            </div>
          </div>

          <p className="text-xs text-muted-body">
            by{" "}
            <span className="font-medium text-[#003BE2]">{course.author.name}</span>
          </p>

          <div className="flex items-center gap-2.5 mt-auto">
            <Badge
              variant="secondary"
              className="rounded-full bg-surface-gray text-muted-body text-xs font-semibold px-3 py-1"
            >
              <Image
                src="/assets/level.png"
                alt=""
                width={13}
                height={14}
                className="h-3 w-auto"
              />
              {course.level}
            </Badge>

            <Image
              src="/assets/Auto Layout Horizontal.png"
              alt="Enrolled students"
              width={128}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          <div className="h-px bg-border-subtle" />

          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-primary-blue">
              ${course.price}
            </span>
            <span className="text-sm text-muted-body">/{course.billingType}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
