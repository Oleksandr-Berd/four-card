import styled from "styled-components";

export const CardList = styled.ul`
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 78px;

  background-color: #f2f2f2;

  & > li:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1220px) {
    position: relative;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
`;

export const Card = styled.li`
  text-align: left;

  padding-left: 29px;
  padding-top: 27px;
  padding-right: 29px;
  padding-bottom: 28px;

  background-color: #fff;

  border-radius: 8px;

  border-top: 3px solid
    ${({ color }) =>
      color === "red"
        ? "#FF637B"
        : color === "blue"
        ? "#377FD2"
        : color === "orange"
        ? "#FDBF00"
        : "#00C8C8"};

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1220px) {
    &:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 0;

      transform: translateY(-70%);
      grid-column: 1 / 2; /* First column */
    }

    &:nth-child(2) {
      grid-column: 2 / 3; /* Second column, spans two columns */
    }

    &:nth-child(3) {
      position: absolute;
      top: 50%;
      right: 0;

      transform: translateY(-70%);
      grid-column: 3 / 4; /* Third column */
    }

    &:nth-child(4) {
      grid-column: 2 / 3; /* Centered in the second column of the new row */
    }
  }
`;

export const CartTitle = styled.h4`
  color: #4d4f62;
  font-size: 20px;
  font-weight: 600;
`;

export const CardText = styled.p`
  color: #4d4f62;
  font-size: 13px;
  line-height: 1.77;
  letter-spacing: 0.09px;

  @media (min-width: 1220px){
    margin-bottom: 40px;
  }
`;

export const IconCon = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

