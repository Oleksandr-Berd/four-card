import styled from "styled-components";

export const HeroStyled = styled.div`
  padding-left: 39px;
  padding-top: 85px;
  padding-right: 39px;
  padding-bottom: 76px;

  background-color: #f2f2f2;

  & > h3 {
    margin-bottom: 16px;

    font-family: "Poppins";
    font-weight: 100;
    font-size: 24px;
    letter-spacing: 0.17px;
    color: #4d4f62;
    span {
      font-weight: 800;
    }
  }

  & > p {
    font-family: "Poppins";
    font-weight: 300;
    line-height: 1.67;
    letter-spacing: 0.1px;
    color: #4d4f62;
  }

  @media (min-width: 1220px) {
    text-align: center;

    padding: 0;
    padding-top: 80px;
    padding-bottom: 64px;

    & > h3 {
      width: 445px;
      margin-left: auto;
      margin-right: auto;

      font-size: 36px;
      letter-spacing: 0.25px;
    }

    & > p {
      width: 420px;

      margin-left: auto;
      margin-right: auto;

      font-size: 15px;
    }
  }
`;
