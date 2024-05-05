import type React from "react";
import { Section } from "@/app/(profile)/_components/section";
import { Edit } from "@/app/(profile)/_components/aside/components/edit";
import { Separator } from "@/components/ui/separator";
import { Connection } from "@/app/(profile)/_components/aside/components/connection";
import { people } from "@/app/(profile)/_components/aside/data";
import { Button } from "@/components/ui/button";
import { Container } from "@/app/(profile)/_components/section/components/container";

const Aside: React.FC = () => {
  return (
    <aside className={"flex flex-col gap-y-2.5"}>
      <Section className={"flex flex-col gap-y-4"}>
        <Edit title={"Profile language"} label={"English"} />

        <Separator />

        <Edit
          title={"Public profile & URL"}
          label={"www.linkedin.com/in/procellis33"}
        />
      </Section>

      <Section className={"p-0"}>
        <Container>
          <h3 className={"font-semibold"}>Other similar profiles</h3>
          <div className={"divide-y-[1px]"}>
            {people.map((item, index) => {
              if (index < 2) return null;
              return (
                <Connection
                  key={index + item.name}
                  name={item.name}
                  description={item.description}
                  level={item.level}
                  image={item.image}
                />
              );
            })}
          </div>
        </Container>
        <Button variant={"showMore"}>Show more</Button>
      </Section>

      <Section className={"p-0"}>
        <Container>
          <h3 className={"font-semibold"}>Grow your network</h3>
          <p className={"text-xs text-muted-foreground"}>
            Premium peer suggestions
          </p>
          <div className={"divide-y-[1px]"}>
            {people.map((item, index) => {
              if (index > 1) return null;
              return (
                <Connection
                  key={index + item.name}
                  name={item.name}
                  description={item.description}
                  level={item.level}
                  image={item.image}
                />
              );
            })}
          </div>
        </Container>
        <Button variant={"showMore"}>Show more</Button>
      </Section>

      <Section className={"p-0"}>
        <Container>
          <h3 className={"font-semibold"}>People you may know</h3>
          <p className={"text-xs text-muted-foreground"}>From your school</p>
          <div className={"divide-y-[1px]"}>
            {people.map((item, index) => {
              if (index < 4) return null;
              return (
                <Connection
                  key={index + item.description}
                  name={item.name}
                  description={item.description}
                  level={item.level}
                  image={item.image}
                />
              );
            })}
          </div>
        </Container>
        <Button variant={"showMore"}>Show more</Button>
      </Section>
    </aside>
  );
};

export { Aside };
