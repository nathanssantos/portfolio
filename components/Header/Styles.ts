import styled from "styled-components";

const Styles = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(26, 30, 34, 0.85);
  margin-top: 3.125rem;
  backdrop-filter: blur(0.625rem);

  .header__content {
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__menu {
      display: none;
      @media (min-width: 56.25rem) {
        display: flex;
      }
    }

    &__drawer {
      @media (min-width: 56.25rem) {
        display: none;
      }
    }
  }
`;

export default Styles;
