import { createGlobalStyle } from "styled-components";
import { colors, fonts, transition } from "./Theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-BlackItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-Bold.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-ExtraLightBETA.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-ExtraLightBETA.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-ThinBETA.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-ThinBETA.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-BoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-ExtraBold.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-LightItalicBETA.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-LightItalicBETA.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-Italic.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-ThinItalicBETA.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-ThinItalicBETA.woff') format('woff');
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-ExtraBoldItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-MediumItalic.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-Regular.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-LightBETA.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-LightBETA.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-Black.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-SemiBold.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-Medium.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-ExtraLightItalicBETA.woff2') format('woff2'),
        url('/assets/fonts/Inter/Inter-ExtraLightItalicBETA.woff') format('woff');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Medium.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Semibold.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-RegularItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-SemiboldItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-Regular.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url('/assets/fonts/SFMono/SFMono-MediumItalic.woff2') format('woff2'),
        url('/assets/fonts/SFMono/SFMono-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${colors.slate};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }


  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.inter};
    color: ${colors.slate};
    background-color: ${colors.black};
    
    &::-webkit-scrollbar {
      width: 0.375rem;
    }

    &::-webkit-scrollbar-track {
      background: none;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.green};
      border-radius: 0.188rem;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    transition: ${transition};
    color: currentColor;
    display: inline-block;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    transition: ${transition};
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  .underline-hover {
    position: relative;
    
    &:after {
      content: "";
      height: 0.063rem;
      width: 0;
      background: linear-gradient(to right, transparent, ${colors.green}, transparent);
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      transition: ${transition};
      position: absolute;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    } 
  }
`;

export default GlobalStyle;
