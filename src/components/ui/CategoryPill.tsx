"use client";

import { cn } from "@/lib/utils";

interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  isAction?: boolean;
  onClick?: () => void;
}

export function CategoryPill({
  label,
  isActive = false,
  isAction = false,
  onClick,
}: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
        isAction
          ? "border border-border-subtle bg-white text-muted-body hover:bg-surface-gray"
          : isActive
          ? "bg-accent-lime text-dark-heading shadow-sm"
          : "bg-surface-gray text-muted-body hover:bg-accent-lime/20 hover:text-dark-heading"
      )}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
