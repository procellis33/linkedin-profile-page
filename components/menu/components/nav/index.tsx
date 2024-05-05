import type React from "react";
import { IoMdHome } from "react-icons/io";
import { FaBell, FaBriefcase } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { NavItem } from "@/components/menu/components/nav/components/nav-item";
import { NavLink } from "@/components/menu/components/nav/components/nav-link";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Nav: React.FC = () => {
  return (
    <nav className={"ml-auto items-center h-full flex"}>
      <ul className={"items-center h-full flex"}>
        <NavItem>
          <NavLink label={"Home"} icon={IoMdHome} />
        </NavItem>

        <NavItem>
          <NavLink label={"My Network"} icon={BsPeopleFill} />
        </NavItem>

        <NavItem>
          <NavLink label={"Jobs"} icon={FaBriefcase} />
        </NavItem>

        <NavItem>
          <NavLink label={"Messaging"} icon={RiMessage2Fill} />
        </NavItem>

        <NavItem>
          <NavLink label={"Notifications"} icon={FaBell} />
        </NavItem>

        <NavItem>
          <div
            className={
              "flex flex-col items-center justify-center w-full cursor-pointer"
            }
          >
            <div className={"size-[24px]"}>
              <Image
                src={"/next.svg"}
                alt={"image"}
                width={24}
                height={24}
                className={
                  "bg-gray-200 aspect-square rounded-full object-contain"
                }
              />
            </div>
            <div className={"hidden md:flex"}>
              <p className={"text-xs"}>Me</p>
              <IoMdArrowDropdown />
            </div>
          </div>
        </NavItem>

        <Separator orientation={"vertical"} className={"h-[3.3rem]"} />

        <NavItem className={"md:w-28 pl-2"}>
          <div
            className={
              "flex flex-col items-center justify-center w-full cursor-pointer"
            }
          >
            <div className={"size-[24px]"}>
              <CgMenuGridO className={"size-full"} />
            </div>
            <div className={"hidden md:flex"}>
              <p className={"text-xs"}>For Business</p>
              <IoMdArrowDropdown />
            </div>
          </div>
        </NavItem>

        <NavItem className={"md:w-28 pl-2 hidden md:block"}>
          <div
            className={
              "flex flex-col items-center justify-center w-full cursor-pointer"
            }
          >
            <p
              className={
                "text-xs text-amber-950 text-center underline leading-5"
              }
            >
              Reactivate Premium: 50% Off
            </p>
          </div>
        </NavItem>
      </ul>
    </nav>
  );
};

export { Nav };
