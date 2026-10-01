"use client";

import Image from "next/image";
import { useState } from "react";
import { BarChart3, Filter, ListFilter, Shapes } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { CourseCard } from "@/components/ui/CourseCard";
import { categories, courses, creatorProfile } from "@/data";

const creatorCategories = categories.filter((category) => !category.isAction);

export default function CreatorsPage() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [category, setCategory] = useState("featured");

    const visibleCourses =
        category === "featured"
            ? courses
            : courses.filter((course) => course.category === category);

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <section className="relative overflow-hidden bg-primary-blue">
                <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0" />
                <Navbar />

                <Container>
                    <div className="relative z-10 flex min-h-[315px] flex-col justify-end pb-8 pt-24 sm:pb-11 sm:pt-28">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                            <Image
                                src={creatorProfile.image}
                                alt={creatorProfile.imageAlt}
                                width={64}
                                height={64}
                                className="h-16 w-16 rounded-2xl object-cover"
                                priority
                            />
                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                                        {creatorProfile.name}
                                    </h1>
                                    <span className="rounded-full bg-accent-lime px-3 py-1 text-[11px] font-semibold text-dark-heading">
                                        {creatorProfile.role}
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-white/80 sm:text-sm">
                                    {creatorProfile.tagline}
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-5xl text-xs leading-5 text-white/85 sm:mt-6 sm:text-sm sm:leading-6">
                            {creatorProfile.bio}
                        </p>

                        <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                            <div className="flex items-center gap-3">
                                <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-primary-blue">
                                    {creatorProfile.products}
                                </span>
                                <span className="rounded-full bg-white px-4 py-2 text-xs font-medium text-primary-blue">
                                    {creatorProfile.followers}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsFollowing((following) => !following)}
                                className="inline-flex h-9 w-fit items-center justify-center rounded-full bg-accent-lime px-5 text-xs font-semibold text-dark-heading transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-lime-hover"
                            >
                                {isFollowing ? "Following" : "Follow"}
                            </button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="flex-1 py-8 sm:py-10">
                <Container>
                    <div className="grid grid-cols-2 gap-2 border-y border-border-subtle py-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-3">
                        <div className="contents sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                            <button
                                type="button"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border-subtle bg-white px-3 text-xs font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray sm:h-12 sm:px-5 sm:text-sm"
                            >
                                <Filter className="h-4 w-4" />
                                Filter
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border-subtle bg-white px-3 text-xs font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray sm:h-12 sm:px-5 sm:text-sm"
                            >
                                <BarChart3 className="h-4 w-4" />
                                Level
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border-subtle bg-white px-3 text-xs font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray sm:h-12 sm:px-5 sm:text-sm"
                            >
                                <Shapes className="h-4 w-4" />
                                Category
                            </button>
                        </div>
                        <button
                            type="button"
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border-subtle bg-white px-3 text-xs font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray sm:h-12 sm:px-5 sm:text-sm"
                        >
                            <ListFilter className="h-4 w-4" />
                            Most relevant
                        </button>
                    </div>

                    <div className="-mx-4 mt-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
                        <div className="flex min-w-max items-center gap-3">
                            {creatorCategories.map((item) => (
                                <CategoryPill
                                    key={item.id}
                                    label={item.name}
                                    isActive={category === item.id}
                                    onClick={() => setCategory(item.id)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {visibleCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
