import styled from "styled-components";
import { Section, media, SCTheme } from "../../../style";
const { colors, transition } = SCTheme;

const Styles = styled(Section)`
  display: flex;
  width: 100%;

  .card-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);

    ${media.bp600`
        grid-template-columns: repeat(2, 1fr);
    `};

    ${media.bp900`
        grid-template-columns: repeat(3, 1fr);
    `};

    .fade-in-container-wrapper {
      display: flex;

      .transition-container {
        width: 100%;
        display: flex;
        flex-direction: column;

        .MuiCard-root {
          flex: 1;
          display: flex;
          flex-direction: column;
          transition: ${transition};

          &:hover {
            transform: translate3d(0, -0.4rem, 0);
          }

          .MuiCardContent-root {
            flex: 1;
          }

          .MuiButtonBase-root {
            transition: ${transition};

            &:hover {
              color: ${colors.green};
            }
          }
        }
      }
    }
  }
`;

export default Styles;
