import type { Course } from "@/types";

const moduleTopics = [
    "Introduction and foundations",
    "Design principles for impact",
    "Advanced techniques in practice",
    "User-centered strategies",
    "Interactive media and engagement",
    "Project showcase and critique",
];

export function getCourseDetailContent(course: Course) {
    const moduleCount = Math.min(6, Math.max(3, Math.ceil(course.lessonsCount / 3)));

    return {
        description: [
            `Explore ${course.title} through a practical learning experience designed to help you build confidence and apply every concept in real projects.`,
            `Each lesson combines clear explanations, guided examples, and focused exercises so you can move from the fundamentals to a finished piece of work.`,
            "Build a stronger creative process, sharpen your decision-making, and leave with skills you can continue developing beyond the course.",
        ],
        lessonContent: "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
        lessonProgressDescription: "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
        lessonProgress: 55,
        ratingBreakdown: [
            { rating: 5, count: 720, percentage: 92 },
            { rating: 4, count: 120, percentage: 34 },
            { rating: 3, count: 21, percentage: 9 },
            { rating: 2, count: 12, percentage: 3 },
            { rating: 1, count: 16, percentage: 5 },
        ],
        reviewFilters: [5, 4, 3, 2, 1],
        modules: moduleTopics.slice(0, moduleCount).map((topic, index) => ({
            title: `Module ${index + 1}: ${topic}`,
            description: `Work through focused lessons and practical exercises covering ${topic.toLowerCase()} for modern creative projects.`,
        })),
        includes: [
            "Learning resources",
            "Quality lesson videos",
            "Certificate of completion",
            "Private consultation",
        ],
        reviews: [
            {
                name: "PurePearl Studio",
                role: "UI/UX Designer",
                age: "a year ago",
                rating: 5,
                avatarUrl: "/assets/review-user-img-one.png",
                quote: `This course gave me a clear and practical way to improve my work. The lessons were focused, useful, and immediately applicable to ${course.title.toLowerCase()}.`,
            },
            {
                name: "Albert Flores",
                role: "Digital Creator",
                age: "a year ago",
                rating: 5,
                avatarUrl: "/assets/review-user-img-two.png",
                quote: "The combination of clear teaching, hands-on exercises, and real-world examples made the learning experience genuinely valuable.",
            },
            {
                name: "Cody Fisher",
                role: "Product Designer",
                age: "a year ago",
                rating: 5,
                avatarUrl: "/assets/review-user-img-three.png",
                quote: "The project work helped me turn new ideas into a confident, finished result that I can continue building on.",
            },
            {
                name: "Brooklyn Simmons",
                role: "UI/UX Designer",
                age: "a year ago",
                rating: 5,
                avatarUrl: "/assets/review-user-img-four.png",
                quote: "The lessons were practical and easy to follow. The course adapts to the evolving digital landscape and kept me motivated throughout.",
            },
        ],
    };
}
