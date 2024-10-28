import {
  CAR_NAME_MAX_LENGTH,
  ERROR_MESSAGE,
} from "../constants/errorMessage.js";

export const validateCarNames = (carNames) => {
  if (!carNames || carNames.trim() === "") {
    throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  }

  const carNameList = carNames.split(",").map((name) => name.trim());
  if (carNameList.length < 2) {
    throw new Error(ERROR_MESSAGE.SINGLE_CAR_NAME);
  }

  carNameList.forEach((name) => {
    if (name.length > CAR_NAME_MAX_LENGTH) {
      throw new Error(ERROR_MESSAGE.MAX_LENGTH_EXCEEDED);
    }
  });

  return carNameList;
};

export const validateRoundNumber = (totalRound) => {
  if (!totalRound) {
    throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  }

  const totalRoundNumber = Number(totalRound);
  if (
    isNaN(totalRound) ||
    totalRound <= 0 ||
    !Number.isInteger(totalRoundNumber)
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  }

  return totalRoundNumber;
};
