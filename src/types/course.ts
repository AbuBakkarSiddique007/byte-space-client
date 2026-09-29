export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseAuthor {
  name: string;
  avatarUrl?: string;
  role?: string;
}

export interface Course {
  id: string;
  title: string;
  author: CourseAuthor;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  rating: number;
  level: CourseLevel;
  price: number;
  billingType: "lifetime" | "monthly" | "yearly";
  enrolledAvatars: string[];
  enrolledCountBadge: string;
  category: string;
  imageThumbnail: string;
}
