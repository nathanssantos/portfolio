import axios from "axios";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero, Projects } from "../sections";

interface HomeProps {
  repositories?: Repository[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { repositories } = props;

  return (
    <div className="home">
      <Hero />
      <About />
      <Experience />
      <Projects repositories={repositories} />
      <Contact />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get("http://localhost:3000/api/repositories");

    return {
      props: { repositories: response.data },
    };
  } catch (error) {
    return null;
  }
}

export default Home;
