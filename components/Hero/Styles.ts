import styled from "styled-components";

const Styles = styled.section`
  margin-bottom: 50px;
  padding: 100px 0;

  .hero__content {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: clamp(40px, 10vw, 80px);
      margin-bottom: 0;
      font-weight: 800;
      background: linear-gradient(
        94.23deg,
        #64ffda 12.41%,
        #5374fa 52.55%,
        #5374fa 89.95%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      font-size: clamp(24px, 5.5vw, 45px);
      margin-bottom: 30px;
      font-weight: 700;
    }

    h3 {
      margin-bottom: 0;
      font-size: 18px;
      font-weight: 300;
      font-family: SF Mono;
      color: #64ffda;
    }

    h4 {
      max-width: 400px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;

      a {
        color: #64ffda;
      }
    }
  }
`;

export default Styles;
