// src/App.tsx
import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  // Load theme from localStorage or default to light
  const storedTheme = localStorage.getItem("theme") || "light";
  const [themeMode, setThemeMode] = useState<"light" | "dark">(storedTheme as "light" | "dark");

  // Toggle theme and persist in localStorage
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
    </ThemeProvider>
  );
};

export default App;
