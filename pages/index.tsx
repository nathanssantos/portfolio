import axios from "axios";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero, Work } from "../components";

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
      <Work repositories={repositories} />
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
