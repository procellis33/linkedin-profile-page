import type React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

export interface NavLinkProps {
  label: string;
  icon: IconType;
}

const NavLink: React.FC<NavLinkProps> = ({ label, icon: Icon }) => {
  return (
    <Link
      href={"/"}
      className={"flex flex-col items-center justify-center w-full"}
    >
      <div className={"size-[24px]"}>
        <Icon className={"size-full"} />
      </div>
      <p className={"text-xs hidden md:block"}>{label}</p>
    </Link>
  );
};

export { NavLink };
