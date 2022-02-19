import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Hero } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nathan S. Santos | Portfolio</title>
        <meta name="description" content="My personal projects portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
