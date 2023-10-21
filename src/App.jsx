import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Game from "./pages/Game";
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

          <Route index element = {<Home /> } />
          <Route path = "/game/:id" element = {<Game /> } />


          </Routes>

        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;