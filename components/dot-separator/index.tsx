import type React from "react";
import { cn } from "@/lib/utils";

export interface DotSeparatorProps {
  className?: string;
}

const DotSeparator: React.FC<DotSeparatorProps> = ({ className }) => {
  return <div className={cn("size-[1px] bg-black", className)} />;
};

export { DotSeparator };
