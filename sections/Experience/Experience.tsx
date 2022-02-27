import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

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
                name="Engie TAG"
                image="/assets/images/tag.png"
                url="https://ntag.com.br"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
                stack="Wordpress"
                width={110}
                height={29}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Rokkos"
                image="/assets/images/rokkos.png"
                url="https://web.rokkos.app"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
                stack="React.js | Material UI"
                width={110}
                height={59}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Let's Hike"
                image="/assets/images/lets-hike.webp"
                url="https://play.google.com/store/apps/details?id=br.com.floripahike.app&hl=pt_BR&gl=US"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
                stack="React Native | Native Base"
                width={110}
                height={110}
              />
            </FadeInContainer>

            <FadeInContainer lazyLoad>
              <ExperienceListItem
                name="Previcel"
                image="/assets/images/previcel.webp"
                url="https://play.google.com/store/apps/details?id=br.com.dataa.previcel.app"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
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
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
            excepturi deleniti, blanditiis ullam ratione cupiditate consequuntur
            eligendi esse fuga unde soluta doloremque obcaecati quia facere
            error dignissimos! Dolorum, fugiat?"
                stack="Wordpress"
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
