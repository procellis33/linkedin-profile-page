import type React from "react";

export interface ProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => {
  return <main className={"pt-[52px] pb-4"}>{children}</main>;
};

export default ProfileLayout;
