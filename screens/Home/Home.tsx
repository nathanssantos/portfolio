import { About, Contact, Experience, Hero, Projects } from "../../sections";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
