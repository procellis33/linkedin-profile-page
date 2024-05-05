import type React from "react";
import { cn } from "@/lib/utils";

export interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, className }) => {
  return (
    <li
      className={cn(
        "flex items-center opacity-65 hover:opacity-100 transition-opacity w-12 md:w-20",
        className,
      )}
    >
      {children}
    </li>
  );
};

export { NavItem };
