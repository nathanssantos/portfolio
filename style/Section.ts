import styled from "styled-components";
import { media } from ".";

const Section = styled.section`
  .content {
    padding: 6rem 0;

    ${media.bp900`
      padding: 0 6rem;
    `};

    ${media.bp1400`
      padding: 0;
    `};
  }

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export default Section;
