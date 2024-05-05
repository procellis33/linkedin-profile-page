import type React from "react";
import { Section } from "@/app/(profile)/_components/section";
import { Container } from "@/app/(profile)/_components/section/components/container";
import { PrivateSectionHeader } from "@/app/(profile)/_components/main/components/private-section-header";
import { DefaultItemCol } from "@/app/(profile)/_components/main/components/default-item-col";
import { MdPeopleAlt } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Resources: React.FC = () => {
  return (
    <Section className={"p-0"}>
      <Container className={"pb-4"}>
        <PrivateSectionHeader header={"Resources"} />

        <div className={"flex flex-col pt-2 gap-y-4"}>
          <DefaultItemCol
            header={"My network"}
            description={"See and manage your connections and interests."}
            icon={MdPeopleAlt}
          />

          <DefaultItemCol
            header={"Saved items"}
            description={"Keep track of your jobs, courses, and articles."}
            icon={FaBookmark}
          />
        </div>
      </Container>
      <Button variant={"showMore"} className={"gap-x-1.5"}>
        Show all 4 resources <FaArrowRightLong />
      </Button>
    </Section>
  );
};

export { Resources };
