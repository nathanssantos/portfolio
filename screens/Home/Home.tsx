import { About, Contact, Experience, Hero, Work } from "../../components";

const Home = () => {
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
