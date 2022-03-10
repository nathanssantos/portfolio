import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { FadeInContainer } from "../../components";
import Styles from "./Styles";

const Hero = () => {
  const [scrollIconIsVisible, setScrollIconIsVisible] = useState(true);

  const detectScrollDirection = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      setScrollIconIsVisible(false);
    } else {
      setScrollIconIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection, false);

    return () => {
      window.removeEventListener("scroll", detectScrollDirection, false);
    };
  }, []);

  return (
    <Styles>
      <Container maxWidth="lg">
        <div className="content">
          <FadeInContainer delay={1300}>
            <h3>Hi, my name is</h3>
          </FadeInContainer>
          <FadeInContainer delay={1450}>
            <h1>Nathan Santos.</h1>
          </FadeInContainer>
          <FadeInContainer delay={1600}>
            <h2>I build digital experiences.</h2>
          </FadeInContainer>
          <FadeInContainer delay={1750}>
            <h4>
              I’m a Front-end engineer with 4 years of experience specializing
              in building high-quality digital products. Currently, I’m Tech
              Lead at{" "}
              <a
                href="https://w16.dev/"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                W16 Software House
              </a>
              .
            </h4>
          </FadeInContainer>
        </div>
      </Container>
      <FadeInContainer delay={2450}>
        <motion.a
          href="#about"
          className="scroll-to-icon"
          animate={{
            opacity: scrollIconIsVisible ? 1 : 0,
            transform: `scale(${scrollIconIsVisible ? 1 : 0})`,
          }}
          transition={{ duration: 0.25 }}
          initial={false}
        />
      </FadeInContainer>
    </Styles>
  );
};

export default Hero;
