import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout, ThemeProvider } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app">
      <Head>
        <title>Nathan S. Santos</title>
        <meta name="description" content="My front-end portfolio." />
        <meta
          name="author"
          content="Nathan Silva Santos <nathansilvasantos@gmail.com>"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};
export default MyApp;
