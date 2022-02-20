import styled from "styled-components";

const Styles = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(26, 30, 34, 0.85);
  margin-top: 50px;
  backdrop-filter: blur(10px);

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
