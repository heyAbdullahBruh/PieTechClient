"use client";
import { useThemeStore } from "@/store";
import { useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return children;
};

export default ThemeProvider;
