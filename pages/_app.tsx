import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Layout } from "../components";
import { theme, GlobalStyle } from "../style";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
