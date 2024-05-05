import type React from "react";
import { FaPen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
export interface EditProps {
  title: string;
  label: string;
}

const Edit: React.FC<EditProps> = ({ label, title }) => {
  return (
    <div className={"flex gap-x-3 justify-between"}>
      <div className={"flex flex-col gap-y-2"}>
        <p className={"font-semibold text-md"}>{title}</p>
        <p className={"text-xs text-muted-foreground"}>{label}</p>
      </div>
      <Button size={"icon"} variant={"icon"}>
        <FaPen className={"size-fit"} />
      </Button>
    </div>
  );
};

export { Edit };
