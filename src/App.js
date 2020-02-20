import React from "react";
import { Weather } from "./weather";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );
}

export default App;
