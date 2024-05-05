import type React from "react";
import { PrivateSectionHeader } from "@/app/(profile)/_components/main/components/private-section-header";
import { Section } from "@/app/(profile)/_components/section";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";

const Suggestions: React.FC = () => {
  const t = "#556779";
  return (
    <Section>
      <PrivateSectionHeader header={"Suggested for you"} />

      <div className={"py-4"}>
        <p className={"font-semibold"}>Intermediate</p>
        <div className={"flex gap-x-1 items-center"}>
          <Progress value={85} className={"h-[8px]"} />
          6/7
        </div>
        <p className={"text-xs"}>
          Complete 1 step to achieve{" "}
          <span className={"def-link text-brand font-semibold"}>All-star</span>
        </p>
      </div>

      <Card className={"mt-3"}>
        <div className={"flex flex-col gap-y-3"}>
          <h2 className={"text-xl font-semibold"}>
            Where do you currently work?
          </h2>
          <p>
            Members who include at least one position receive up to 3.5 times as
            many profile views.
          </p>
          <Button variant={"outline"} size={"sm"} className={"w-fit"}>
            Add position
          </Button>
        </div>
      </Card>
    </Section>
  );
};

export { Suggestions };
