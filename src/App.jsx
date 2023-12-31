import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
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
          <Route path = "/shop" element = {<Shop /> } />
          <Route path = "/contact" element = {<Contact /> } />


          </Routes>

        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;