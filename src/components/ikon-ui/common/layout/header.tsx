import React, { Dispatch, SetStateAction } from "react";
import MobileNav from "./mobile-nav";
import { UserNav } from "./user-nav";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { ClientSelector } from "./client-selector";
import { DatePicker } from "./date-picker";
export default function Header({
  toggleCollapse,
  setToggleCollapse,
}: {
  toggleCollapse: boolean;
  setToggleCollapse: Dispatch<SetStateAction<boolean>>;
}) {
  const sidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <header className="flex border-b  bg-background text-foreground h-[50px] items-center px-3">
      <MobileNav />
      <div className="hidden md:block mr-3">
        <Button variant="outline" size="icon" onClick={sidebarToggle}>
          {!toggleCollapse ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </Button>
      </div>
      <div className="mr-3">
      <ClientSelector/>
      </div>      
      {/* <DatePicker/> */}
      <div className="w-full flex-1"></div>

      <div className="flex items-center justify-between sm:order-2 order-1">
        <div className="p-2">
          <ThemeSwitcher></ThemeSwitcher>
        </div>
        <div className="h-10 w-10 rounded-full bg-sidebar-muted flex items-center justify-center text-center">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
