import { createTheme } from "@mui/material/styles";
import SCTheme from "./SCTheme";
const { colors, fonts } = SCTheme;

const MUITheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.blue,
    },
  },
  typography: {
    fontFamily: fonts.mono,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(26, 30, 34, 0.85)",
          marginTop: "3.125rem",
          backdropFilter: "blur(0.313rem)",
          backgroundImage: "none",
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.darkGrey,
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
        },
      },
    },
  },
});

export default MUITheme;
