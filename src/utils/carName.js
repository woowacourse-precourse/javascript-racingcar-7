import { ERROR } from "../constants/error.js";

export const splitStringByComma = (string) => {
  const carArray = trimArrayElements(string.split(","));
  const carObject = {};

  checkoutDuplication(carArray);

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

const checkoutDuplication = (carArray) => {
  const carSet = new Set();

  for (const item of carArray) {
    if (carSet.has(item)) {
      throw new Error(ERROR.DUPLICATION);
    }
    carSet.add(item);
  }
};
