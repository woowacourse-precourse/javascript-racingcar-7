import { ERROR } from "../constants/error.js";

export const splitStringByComma = (string) => {
  const carArray = trimArrayElements(string.split(","));
  const carObject = {};

  carArray.forEach((car) => {
    carObject[car] = 0;
  });

  return carObject;
};

const trimArrayElements = (array) => {
  return array.map((element) => {
    if (element.trim() === "") {
      throw new Error(ERROR.EMPTY_STRING);
    }
    return element.trim();
  });
};
