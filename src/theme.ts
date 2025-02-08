// src/theme.ts
import { createTheme } from "@mui/material/styles";

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",  // Light theme primary color
    },
    secondary: {
      main: "#dc004e",  // Light theme secondary color
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",  // Dark theme primary color
    },
    secondary: {
      main: "#f48fb1",  // Dark theme secondary color
    },
  },
});
