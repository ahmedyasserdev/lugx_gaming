import  { createContext, useState, useMemo } from "react"
import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode) => {

  return {
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            mainColor: {
              primary: "#0071f8",
            },
            secondColor : {
                primary : "#ee626b"
            },
            lightRed : {
                primary : '#ee626b'
            }
         
          }
        : {
            mainColor: {
                primary: "#0071f8",
              },
              secondColor : {
                  primary : "#ee626b"
              },

                 lightRed : {
                primary : '#ee626b'
            }
           
            
          }),
    },
  };
};

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

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};