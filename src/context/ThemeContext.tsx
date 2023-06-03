import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { FC } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const ThemeContext: FC<Props> = ({ children }) => {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#007AFF",
        dark: "#002239",
      },
      secondary: {
        main: "#DCD3CC",
        dark: "#B7C0C9",
      },
      common: {
        black: "#070707",
      },
    },
    typography: {
      fontFamily: ` "Montserrat", "Helvetica", "Arial", sans-serif`,
    },
  });

  theme = responsiveFontSizes(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeContext;
