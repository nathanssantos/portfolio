import styled from "styled-components";
import { theme } from "../../../style";
const { colors, fonts } = theme;

const Styles = styled.section`
  margin-bottom: 3.125rem;
  padding: 6.25rem 0;

  .hero__content {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: clamp(2.375rem, 10vw, 5rem);
      margin-bottom: 0;
      font-weight: 800;
      background: linear-gradient(
        94.23deg,
        ${colors.green} 12.41%,
        ${colors.blue} 52.55%,
        ${colors.blue} 89.95%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: clamp(1.438rem, 5.5vw, 2.813rem);
      margin-bottom: 1.875rem;
      font-weight: 700;
    }

    h3 {
      margin-bottom: 0;
      font-size: 1.125rem;
      font-weight: 300;
      font-family: ${fonts.mono};
      color: ${colors.green};
    }

    h4 {
      max-width: 25rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;

      a {
        color: ${colors.green};
      }
    }
  }
`;

export default Styles;
