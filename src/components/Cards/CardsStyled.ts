import styled from "styled-components";

export const CardList = styled.ul`
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 78px;

  background-color: #f2f2f2;

  & > li:not(:last-child) {
    margin-bottom: 24px;
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
`;

export const IconCon = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`

