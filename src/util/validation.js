import { NUMBER_ERROR, CAR_ERROR } from "./constants";

export const validateCarNames = (names) => {
  if (!names.trim()) {
    throw new Error(CAR_ERROR.CAR_BLANK);
  }

  const carNames = names.split(",").map((name) => name.trim());

  if (carNames.length < 2) {
    throw new Error(CAR_ERROR.CAR_OVER_2);
  }

  const uniqueNames = new Set(carNames);
  if (uniqueNames.size !== carNames.length) {
    throw new Error(CAR_ERROR.CAR_DUPLICATE);
  }

  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error(CAR_ERROR.CAR_UNDER_5);
    }
    if (!name) {
      throw new Error(CAR_ERROR.CAR_BLANK);
    }
  });

  return carNames;
};

export const validateTryCount = (count) => {
  if (!count.trim()) {
    throw new Error(NUMBER_ERROR.NUMBER_BLANK);
  }

  const number = Number(count);
  if (isNaN(number) || !Number.isInteger(number) || number <= 0) {
    throw new Error(NUMBER_ERROR.NUMBER_NONNUM);
  }

  return number;
};
