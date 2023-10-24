import  { createContext, useState, useMemo } from "react"
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = () => ({
  palette: {
    mainColor: {
      primary: "#0071f8",
    },
    secondColor : {
      primary : "#ee626b"
    },
    nuetral : {
      primary : '#1e1e1e'
    }
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens()), []);
  return [theme, colorMode];
};
