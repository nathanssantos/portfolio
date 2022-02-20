import styled from "styled-components";
import { media, SCTheme } from "../../style";
const { colors, fonts } = SCTheme;

const Styles = styled.section`
  ${media.bp900`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  `};

  .content {
    display: flex;
    justify-content: space-between;
    padding: 0 2.25rem;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 6rem;

    ${media.bp900`
      min-height: 20rem;
      flex-direction: row;
      margin-bottom: 0;
      align-items: initial;
    `};

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      min-width: 2.5rem;

      ${media.bp900`
        justify-content: space-between;
        flex-direction: column;
      `};

      &::after {
        content: "";
        width: 0.063rem;
        background-color: #fff;
        flex: 1;
        margin-top: 0.5rem;
      }
    }
  }

  .MuiIconButton-root {
    color: ${colors.slate};

    &:hover {
      color: ${colors.green};
    }
  }

  .email {
    padding-top: 0.5rem;
    margin-bottom: 1rem;

    ${media.bp900`
      writing-mode: vertical-rl;
      margin-bottom: 0;
    `};

    a {
      font-family: ${fonts.mono};
      line-height: 1;
      font-size: 0.8rem;
      letter-spacing: 0.1em;
      color: ${colors.slate};

      &:hover {
        color: ${colors.green};
      }
    }
  }
`;

export default Styles;
