"use client";

import { useMemo, useState } from "react";
import {
    BarChart3,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Filter,
    ListFilter,
    Search,
    Shapes,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { CategoryPill } from "@/components/ui/CategoryPill";
import { CourseCard } from "@/components/ui/CourseCard";
import { categories, courses } from "@/data";

const allCategories = categories.filter((category) => !category.isAction);
const PAGE_SIZE = 3;

export default function CoursesPage() {
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("featured");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredCourses = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        return courses.filter((course) => {
            const matchesCategory =
                category === "featured" || course.category === category;
            const matchesQuery =
                !normalizedQuery ||
                course.title.toLowerCase().includes(normalizedQuery) ||
                course.author.name.toLowerCase().includes(normalizedQuery);

            return matchesCategory && matchesQuery;
        });
    }, [category, query]);

    const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
    const visibleCourses = filteredCourses.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    );

    const handleCategoryChange = (value: string) => {
        setCategory(value);
        setCurrentPage(1);
    };

    const handleQueryChange = (value: string) => {
        setQuery(value);
        setCurrentPage(1);
    };

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <section className="relative min-h-[360px] overflow-hidden bg-primary-blue">
                <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0" />
                <Navbar />

                <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-4 pb-10 pt-28 text-center sm:px-6">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[36px]">
                        Find Your Next Course
                    </h1>

                    <form
                        className="mt-8 flex w-full max-w-[624px] flex-col gap-3 sm:flex-row sm:items-center"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <label className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-6 text-left shadow-md">
                            <Search className="h-5 w-5 shrink-0 text-muted-body" />
                            <span className="sr-only">Search courses</span>
                            <input
                                type="search"
                                value={query}
                                onChange={(event) => handleQueryChange(event.target.value)}
                                placeholder="Search"
                                className="w-full min-w-0 bg-transparent text-sm text-dark-heading outline-none placeholder:text-muted-body"
                            />
                        </label>

                        <label className="relative flex h-[52px] shrink-0 items-center rounded-full bg-accent-lime text-dark-heading shadow-md sm:w-[146px]">
                            <span className="sr-only">Filter by category</span>
                            <select
                                value={category}
                                onChange={(event) => handleCategoryChange(event.target.value)}
                                className="h-full w-full cursor-pointer appearance-none rounded-full bg-transparent px-6 pr-10 text-left text-sm font-semibold outline-none"
                            >
                                <option value="featured">Courses</option>
                                {allCategories.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-5 h-5 w-5" />
                        </label>
                    </form>
                </div>
            </section>

            <section className="flex-1 py-14 sm:py-20">
                <Container>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-y border-border-subtle py-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <button
                                type="button"
                                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-subtle bg-white px-5 text-sm font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray"
                            >
                                <Filter className="h-4 w-4" />
                                Filter
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-subtle bg-white px-5 text-sm font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray"
                            >
                                <BarChart3 className="h-4 w-4" />
                                Level
                            </button>
                            <button
                                type="button"
                                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-subtle bg-white px-5 text-sm font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray"
                            >
                                <Shapes className="h-4 w-4" />
                                Category
                            </button>
                        </div>
                        <button
                            type="button"
                            className="inline-flex h-12 items-center gap-2 rounded-full border border-border-subtle bg-white px-5 text-sm font-medium text-dark-heading shadow-sm transition-colors hover:bg-surface-gray"
                        >
                            <ListFilter className="h-4 w-4" />
                            Most relevant
                        </button>
                    </div>

                    <div className="-mx-4 mt-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
                        <div className="flex min-w-max items-center gap-3">
                            {allCategories.map((item) => (
                                <CategoryPill
                                    key={item.id}
                                    label={item.name}
                                    isActive={category === item.id}
                                    onClick={() => handleCategoryChange(item.id)}
                                />
                            ))}
                        </div>
                    </div>

                    {visibleCourses.length > 0 ? (
                        <>
                            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {visibleCourses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                            <nav className="mt-12 flex items-center justify-center gap-4 sm:gap-7" aria-label="Course pagination">
                                <button
                                    type="button"
                                    aria-label="Previous page"
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-white text-dark-heading shadow-sm transition-colors hover:border-dark-heading hover:bg-surface-gray disabled:cursor-not-allowed disabled:text-muted-body disabled:opacity-100"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                                    <button
                                        key={page}
                                        type="button"
                                        aria-label={`Page ${page}`}
                                        aria-current={currentPage === page ? "page" : undefined}
                                        onClick={() => setCurrentPage(page)}
                                        className={`inline-flex h-10 min-w-6 items-center justify-center rounded-md px-1 text-sm transition-colors ${currentPage === page
                                            ? "font-bold text-primary-blue"
                                            : "font-medium text-muted-body hover:bg-surface-gray hover:text-dark-heading"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    type="button"
                                    aria-label="Next page"
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-subtle bg-white text-dark-heading shadow-sm transition-colors hover:border-dark-heading hover:bg-surface-gray disabled:cursor-not-allowed disabled:text-muted-body disabled:opacity-100"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </nav>
                        </>
                    ) : (
                        <div className="mt-8 rounded-3xl border border-dashed border-border-subtle bg-surface-gray px-6 py-20 text-center">
                            <p className="text-base font-semibold text-dark-heading">
                                No courses found
                            </p>
                            <p className="mt-2 text-sm text-muted-body">
                                Try a different search or category.
                            </p>
                        </div>
                    )}
                </Container>
            </section>

            <Footer />
        </main>
    );
}
