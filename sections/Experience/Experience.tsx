import List from "@mui/material/List";
import Container from "@mui/material/Container";

import { FadeInContainer, ExperienceListItem } from "../../components";
import Styles from "./Styles";

const Experience = () => {
  return (
    <Styles id="experience" className="experience">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>Some of My Last Jobs</h2>
            </FadeInContainer>
          </header>
          <List>
            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Rokkos"
                image="/assets/images/rokkos.png"
                url="https://web.rokkos.app"
                description="Marketplace for photographers where they show, sell and deliver their photos during the event they're working. The platform also uses facial recognition to help customers find photos in which they are present."
                work="I led the team that developed the application, built the entire front-end and helped the designers to create several interactions to improve usability and user's experience."
                stack="React.js | Material UI"
                width={110}
                height={59}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Engie TAG"
                image="/assets/images/tag.png"
                url="https://ntag.com.br"
                description="Transportadora Associada de Gás S.A. (TAG) operates in the natural gas transportation segment through gas pipelines. TAG owns and manages a significant portion of Brazil's natural gas transport assets, distributed among the North, Northeast and Southeast regions."
                work="I developed the front-end of the website taking into account the best SEO practices."
                stack="WordPress"
                width={110}
                height={29}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Let's Hike"
                image="/assets/images/lets-hike.webp"
                url="https://play.google.com/store/apps/details?id=br.com.floripahike.app&hl=pt_BR&gl=US"
                description="Mobile application that offers important information and helps the user to walk the trails of the city of Florianópolis and region safely."
                work="I participated in the construction of the front-end and the design of several features of the application."
                stack="React Native | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Unne"
                image="/assets/images/unne.png"
                url="https://app.unnegestao.com.br"
                description="Progressive web app used for analysis and management of growth strategies for small and medium businesses."
                work="I developed the front-end of the application and helped the team to identify several improvements that should be applied throughout this process."
                stack="Vue.js | Quasar Framework"
                width={110}
                height={40}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Turno Inverso"
                image="/assets/images/turno-inverso.png"
                url="https://play.google.com/store/apps/details?id=br.com.turnoinverso.aluno"
                description="After-school activities platform for parents and guardians who want to explore their children's interests."
                work="I led the team that built the application and also developed much of the front-end."
                stack="React Native | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="We Play"
                image="/assets/images/we-play.png"
                url="https://play.google.com/store/apps/details?id=br.com.w16.letsplayapp"
                description="Platform that allows teachers and arenas to manage classes and students in real time, making life easier for those who practice sports."
                work="I was part of the team that created and developed the application."
                stack="React Native | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Plastubos"
                image="/assets/images/plastubos.png"
                url="http://plastubos.com.br"
                description="Manufacturer of pipes and hydraulic connections present in the Brazilian market for over 20 years."
                work="I was part of the team that built the application developing much of the front-end."
                stack="WordPress"
                width={110}
                height={110}
              />
            </FadeInContainer>
          </List>
        </div>
      </Container>
    </Styles>
  );
};

export default Experience;
