import styled from "styled-components";
import { Section } from "../../../style";
import SCtheme from "../../../style/SCTheme";
const { colors } = SCtheme;

const Styles = styled(Section)`
  .about {
    &__body {
      display: flex;
      align-items: center;
    }

    &__image {
      position: relative;
      min-width: 200px;
      height: 200px;
      width: 200px;
      margin-right: 32px;
      border-radius: 50%;
      transition: all 200ms ease-in-out;
      display: flex;
      width: 100%;
      height: 100%;
      filter: grayscale(100%) contrast(1.25);

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
