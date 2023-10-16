import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
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


          </Routes>

        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;