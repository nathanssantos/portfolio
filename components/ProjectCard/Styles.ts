import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Section, media, SCTheme } from "../../style";
const { colors, transition } = SCTheme;

const Styles = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;

  .MuiCardContent-root {
    flex: 1;
  }

  .MuiButtonBase-root {
    transition: ${transition};

    &:hover {
      color: ${colors.green};
    }
  }

  .project-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    transition: ${transition};

    &:hover {
      transform: translate3d(0, -0.4rem, 0);
    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      align-items: flex-start;
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
      margin-top: 0.125rem;

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
`;

export default Styles;
