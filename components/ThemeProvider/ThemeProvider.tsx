import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SCTheme, GlobalStyle, MUITheme } from "../../style";

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <SCThemeProvider theme={SCTheme}>
      <MuiThemeProvider theme={MUITheme}>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </MuiThemeProvider>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
