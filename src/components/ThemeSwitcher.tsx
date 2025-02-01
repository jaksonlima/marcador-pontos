"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  function onChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Switch
      defaultSelected
      onChange={onChangeTheme}
      color="success"
      endContent={<Moon />}
      size="lg"
      startContent={<Sun />}
    />
  );
}
