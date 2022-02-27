import ListItem from "@mui/material/ListItem";
import styled from "styled-components";
import { media } from "../../style";

const Styles = styled(ListItem)`
  padding: 1rem;
  text-align: center;

  ${media.bp900`
    text-align: left;
  `};

  .experience__list__item {
    &__image {
      min-width: 110px;
      margin-bottom: 0.5rem;

      ${media.bp900`
        margin-top: 0.5rem;
        margin-right: 1rem;
        margin-bottom: 0;
      `};
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;

      ${media.bp900`
        flex-direction: row;
        align-items: flex-start;
      `};
    }

    &__name {
      margin-bottom: 0.5rem;
    }

    &__stack {
      margin-top: 0.5rem;
    }
  }
`;

export default Styles;
