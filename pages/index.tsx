import type { NextPage } from "next";
import { About, Contact, Experience, Hero, Work } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
