import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserButton from "@/components/UserButton";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav>
        <Logo />
        <div>
          <ThemeSwitcher />
          <UserButton />
        </div>
      </nav>
    </div>
  );
}
