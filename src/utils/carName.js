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
    const trimElement = element.trim();

    if (trimElement === "") {
      throw new Error(ERROR.EMPTY_STRING);
    }

    checkMaxLength(trimElement);

    return trimElement;
  });
};

const checkMaxLength = (element) => {
  if (element.length >= 6) {
    throw new Error(ERROR.MAX_NAME);
  }
};
