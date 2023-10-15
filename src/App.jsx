import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom"
const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
        >
          <Header />
          <Routes>

          </Routes>

        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;