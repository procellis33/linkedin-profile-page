import type React from "react";
import { FaEye } from "react-icons/fa";

export interface PrivateSectionHeaderProps {
  header: string;
}

const PrivateSectionHeader: React.FC<PrivateSectionHeaderProps> = ({
  header,
}) => {
  return (
    <div>
      <h2 className={"section-header"}>{header}</h2>
      <p className={"flex gap-x-2 text-xs text-muted-foreground items-center"}>
        <FaEye />
        Private to you
      </p>
    </div>
  );
};

export { PrivateSectionHeader };
