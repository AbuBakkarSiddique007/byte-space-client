import { notFound } from "next/navigation";
import { courses } from "@/data";
import { CourseDetails } from "./CourseDetails";

interface CoursePageProps {
    params: Promise<{ courseId: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { courseId } = await params;
    const course = courses.find((item) => item.id === courseId);

    if (!course) {
        notFound();
    }

    return <CourseDetails course={course} />;
}
