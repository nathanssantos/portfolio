import { css } from "styled-components";

// interface Sizes {
//   bp1400: number;
//   bp1280: number;
//   bp900: number;
//   bp600: number;
//   bp400: number;
// }

const sizes = {
  bp1400: 1400,
  bp1200: 1200,
  bp900: 900,
  bp600: 600,
  bp400: 400,
};

export const media = Object.keys(sizes).reduce(
  (accumulator /* : Object */, label /* : String */) /* : Sizes | {} */ => {
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
