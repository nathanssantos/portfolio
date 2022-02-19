import React from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { theme, GlobalStyle } from "../../style";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface ThemeProviderProps {
  children: React.ReactElement;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  return (
    <SCThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        {children}
      </MuiThemeProvider>
    </SCThemeProvider>
  );
};

export default ThemeProvider;
