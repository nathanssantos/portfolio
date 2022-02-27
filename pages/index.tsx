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
      {repositories?.length && <Projects repositories={repositories} />}
      <Contact />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://portfolio-nathanssantos.vercel.app/api/repositories"
    );

    return {
      props: { repositories: response.data },
    };
  } catch (error) {
    return {
      props: { repositories: [] },
    };
  }
}

export default Home;
