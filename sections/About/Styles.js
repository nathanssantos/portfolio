import styled from "styled-components";
import { Section, media } from "../../style";
import SCtheme from "../../style/SCTheme";
const { colors } = SCtheme;

const Styles = styled(Section)`
  .about {
    &__body {
      display: flex;
      align-items: center;
      flex-direction: column;
      /* text-align: center; */

      ${media.bp600`
        flex-direction: row;
      `};
    }

    &__image {
      position: relative;
      min-width: 200px;
      height: 200px;
      width: 200px;
      max-width: 200px;
      border-radius: 50%;
      transition: all 200ms ease-in-out;
      display: flex;
      width: 100%;
      height: 100%;
      filter: grayscale(100%) contrast(1.25);
      margin-bottom: 1rem;

      ${media.bp600`
        margin-right: 2rem;
        margin-bottom: 0;
      `};

      img {
        border-radius: 50%;
        object-fit: cover;
      }

      &__mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 50%;
      }
    }
  }
`;

export default Styles;
