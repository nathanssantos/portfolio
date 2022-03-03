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
              <h2>My Last Projects</h2>
            </FadeInContainer>
          </header>
          <List>
            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Rokkos"
                image="/assets/images/rokkos.png"
                href="https://web.rokkos.app"
                description="Marketplace for photographers where they show, sell and deliver their photos during the event they're working. The platform also uses facial recognition to help customers find photos in which they are present."
                work="I led the team that created Rokkos from scratch, built the entire front-end, and helped the designers to develop several features to improve usability and user experience."
                stack="React.js | MobX | Material UI | SASS"
                width={110}
                height={59}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Engie TAG"
                image="/assets/images/tag.png"
                href="https://ntag.com.br"
                description="Transportadora Associada de Gás S.A. (TAG) operates in the natural gas transportation segment through gas pipelines. TAG owns and manages a significant portion of Brazil's natural gas transport assets, distributed among the North, Northeast, and Southeast regions."
                work="I developed the front-end of TAG's institutional website taking into account the best SEO practices and following Engie's style guide."
                stack="WordPress | SASS"
                width={110}
                height={29}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Let's Hike"
                image="/assets/images/lets-hike.webp"
                href="https://play.google.com/store/apps/details?id=br.com.floripahike.app&hl=pt_BR&gl=US"
                description="Let's Hike is a mobile application that offers lots of information about the natural environment of Florianópolis and the region, guiding users to find support and walk the trails safely."
                work="I participated in the construction of the Let's Hike mobile app and helped the team improve several usability and performance features of the application."
                stack="React Native | Redux | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Unne"
                image="/assets/images/unne.png"
                href="https://app.unnegestao.com.br"
                description="Platform used for analysis and management of growth strategies for small and medium businesses."
                work="I developed the front-end of Unne's progressive web app and helped the team identify several improvements that should be applied throughout this process."
                stack="Vue.js | Quasar Framework | SASS"
                width={110}
                height={40}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Turno Inverso"
                image="/assets/images/turno-inverso.png"
                href="https://play.google.com/store/apps/details?id=br.com.turnoinverso.aluno"
                description="Turno Inverso is an after-school activities platform for parents and guardians who want to explore their children's interests."
                work="I led the team that built the Turno Inverso mobile app and developed much of the front-end."
                stack="React Native | MobX | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="We Play"
                image="/assets/images/we-play.png"
                href="https://play.google.com/store/apps/details?id=br.com.w16.letsplayapp"
                description="A platform that allows teachers and arenas to manage classes and students in real-time, making life easier for those who practice sports."
                work="I was part of the team that created and developed We Play."
                stack="React Native | MobX | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Plastubos"
                image="/assets/images/plastubos.png"
                href="http://plastubos.com.br"
                description="A manufacturer of pipes and hydraulic connections present in the Brazilian market for over 20 years."
                work="I was part of the team that built the company institutional website and built much of the front-end."
                stack="WordPress | Bootstrap | SASS"
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
