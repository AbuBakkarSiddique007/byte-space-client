"use client";

import { useMemo, useState } from "react";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { CourseCard } from "@/components/ui/CourseCard";
import { Container } from "@/components/layout/Container";
import { categories, courses } from "@/data";
import { SearchX } from "lucide-react";

const FEATURED_ID = "featured";
const ROWS = [1, 2, 3] as const;

export function CourseShowcase() {
  const [activeCategory, setActiveCategory] = useState(FEATURED_ID);

  const rows = useMemo(
    () => ROWS.map((row) => categories.filter((item) => item.row === row)),
    []
  );

  const visibleCourses = useMemo(
    () =>
      activeCategory === FEATURED_ID
        ? courses
        : courses.filter((course) => course.category === activeCategory),
    [activeCategory]
  );

  const activeName =
    categories.find((item) => item.id === activeCategory)?.name ?? "Featured";

  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark-heading leading-[1.2] tracking-tight">
            Discover Your Passion, <br /> Build Your Skills
          </h2>
          <p className="mt-5 max-w-3xl text-sm sm:text-base text-muted-body leading-[1.6]">
            At Bytespace Courses, we bring you closer to life-changing knowledge.
            Explore a variety of courses across different fields, from technology
            to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 sm:mt-12 sm:gap-3">
          {rows.map((row, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-center gap-2"
              role="group"
              aria-label={`Category filters row ${index + 1}`}
            >
              {row.map((category) => (
                <CategoryPill
                  key={category.id}
                  label={category.name}
                  isAction={category.isAction}
                  isActive={!category.isAction && category.id === activeCategory}
                  onClick={
                    category.isAction ? undefined : () => setActiveCategory(category.id)
                  }
                />
              ))}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs font-medium text-muted-body sm:mt-8">
          Showing {visibleCourses.length}{" "}
          {visibleCourses.length === 1 ? "course" : "courses"} in {activeName}
        </p>

        {visibleCourses.length > 0 ? (
          <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border-subtle bg-surface-gray px-6 py-20 text-center">
            <SearchX className="h-8 w-8 text-muted-body" />
            <p className="text-base font-semibold text-dark-heading">
              No courses in {activeName} yet
            </p>
            <p className="max-w-sm text-sm text-muted-body">
              We are adding new courses to this category. Try another filter in
              the meantime.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
