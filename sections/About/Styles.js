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

      ${media.bp600`
        align-items: flex-start;
        flex-direction: row;
      `};
    }

    &__image {
      position: relative;
      min-width: 13.25rem;
      height: 13.25rem;
      width: 13.25rem;
      max-width: 13.25rem;
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

    &__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      p {
        ${media.bp600`
          margin-top: 0;
        `};
      }
    }

    &__skills {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-self: flex-start;
      row-gap: 0.5rem;
      column-gap: 1rem;

      li {
        position: relative;
        font-family: "SF Mono";
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;

        &::before {
          content: "▹";
          color: ${colors.green};
        }
      }
    }
  }
`;

export default Styles;
