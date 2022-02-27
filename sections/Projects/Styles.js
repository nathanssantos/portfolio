import styled from "styled-components";
import { Section, media, SCTheme } from "../../style";
const { colors, transition } = SCTheme;

const Styles = styled(Section)`
  display: flex;
  width: 100%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      width: 100%;
    }
  }

  .card-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 3rem;

    ${media.bp600`
        grid-template-columns: repeat(2, 1fr);
    `};

    ${media.bp1200`
        grid-template-columns: repeat(3, 1fr);
    `};
  }

  .fade-in-container-wrapper {
    display: flex;
  }

  .transition-container {
    width: 100%;
    display: flex;
    flex-direction: column;

    > a {
      display: flex;
      flex: 1;
    }
  }

  .project-card {
    &.MuiCard-root {
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

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    &__title {
      transition: ${transition};
      font-size: 1.15rem;
      color: #fff;
    }

    &__stargazers {
      display: flex;
      align-items: center;
      margin-left: 0.5rem;

      .MuiTypography-root {
        line-height: 1;
        margin-left: 0.25rem;
      }
    }

    &__actions {
      &.MuiCardActions-root {
        padding-left: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &:hover {
      .project-card {
        &__title,
        &__stargazers,
        &__actions {
          color: ${colors.green};

          .MuiTypography-root {
            color: ${colors.green};
          }
        }
      }
    }
  }
`;

export default Styles;
