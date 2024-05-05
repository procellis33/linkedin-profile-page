import type React from "react";
import { Suggestions } from "@/app/(profile)/_components/main/components/sections/suggestions";
import { Header } from "@/app/(profile)/_components/main/components/sections/header";
import { Analytics } from "@/app/(profile)/_components/main/components/sections/analytics";
import { Resources } from "@/app/(profile)/_components/main/components/sections/resources";

const Main: React.FC = () => {
  return (
    <main className={"flex flex-col gap-y-2.5"}>
      <Header />
      <Suggestions />
      <Analytics />
      <Resources />
    </main>
  );
};

export { Main };
