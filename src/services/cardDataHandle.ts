import React from "react";
import { ICard } from "../interfaces/interfaces";
import Card from "../components/Cards/Card";

export const cardDataHandle = (data: ICard[]) => {
  return data.map(
    ({
      id = 1,
      color = "",
      title = "",
      description = "",
      icon = "",
    }: ICard) => {
      const imgIconPath = require(`../assets/icon/${icon}`);

      return React.createElement(Card, {
        key: id,
        color,
        title,
        description,
        icon: imgIconPath, 
      });
    }
  );
};

export const defaultFunc = () => {
  const message = "Ooops, I know there smth going wrong!";

  console.log(message);

  return message;
};
