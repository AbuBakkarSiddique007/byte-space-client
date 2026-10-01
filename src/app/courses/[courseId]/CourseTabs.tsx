"use client";

import Image from "next/image";
import {
    Check,
    Star,
    Video,
} from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { getCourseDetailContent } from "@/data";
import type { Course } from "@/types";

type DetailTab = "about" | "lessons" | "reviews";
type CourseDetailContent = ReturnType<typeof getCourseDetailContent>;

const sneakPeekImages = [
    "/assets/grid-card-img-one.jpg",
    "/assets/grid-card-img-two.jpg",
    "/assets/grid-card-img-five.jpg",
    "/assets/grid-card-img-three.jpg",
];

interface CourseTabsProps {
    activeTab: DetailTab;
    content: CourseDetailContent;
    course: Course;
    reviewFilter: number | null;
    setActiveTab: Dispatch<SetStateAction<DetailTab>>;
    setReviewFilter: Dispatch<SetStateAction<number | null>>;
}

export function CourseTabs({
    activeTab,
    content,
    course,
    reviewFilter,
    setActiveTab,
    setReviewFilter,
}: CourseTabsProps) {
    const visibleReviews = content.reviews.filter(
        (review) => reviewFilter === null || review.rating === reviewFilter,
    );

    return (
        <div className="relative z-10 mt-8 w-full bg-white">
            <div className="flex gap-2">
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
                            : "bg-surface-gray text-muted-body hover:text-dark-heading"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="mt-8">
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
        </div>
    );
}
