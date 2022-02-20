import type { NextPage } from "next";
import { About, Contact, Experience, Hero, Social, Work } from "../components";

const Home: NextPage = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
