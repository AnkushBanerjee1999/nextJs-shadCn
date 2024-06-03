"use client";
import { SideNavItem } from "@/types/type";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BsChevronBarLeft,
  BsChevronBarRight,
  BsChevronRight,
} from "react-icons/bs";

export const SideBarMenuItem = ({
  item,
  toggleCollapse,
}: {
  item: SideNavItem;
  toggleCollapse: boolean;
}) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-sidebar-foreground py-2 px-4 rounded-md transition duration-200";
  const subMenuItemLinkStyle =
    "flex items-center text-sidebar-foreground py-2 px-4 hover:text-sidebar-muted-foreground transition duration-200";
  const activeLinkStyle = "rounded-md bg-gray-900 text-white";

  const pathName = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubmenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const ddlinkStyle = classNames(linkStyle, {
    ["bg-sidebar-muted"]: subMenuOpen,
  });
  return (
    <>
      {
        <Link
          href={item.path}
          className={`${linkStyle} ${
            item.path === pathName ? activeLinkStyle : ""
          }`}
        >
          {item.icon}
          {!toggleCollapse && (
            <span className="ml-3 leading-6 font-semibold">{item.title}</span>
          )}
        </Link>
      }
    </>
  );
};
