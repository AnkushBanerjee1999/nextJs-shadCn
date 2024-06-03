import React from "react";
import { SideBarMenuItem } from "./sidebar-menu-item";
import { side_nav_items } from "./sidebar-constants";

export default function Sidebar({
  toggleCollapse,
}: {
  toggleCollapse: boolean;
}) {
  return (
    <aside className="hidden border-r  bg-background text-foreground md:block">
      <div className="flex px-3.5 py-3 items-center gap-2 text-lg font-semibold">
        <div>DT</div>
        {!toggleCollapse && <div className="pl-2 min-w-max">Digital Twin</div>}
      </div>
      <nav className="flex flex-col gap-2 transition duration-300">
        <div className="flex-scroll gap-2">
          {side_nav_items.map((items, index) => {
            return (
              <SideBarMenuItem
                key={index}
                item={items}
                toggleCollapse={toggleCollapse}
              ></SideBarMenuItem>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
