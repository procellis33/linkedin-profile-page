import type React from "react";
import { Container } from "@/app/(profile)/_components/section/components/container";
import { FaEye, FaSearch } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Section } from "@/app/(profile)/_components/section";
import { PrivateSectionHeader } from "@/app/(profile)/_components/main/components/private-section-header";
import { DefaultItemCol } from "@/app/(profile)/_components/main/components/default-item-col";

const Analytics: React.FC = () => {
  return (
    <Section className={"p-0"}>
      <Container className={"pb-4"}>
        <PrivateSectionHeader header={"Analytics"} />

        <div className={"flex pt-2 gap-x-4"}>
          <DefaultItemCol
            header={"0 profile views"}
            description={"Discover who's viewed your profile."}
            icon={MdPeopleAlt}
          />
          <DefaultItemCol
            header={"0 post impressions"}
            description={"Start a post to increase engagement."}
            icon={IoIosStats}
            label={"Past 7 days"}
          />
          <DefaultItemCol
            header={"0 search appearances"}
            description={"See how often you appear in search results."}
            icon={FaSearch}
          />
        </div>
      </Container>
      <Button variant={"showMore"} className={"gap-x-1.5"}>
        Show all analytics <FaArrowRightLong />
      </Button>
    </Section>
  );
};

export { Analytics };
