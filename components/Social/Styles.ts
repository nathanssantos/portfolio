import styled from "styled-components";
import { media, SCTheme } from "../../style";
const { colors, fonts } = SCTheme;

const Styles = styled.section`
  .left,
  .right {
  }

  .left {
    ${media.bp900`
      left: 2.25rem;
    `};
  }

  .right {
    ${media.bp900`
      right: 2.25rem;
    `};
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding: 0 2.25rem;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 6rem;

    ${media.bp900`
      flex-direction: row;
      margin-bottom: 0;
      align-items: initial;
    `};

    .left,
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 2.5rem;
      gap: 1rem;

      ${media.bp900`
        position: fixed;
        bottom: 0;
        min-height: 20rem;
        justify-content: space-between;
        flex-direction: column;
        
        &::after {
          content: "";
          width: 0.063rem;
          background: linear-gradient(transparent, ${colors.slate});
          transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          flex: 1;
          margin-top: 0.5rem;
        }
      `};

      &:hover {
        &::after {
          background: linear-gradient(transparent, ${colors.green});
        }
      }
    }
  }

  .MuiIconButton-root {
    color: ${colors.slate};
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
      color: ${colors.green};
      transform: translate3d(0, -0.188rem, 0);
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
      line-height: 2.25rem;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

      &:hover {
        color: ${colors.green};
        transform: translate3d(0, -0.188rem, 0);
      }
    }
  }
`;

export default Styles;
