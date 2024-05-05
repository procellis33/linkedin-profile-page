import type React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "relative bg-accent rounded-lg h-fit p-5 shadow-section",
        className,
      )}
    >
      {children}
    </section>
  );
};

export { Section };
