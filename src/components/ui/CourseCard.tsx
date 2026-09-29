import Image from "next/image";
import { Star, BookOpen, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Course } from "@/types";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-3xl border border-border-subtle bg-white overflow-hidden",
        "shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="relative h-44 w-full overflow-hidden bg-surface-gray">
        <Image
          src={course.imageThumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-dark-heading shadow-sm">
            <BookOpen className="h-3 w-3" />
            {course.lessonsCount} Lessons
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-dark-heading shadow-sm">
            <Clock className="h-3 w-3" />
            {course.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-dark-heading shadow-sm">
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
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-dark-heading">
              {course.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-body">
          by <span className="font-medium">{course.author.name}</span>
        </p>

        <div className="flex items-center justify-between mt-auto">
          <Badge
            variant="secondary"
            className="rounded-full bg-surface-gray text-muted-body text-xs font-semibold px-3 py-1"
          >
            {course.level}
          </Badge>

          <div className="flex items-center">
            <div className="flex -space-x-2">
              {course.enrolledAvatars.slice(0, 3).map((src, i) => (
                <Avatar
                  key={i}
                  className="h-6 w-6 border-2 border-white ring-0"
                >
                  <AvatarImage src={src} alt="Student" />
                  <AvatarFallback className="text-[9px] bg-surface-gray text-muted-body">
                    S
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="ml-1.5 text-xs font-semibold text-muted-body">
              {course.enrolledCountBadge}
            </span>
          </div>
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
  );
}
