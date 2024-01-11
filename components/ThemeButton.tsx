"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "./svg";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun width={24} height={24} className="text-myYellow" />
      ) : (
        <Moon width={24} height={24} className="text-myBlack" />
      )}
    </button>
  );
};
