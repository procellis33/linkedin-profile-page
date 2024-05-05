import type React from "react";
import { cn } from "@/lib/utils";
import { Main } from "@/app/(profile)/_components/main";
import { Aside } from "@/app/(profile)/_components/aside";

const ProfilePage = () => {
  return (
    <>
      <div
        className={cn(
          "md:max-w-[80%] xl:max-w-container mt-[1.4rem] mx-auto grid gap-5 grid-cols-1 xl:grid-cols-profile",
          "xl:[grid-template-areas:'main_aside']",
        )}
      >
        <Main />
        <Aside />
      </div>
    </>
  );
};

export default ProfilePage;
