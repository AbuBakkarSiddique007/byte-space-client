export interface CategoryFilterPill {
  id: string;
  name: string;
  row: 1 | 2 | 3;
  isAction?: boolean;
}

export interface LearningPath {
  id: string;
  title: string;
  iconName: "pencil-ruler" | "code" | "laptop" | "building-2" | "megaphone" | "camera";
  coursesCount?: number;
  href: string;
}
