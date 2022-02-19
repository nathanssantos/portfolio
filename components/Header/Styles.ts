import styled from "styled-components";

const Styles = styled.header`
  position: sticky;
  top: 0;

  .header__content {
    min-height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__menu {
      display: none;
      @media (min-width: 900px) {
        display: flex;
      }
    }

    &__drawer {
      @media (min-width: 900px) {
        display: none;
      }
    }
  }
`;

export default Styles;
