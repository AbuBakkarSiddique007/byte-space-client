"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    BookOpen,
    Check,
    Play,
    Share2,
    Star,
    Users,
    Video,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CourseTabs } from "./CourseTabs";
import { getCourseDetailContent } from "@/data";
import type { Course } from "@/types";

type DetailTab = "about" | "lessons" | "reviews";

const sneakPeekImages = [
    "/assets/grid-card-img-one.jpg",
    "/assets/grid-card-img-two.jpg",
    "/assets/grid-card-img-five.jpg",
    "/assets/grid-card-img-three.jpg",
];

interface CourseDetailsProps {
    course: Course;
}

export function CourseDetails({ course }: CourseDetailsProps) {
    const [activeTab, setActiveTab] = useState<DetailTab>("about");
    const [reviewFilter, setReviewFilter] = useState<number | null>(null);
    const content = getCourseDetailContent(course);
    const visibleReviews = content.reviews.filter(
        (review) => reviewFilter === null || review.rating === reviewFilter,
    );

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <section className="relative overflow-hidden bg-white pb-12">
                <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-primary-blue sm:h-[650px] md:h-[720px] lg:h-[760px]" />
                <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-x-0 top-0 h-[500px] sm:h-[650px] md:h-[720px] lg:h-[760px]" />
                <Navbar />

                <Container>
                    <div className="relative z-10 pt-28 pb-8 sm:pt-32 sm:pb-10">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="min-w-0">
                                <h1 className="max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                                    {course.title}
                                </h1>
                                <p className="mt-2 text-xs font-medium text-white/85 sm:text-sm">
                                    Unlock the power of practical learning with expert guidance.
                                </p>
                                <p className="mt-3 text-xs text-white/80">
                                    by {course.author.name}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="inline-flex h-9 w-fit shrink-0 items-center gap-2 rounded-full bg-accent-lime px-4 text-xs font-semibold text-dark-heading transition-transform hover:-translate-y-0.5 hover:bg-accent-lime-hover"
                            >
                                <Share2 className="h-3.5 w-3.5" />
                                Share
                            </button>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-dark-heading">
                                <BookOpen className="h-3.5 w-3.5 text-primary-blue" />
                                {course.level}
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-dark-heading">
                                <Star className="h-3.5 w-3.5 fill-primary-blue text-primary-blue" />
                                {course.rating.toFixed(1)} ({course.commentsCount} reviews)
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-dark-heading">
                                <Users className="h-3.5 w-3.5 text-primary-blue" />
                                {course.enrolledCountBadge} Students
                            </span>
                        </div>
                    </div>

                    <div className="relative z-10 grid gap-6 pb-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
                        <div className="min-w-0">
                            <div className="relative aspect-video overflow-hidden rounded-2xl bg-dark-heading shadow-xl">
                                <Image
                                    src="/assets/video-demo-profile.jpg"
                                    alt={`${course.title} preview`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, calc(100vw - 400px)"
                                    priority
                                />
                                <button
                                    type="button"
                                    aria-label="Play course preview"
                                    className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary-blue shadow-xl transition-transform hover:scale-105"
                                >
                                    <Play className="ml-1 h-7 w-7 fill-current" />
                                </button>
                            </div>

                            <CourseTabs
                                activeTab={activeTab}
                                content={content}
                                course={course}
                                reviewFilter={reviewFilter}
                                setActiveTab={setActiveTab}
                                setReviewFilter={setReviewFilter}
                            />
                        </div>

                        <aside className="rounded-2xl bg-white p-5 shadow-xl lg:-mt-0">
                            <h2 className="text-base font-bold text-dark-heading">
                                {course.lessonsCount} Lessons ({course.duration})
                            </h2>
                            <div className="mt-5 flex flex-col gap-4">
                                {content.modules.slice(0, 3).map((module, index) => (
                                    <div key={module.title} className="flex items-start gap-3 text-xs">
                                        <span className="text-muted-body">0{index + 1}</span>
                                        <span className="flex-1 font-medium leading-4 text-dark-heading">
                                            {module.title.replace(/^Module \d+: /, "")}
                                        </span>
                                        <span className="text-primary-blue">{index + 1}2 mins</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-xs leading-5 text-muted-body">
                                Ready to dive in? Enroll now and start building your digital future.
                            </p>
                            <div className="mt-5 flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-primary-blue">${course.price}</span>
                                <span className="text-xs text-muted-body">/{course.billingType}</span>
                            </div>
                            <button
                                type="button"
                                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-accent-lime text-xs font-semibold text-dark-heading transition-colors hover:bg-accent-lime-hover"
                            >
                                Enroll Now
                            </button>
                            <h3 className="mt-6 text-sm font-bold text-dark-heading">This course includes</h3>
                            <ul className="mt-3 flex flex-col gap-3">
                                {content.includes.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-xs text-muted-body">
                                        <Check className="h-3.5 w-3.5 text-primary-blue" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5 border-t border-border-subtle pt-4">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/assets/details-page-creator-profile.jpg"
                                        alt={`${course.author.name} profile`}
                                        width={36}
                                        height={36}
                                        className="h-9 w-9 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold text-dark-heading">{course.author.name}</p>
                                        <p className="mt-1 text-xs text-muted-body">Professional Creator</p>
                                    </div>
                                </div>
                                <Link
                                    href="/creators"
                                    className="mt-4 inline-flex rounded-full border border-border-subtle px-4 py-2 text-xs font-medium text-dark-heading transition-colors hover:bg-surface-gray"
                                >
                                    See Full Profile
                                </Link>
                            </div>
                        </aside>
                    </div>
                </Container>
            </section>

            <section className="hidden">
                <Container>
                    <div className="flex gap-2 border-b border-border-subtle">
                        {([
                            ["about", "About"],
                            ["lessons", "Lesson"],
                            ["reviews", "Reviews"],
                        ] as const).map(([tab, label]) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                aria-pressed={activeTab === tab}
                                className={`rounded-full px-5 py-3 text-sm font-medium transition-colors ${activeTab === tab
                                    ? "bg-accent-lime text-dark-heading"
                                    : "text-muted-body hover:bg-surface-gray hover:text-dark-heading"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 w-full">
                        {activeTab === "about" ? (
                            <div>
                                <h2 className="text-xl font-bold text-dark-heading">Description</h2>
                                <div className="mt-5 flex flex-col gap-4 text-sm leading-7 text-muted-body">
                                    {content.description.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                                <h2 className="mt-8 text-xl font-bold text-dark-heading">Sneak Peek</h2>
                                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {sneakPeekImages.map((image, index) => (
                                        <div key={image} className="relative aspect-[1.35] overflow-hidden rounded-xl">
                                            <Image
                                                src={image}
                                                alt={`${course.title} preview ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 50vw, 180px"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <h2 className="mt-8 text-xl font-bold text-dark-heading">Key Points</h2>
                                <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-body">
                                    {content.modules.map((module) => (
                                        <li key={module.title} className="flex items-center gap-2">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-blue">
                                                <Check className="h-3 w-3 text-white" />
                                            </span>
                                            {module.title.replace(/^Module \d+: /, "")}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        {activeTab === "lessons" ? (
                            <div>
                                <h2 className="text-xl font-bold text-dark-heading">Explore the Modules</h2>
                                <p className="mt-4 text-sm leading-7 text-muted-body">
                                    Immerse yourself in the course content through comprehensive lessons, practical insights, and hands-on experiences.
                                </p>
                                <h2 className="mt-8 text-xl font-bold text-dark-heading">Lesson List</h2>
                                <div className="mt-5 flex flex-col gap-6">
                                    {content.modules.map((module) => (
                                        <div key={module.title} className="flex items-start gap-4">
                                            <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl bg-accent-lime text-dark-heading">
                                                <Video className="h-6 w-6" />
                                            </span>
                                            <div>
                                                <h3 className="text-sm font-bold text-dark-heading">{module.title}</h3>
                                                <p className="mt-1 text-sm leading-6 text-muted-body">{module.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h2 className="mt-8 text-xl font-bold text-dark-heading">Lesson Content</h2>
                                <p className="mt-4 text-sm leading-7 text-muted-body">{content.lessonContent}</p>
                                <h2 className="mt-8 text-xl font-bold text-dark-heading">Lesson Progress Tracking</h2>
                                <p className="mt-4 text-sm leading-7 text-muted-body">{content.lessonProgressDescription}</p>
                                <div className="mt-6 rounded-2xl border border-border-subtle bg-white p-4 shadow-sm">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-sm font-medium text-dark-heading">Learning Progress</span>
                                        <span className="text-3xl font-bold text-dark-heading">{content.lessonProgress}%</span>
                                    </div>
                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-border-subtle">
                                        <div
                                            className="h-full rounded-full bg-accent-lime"
                                            style={{ width: `${content.lessonProgress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {activeTab === "reviews" ? (
                            <div>
                                <h2 className="text-xl font-bold text-dark-heading">What Learners Are Saying</h2>
                                <p className="mt-4 text-sm leading-7 text-muted-body">
                                    Discover what our learners have to say about their experience with {course.title}. Read reviews and ratings from people who have completed the course.
                                </p>
                                <div className="mt-6 rounded-2xl border border-border-subtle bg-white p-6 sm:flex sm:items-center sm:gap-10">
                                    <div className="rounded-2xl bg-accent-lime px-8 py-5 text-center">
                                        <span className="text-xs text-dark-heading">Ratings</span>
                                        <strong className="mt-1 block text-4xl text-dark-heading">{course.rating.toFixed(1)}</strong>
                                    </div>
                                    <div className="mt-6 flex-1 sm:mt-0">
                                        {content.ratingBreakdown.map((item) => (
                                            <div key={item.rating} className="flex items-center gap-3 text-xs text-muted-body">
                                                <span className="flex w-24 shrink-0 items-center gap-1 text-dark-heading">
                                                    {item.rating}
                                                    <Star className="h-3.5 w-3.5 fill-current" />
                                                </span>
                                                <span className="h-2 flex-1 rounded-full bg-border-subtle">
                                                    <span className="block h-full rounded-full bg-accent-lime" style={{ width: `${item.percentage}%` }} />
                                                </span>
                                                <span className="w-8 text-right">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <h2 className="mt-8 text-xl font-bold text-dark-heading">Individual Reviews:</h2>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setReviewFilter(null)}
                                        aria-pressed={reviewFilter === null}
                                        className={`inline-flex h-10 items-center rounded-full px-4 text-xs font-medium transition-colors ${reviewFilter === null
                                            ? "bg-accent-lime text-dark-heading"
                                            : "bg-surface-gray text-muted-body hover:text-dark-heading"
                                            }`}
                                    >
                                        All rating
                                    </button>
                                    {content.reviewFilters.map((rating) => (
                                        <button
                                            key={rating}
                                            type="button"
                                            onClick={() => setReviewFilter(rating)}
                                            aria-pressed={reviewFilter === rating}
                                            className={`inline-flex h-10 items-center gap-1 rounded-full px-4 text-xs font-medium transition-colors ${reviewFilter === rating
                                                ? "bg-accent-lime text-dark-heading"
                                                : "bg-surface-gray text-muted-body hover:text-dark-heading"
                                                }`}
                                        >
                                            <Star className="h-3.5 w-3.5 fill-current" />
                                            {rating}
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-6 flex flex-col gap-6">
                                    {visibleReviews.map((review) => (
                                        <article key={review.name} className="rounded-3xl border border-border-subtle p-6 sm:p-10">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    {review.avatarUrl ? (
                                                        <Image
                                                            src={review.avatarUrl}
                                                            alt={`${review.name} profile`}
                                                            width={48}
                                                            height={48}
                                                            className="h-12 w-12 shrink-0 rounded-full object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-gray text-xs font-bold text-primary-blue">
                                                            {review.name.split(" ").map((part) => part[0]).join("")}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h3 className="text-sm font-bold text-dark-heading">{review.name}</h3>
                                                        <p className="mt-1 text-xs text-muted-body">{review.role}</p>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-muted-body">{review.age}</span>
                                            </div>
                                            <div className="mt-4 flex gap-1 text-primary-blue">
                                                {Array.from({ length: review.rating }, (_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                                            </div>
                                            <p className="mt-4 text-sm leading-6 text-muted-body">{review.quote}</p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
