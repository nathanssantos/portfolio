import Head from "next/head";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Layout, ThemeProvider } from "../components";
import createEmotionCache from "../createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
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
    </CacheProvider>
  );
};
export default MyApp;
