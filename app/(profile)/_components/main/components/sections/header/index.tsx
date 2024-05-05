import type React from "react";
import { Button } from "@/components/ui/button";
import { FaCamera, FaPen } from "react-icons/fa";
import Image from "next/image";
import { DotSeparator } from "@/components/dot-separator";
import { GiGraduateCap } from "react-icons/gi";
import { Section } from "@/app/(profile)/_components/section";

const Header: React.FC = () => {
  return (
    <Section>
      <div
        className={
          "absolute top-0 left-0 min-h-[201px] h-[201px] w-full bg-[url(https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq)] bg-cover rounded-t-lg"
        }
      />

      <Button
        size={"icon"}
        variant={"icon"}
        className={
          "hover:bg-accent/90 z-50 bg-accent/90 absolute top-5 right-5 size-8"
        }
      >
        <FaCamera
          className={
            "text-brand hover:text-brandDarker transition-all size-fit"
          }
        />
      </Button>

      <div className={"mt-[71px] relative z-50 flex justify-between items-end"}>
        <div
          className={
            "size-40 rounded-full aspect-square border-4 border-accent"
          }
        >
          <Image
            src={"/next.svg"}
            alt={"image"}
            width={152}
            height={152}
            className={"bg-gray-200 aspect-square rounded-full object-contain"}
          />
        </div>
        <Button size={"icon"} variant={"icon"}>
          <FaPen className={"size-fit"} />
        </Button>
      </div>

      <div className={"mt-4"}>
        <div className={"flex gap-x-7 justify-between"}>
          <div className={"lg:min-w-[500px]"}>
            <h1 className={"font-semibold text-2xl"}>Alexey Romanov</h1>
            <p className={"text-base"}>
              Frontend Developer | 2.5 years in React/React Native, TypeScript
            </p>

            <div className={"mt-2 flex items-center gap-x-1"}>
              <p className={"text-xs text-muted-foreground"}>Prague, Czechia</p>
              <DotSeparator />
              <p className={"font-semibold text-xs text-brand/90 def-link"}>
                Contact info
              </p>
            </div>
          </div>

          <div
            className={
              "text-base font-semibold flex gap-x-2 items-start def-link h-fit"
            }
          >
            <GiGraduateCap className={"text-brand min-h-[3rem] min-w-[3rem]"} />
            Faculty of Information Technology CTU in Prague
          </div>
        </div>
      </div>

      <div className={"text-xs text-brand/90 font-semibold def-link mt-2"}>
        500+ connections
      </div>

      <div className={"mt-3 gap-x-2 flex"}>
        <Button size={"sm"}>Open to</Button>
        <Button variant={"outlineBrand"} size={"sm"}>
          Add profile section
        </Button>
        <Button variant={"outline"} size={"sm"}>
          More
        </Button>
      </div>
    </Section>
  );
};

export { Header };
