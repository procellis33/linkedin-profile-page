import type React from "react";
import { DotSeparator } from "@/components/dot-separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoMdPersonAdd } from "react-icons/io";

export interface ConnectionProps {
  name: string;
  description: string;
  image?: string;
  level: 1 | 2 | 3;
}

const Connection: React.FC<ConnectionProps> = ({
  name,
  level,
  image,
  description,
}) => {
  const calculateLevelEnding = (level: number) => {
    switch (level) {
      case 1:
        return level + "st";
      case 2:
        return level + "nd";
      case 3:
        return level + "rd";
      default:
        return level + "";
    }
  };

  return (
    <div className={"flex py-4 gap-x-2"}>
      <Avatar>
        <AvatarImage
          src={
            image ??
            "https://static.licdn.com/aero-v1/sc/h/1c5u578iilxfi4m4dvc4q810q"
          }
          className={"bg-gray-300"}
        />
        <AvatarFallback className={"bg-gray-400"}>{name[0]}</AvatarFallback>
      </Avatar>
      <div className={"flex flex-col"}>
        <div className={"flex gap-x-2 items-center"}>
          <p className={"font-semibold"}>{name}</p>
          <DotSeparator />
          <p className={"text-xs text-muted-foreground"}>
            {calculateLevelEnding(level)}
          </p>
        </div>
        <p className={"text-xs mt-0.5"}>{description}</p>
        <Button
          variant={"outline"}
          size={"sm"}
          className={"w-fit mt-2 flex gap-x-2"}
        >
          <IoMdPersonAdd /> Connect
        </Button>
      </div>
    </div>
  );
};

export { Connection };
