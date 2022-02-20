import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FadeInContainer } from "..";
import Styles from "./Styles";
import SCTheme from "../../style/SCTheme";

const Social = () => {
  return (
    <Styles className="social">
      <div className="content">
        <div className="left">
          <FadeInContainer delay={900}>
            <a
              href="https://github.com/nathanssantos/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </FadeInContainer>
          <FadeInContainer delay={1000}>
            <a
              href="https://www.instagram.com/nathanssantosdev/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </a>
          </FadeInContainer>
          <FadeInContainer delay={1100}>
            <a
              href="https://www.linkedin.com/in/nathan-s-santos-4b2637163/"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
          </FadeInContainer>
        </div>
        <div className="right">
          <FadeInContainer delay={900}>
            <div className="email">
              <a
                href="mailto:nathansilvasantos@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                nathansilvasantos@gmail.com
              </a>
            </div>
          </FadeInContainer>
        </div>
      </div>
    </Styles>
  );
};

export default Social;
