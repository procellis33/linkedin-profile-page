import type React from "react";
import { cn } from "@/lib/utils";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/ui/button";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-slate-50 w-full p-1 pr-2 shadow-section rounded-md flex",
        className,
      )}
    >
      <div className={"flex-1 p-3"}>{children}</div>
      <Button size={"icon"} variant={"icon"}>
        <IoMdClose size={20} />
      </Button>
    </div>
  );
};

export { Card };
