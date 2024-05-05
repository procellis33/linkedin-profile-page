import type React from "react";
import { IconType } from "react-icons";

export interface DefaultItemColProps {
  icon: IconType;
  header: string;
  description: string;
  label?: string;
}

const DefaultItemCol: React.FC<DefaultItemColProps> = ({
  icon: Icon,
  header,
  label,
  description,
}) => {
  return (
    <div className={"flex-1 flex gap-x-2 cursor-pointer"}>
      <Icon size={24} className={"aspect-square"} />
      <div className={"flex flex-col gap-y-0.5"}>
        <h4 className={"font-semibold def-link"}>{header}</h4>
        <p className={"text-xs"}>{description}</p>
        {label && <p className={"text-xs text-muted-foreground"}>{label}</p>}
      </div>
    </div>
  );
};

export { DefaultItemCol };
