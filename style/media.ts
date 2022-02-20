import { css } from "styled-components";

interface Sizes {
  bp1400: number;
  bp1280: number;
  bp900: number;
  bp600: number;
  bp400: number;
}

const sizes = {
  bp1400: 1400,
  bp1280: 1200,
  bp900: 900,
  bp600: 600,
  bp400: 400,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator: Object, label: String): Sizes | {} => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export default media;
