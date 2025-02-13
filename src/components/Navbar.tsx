"use client";
import React from "react";
import { Dices } from "lucide-react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const menuItems = [
  { path: "/", exec: true, title: "Início" },
  { path: "/players", exec: false, title: "Jogadores" },
  { path: "#", exec: false, title: "Histórico" },
];

export function AppNavbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const onHandleColor = (path: string, exec?: boolean) => {
    if (!exec && pathname.includes(path)) {
      return "primary";
    }

    if (exec && pathname === path) {
      return "primary";
    }

    return "foreground";
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Dices size={28} strokeWidth={2.25} />
          <Tooltip content="JL Game">
            <p className="font-bold text-inherit">JLGM</p>
          </Tooltip>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.path}-${index}`}>
            <Link
              aria-current="page"
              color={onHandleColor(item.path, item.exec)}
              href={item.path}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.path}-${index}`}>
            <Link
              className="w-full"
              color={onHandleColor(item.path, item.exec)}
              href={item.path}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
