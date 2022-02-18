import styled from "styled-components";

const HeroStyles = styled.section`
  .hero__content {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    .lazyload-wrapper {
      flex: 1;
    }
  }
`;

export default HeroStyles;
