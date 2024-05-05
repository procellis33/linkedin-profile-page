import type React from "react";
import Link from "next/link";
import { FaLinkedin, FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Nav } from "@/components/menu/components/nav";

const Menu: React.FC = () => {
  return (
    <header
      className={
        "bg-accent fixed h-[3.3rem] w-screen z-[999] shadow-section left-0 px-[2.5rem]"
      }
    >
      <div
        className={
          "w-full flex items-center mx-auto min-h-full max-w-container"
        }
      >
        <div className={"flex"}>
          <Link href={"/"} className={""}>
            <FaLinkedin
              className={"text-brand mr-[0.4rem] ml-[-0.4rem]"}
              size={39}
            />
          </Link>

          <div className={"relative md:flex hidden items-center w-[280px]"}>
            <FaSearch
              size={14}
              className={
                "absolute left-4 top-1/2 -translate-y-1/2 text-gray-700"
              }
            />
            <Input placeholder={"Search"} className={"h-[34] py-1.5 px-10"} />
          </div>
        </div>

        <Nav />
      </div>
    </header>
  );
};

export { Menu };
