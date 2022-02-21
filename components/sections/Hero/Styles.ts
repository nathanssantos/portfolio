import styled from "styled-components";
import { SCTheme, Section } from "../../../style";
const { colors, fonts } = SCTheme;

const Styles = styled(Section)`
  margin-bottom: 2.6rem;
  padding: 6.25rem 0;

  .content {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: clamp(2.375rem, 9vw, 5rem);
      font-weight: 800;
      line-height: 1;
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
      font-size: clamp(1.438rem, 5vw, 3.2rem);
      font-weight: 700;
      line-height: 1;
      margin-bottom: 1.875rem;
    }

    h3 {
      font-size: 1.125rem;
      line-height: 1;
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
