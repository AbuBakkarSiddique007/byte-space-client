import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
}

export function FloatingBadge({ children, className }: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-2xl backdrop-blur-md bg-white/90 shadow-xl border border-white/40 px-4 py-3",
        className
      )}
    >
      {children}
    </div>
  );
}
