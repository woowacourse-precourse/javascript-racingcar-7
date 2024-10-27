import { ERROR_MESSAGES, MAX_CAR_COUNT } from "./constants.js";

export const carNameHandleError = (carsName, countRacers) => {
  const carNameLengthLimit = carsName
    .split(",")
    .every((carName) => carName.trim().length <= 5);

  if (carsName.trim().length === 0)
    throw new Error(ERROR_MESSAGES.NO_CARS_ENTERED);

  if (!carNameLengthLimit) throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);

  if (countRacers > MAX_CAR_COUNT)
    throw new Error(ERROR_MESSAGES.TOO_MANY_CARS);
};

export const moveNumberHandleError = (noWhitespaceNumber) => {
  if (isNaN(noWhitespaceNumber))
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER_OF_MOVES);

  if (!Number.isInteger(Number(noWhitespaceNumber)) || noWhitespaceNumber < 0)
    throw new Error(ERROR_MESSAGES.POSITIVE_NUMBER_REQUIRED);

  if (noWhitespaceNumber > Number.MAX_SAFE_INTEGER)
    throw new Error(ERROR_MESSAGES.NUMBER_TOO_LARGE);

  if (noWhitespaceNumber.trim().length === 0)
    throw new Error(ERROR_MESSAGES.INVALID_MOVE_INPUT);
};
