import Card from "@mui/material/Card";
import styled from "styled-components";
import { media, colors, transition } from "../../style";

const Styles = styled(Card)`
  padding: 2rem;
  text-align: center;
  transition: ${transition};
  width: 100%;

  ${media.bp900`
    text-align: left;
  `};

  .transition-container {
    display: flex;
  }

  .experience__list__item {
    &__image {
      min-width: 6.875rem;
      min-height: 6.875rem;
      margin-bottom: 1rem;
      display: flex;

      ${media.bp900`
        margin-right: 2rem;
        margin-bottom: 0;
        min-width: 11.25rem;
        justify-content: center;
      `};

      img {
        object-fit: contain;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      ${media.bp900`
        flex-direction: row;
      `};
    }

    &__text {
      ${media.bp900`
        margin-right: 2.125rem;
      `};
    }
    &__name {
      margin-bottom: 0.5rem;
      transition: ${transition};

      .MuiTypography-root {
        transition: ${transition};
      }
    }

    &__work {
      margin-top: 0.5rem;
      .MuiTypography-root {
        transition: ${transition};
      }
    }

    &__stack {
      margin-top: 0.5rem;
      transition: ${transition};

      .MuiTypography-root {
        transition: ${transition};
      }
    }
  }

  &:hover {
    .experience__list__item {
      &__name,
      &__stargazers,
      &__stack,
      &__work {
        color: ${colors.green};

        .MuiTypography-root {
          color: ${colors.green};
        }
      }
    }
  }
`;

export default Styles;
