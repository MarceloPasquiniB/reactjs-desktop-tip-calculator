import React from "react";
import { Reset } from "styled-reset";
import Content from "../src/components/Content/Content.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme"

export default function App() {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <Content />
      </ThemeProvider>
    </>
  );
}
